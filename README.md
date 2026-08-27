# Ping! — ITS Weekly Newsletter

Internal weekly web-zine for Huntington University Information & Technology Services.

| File | What it is |
|---|---|
| `index.html` | Redirects to the current issue — edit the URL in it when a new issue ships
| `issues/issue-01.html` | Issue #1, self-contained single-page web-zine |
| `issues/issue-01.pdf` | Issue #1, PDF export |
| `IT_Newsletter_Issue_1.md` | Issue #1 source text |
| `Ping_Design_Brief.md` | Design brief / visual direction |

## GIF poll

Votes are stored by a tiny Cloudflare Worker (`worker/`), one vote per browser, and
the page shows the live team tally. See `worker/README.md` to deploy or reset it.
