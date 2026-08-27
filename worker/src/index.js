// Ping! GIF-of-the-week poll — Cloudflare Worker + KV.
//   GET  /poll/:id                -> { counts: {"option-a":n,...}, total, updated, yourVote }
//   POST /poll/:id  {voter, option} -> same; option null = retract. Same option twice = retract.
// One vote per `voter` (a random id the browser keeps in localStorage). Honor system — ~9 people.

const OPTIONS = ['option-a', 'option-b', 'option-c'];
const ALLOWED_ORIGINS = [
  'https://fredthelifeguard.github.io',
  'http://localhost:8765',
];

function cors(origin) {
  const ok = ALLOWED_ORIGINS.includes(origin) || /^http:\/\/localhost(:\d+)?$/.test(origin || '');
  return {
    'Access-Control-Allow-Origin': ok ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json',
  };
}

function summarize(data, voter) {
  const counts = Object.fromEntries(OPTIONS.map(o => [o, 0]));
  for (const v of Object.values(data.votes)) if (counts[v] !== undefined) counts[v]++;
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return { counts, total, updated: data.updated, yourVote: voter ? (data.votes[voter] ?? null) : null };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const headers = cors(request.headers.get('Origin'));
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });

    const m = url.pathname.match(/^\/poll\/([a-z0-9-]{1,40})$/);
    if (!m) return new Response(JSON.stringify({ error: 'not found' }), { status: 404, headers });
    const key = m[1];

    const data = (await env.POLL.get(key, 'json')) || { votes: {}, updated: null };

    if (request.method === 'GET') {
      const voter = url.searchParams.get('voter') || null;
      return new Response(JSON.stringify(summarize(data, voter)), { headers });
    }

    if (request.method === 'POST') {
      let body;
      try { body = await request.json(); } catch { body = {}; }
      const voter = typeof body.voter === 'string' && /^[A-Za-z0-9_-]{8,64}$/.test(body.voter) ? body.voter : null;
      if (!voter) return new Response(JSON.stringify({ error: 'bad voter id' }), { status: 400, headers });
      const option = body.option;
      if (option !== null && !OPTIONS.includes(option))
        return new Response(JSON.stringify({ error: 'bad option' }), { status: 400, headers });

      if (option === null || data.votes[voter] === option) delete data.votes[voter];
      else data.votes[voter] = option;
      data.updated = new Date().toISOString();
      await env.POLL.put(key, JSON.stringify(data));
      return new Response(JSON.stringify(summarize(data, voter)), { headers });
    }

    return new Response(JSON.stringify({ error: 'method not allowed' }), { status: 405, headers });
  },
};
