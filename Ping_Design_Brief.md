# Design Brief: "Ping!" — ITS Weekly Web-Zine (Issue #1)

## What this is
A single-page, scrollable web-zine for Huntington University's Information & Technology Services department internal newsletter, called **Ping!** Sent weekly on Fridays to the full IT team (~10-15 people: Service Desk, Infrastructure, and Application Services). Tone: warm, funny, self-aware IT humor. It should feel like a zine someone made with love, not a corporate comms template.

Full text content is attached separately (IT_Newsletter_Issue_1.md). Use it verbatim except where noted; two [PLACEHOLDER] blocks remain for the author to fill.

## Vibe & aesthetic direction
- **Terminal-meets-zine.** The core motif is the `ping` command: monospace accents, a blinking cursor, subtle network/packet imagery. But it should NOT look like a dark hacker dashboard; keep it friendly and readable.
- Think: a clean light background with terminal-styled accent blocks, like a well-designed developer blog crossed with a print zine.
- Playful but legible. Humor lives in the copy; the design's job is to make it scannable in 5 minutes on a work monitor or phone.

## Masthead / header
- Big "Ping!" wordmark, ideally styled like terminal output. Consider rendering the tagline line as an actual terminal block:
  `PING huntington-its... Reply from all of you: time=5min TTL=Friday`
  with a blinking cursor after it (CSS animation, subtle).
- Below: "ITS Weekly · Issue #1 · Week of August 17, 2026"
- Optional: a tiny radar/sonar ping animation (one expanding ring, slow, subtle, loops). Skip if it fights readability.

## Layout & sections (in order)
1. **Intro paragraph** — regular prose, welcoming.
2. **🏆 Wins Worth Naming** — the anchor section. Style each win as a "card" or a terminal-log entry (e.g., prefixed with a `[OK]` or `✓` glyph in green). 6 items.
3. **📣 The Big One: Canva** — visually distinct callout block (accent border or tinted background). This is the week's operational message; slightly more serious styling, still friendly. Contains a 3-item list; keep the list styling clean.
4. **🍂 The Semester Is Coming** — prose plus a short "Reminders" list. Could use a subtle autumn accent color here.
5. **🎉 Retreat Rewind** — fun section. Leave an obvious photo slot (16:9 placeholder frame with a caption line) since the author will drop a retreat photo in.
6. **💡 Small Thing, Big Difference** — closing call-to-action block inviting submissions from all three teams.
7. **Sign-off** — "Connection confirmed. See you next Friday. 🫡" then the italic footer line.

## Color & type
- Light background (off-white / paper). One primary accent (suggest a green in the "successful ping" family, e.g., terminal green, used sparingly for checkmarks, links, and the masthead accent), one secondary neutral.
- Optional nod to Huntington University's red as a secondary accent if it plays nice; don't force it.
- Body text: highly readable sans or serif, generous line height. Monospace ONLY for terminal-flavored accents (masthead line, section glyphs, the footer). Do not set body copy in monospace.

## Practical constraints
- Single self-contained HTML file (inline CSS, no external dependencies) so it can be hosted anywhere or attached/linked internally.
- Must read well at both desktop width and phone width.
- Email clients are terrible, so this is a WEB page the email will link to (or content gets pasted separately); design for browser rendering, no email-client hacks needed.
- Fast: no heavy assets. Any animation must be CSS-only and subtle.
- Emoji in section headers are part of the voice; keep them.

## Reusability
Structure the sections as clearly repeatable blocks with commented HTML, since this becomes a weekly template: future issues will swap content into the same skeleton. A tiny "Issue #N" variable spot in the masthead helps.

## Do NOT
- No dark-mode-hacker aesthetic, no Matrix rain, no stock photos of servers.
- No corporate template energy (no giant hero images, no "In This Issue" table of contents; it's a 5-minute scroll).
- Don't bury the humor under decoration; when in doubt, simpler.
