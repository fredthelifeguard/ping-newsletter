# ping-poll worker

Tiny vote store for the newsletter's GIF poll (Cloudflare Worker + KV, free tier).

```
cd worker
npx wrangler login                       # once
npx wrangler kv namespace create POLL    # once; paste the id into wrangler.toml
npx wrangler deploy
```

Reset a poll: `npx wrangler kv key delete --binding POLL issue-01 --remote`
