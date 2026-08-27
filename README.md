# Ping! — ITS Weekly Newsletter

Internal weekly web-zine for Huntington University Information & Technology Services.

| File | What it is |
|---|---|
| `index.html` | Redirects to the current issue — edit the URL in it when a new issue ships
| `issues/issue-01.html` | Issue #1, self-contained single-page web-zine |
| `issues/issue-01.pdf` | Issue #1, PDF export |
| `IT_Newsletter_Issue_1.md` | Issue #1 source text |
| `Ping_Design_Brief.md` | Design brief / visual direction |

## GIF poll results

Votes are cast in a Microsoft Forms poll; the page shows a live tally read from
`issues/issue-01-results.json` (auto-refreshes every 60s). To publish the current
numbers from the Forms **Responses** tab:

```
scripts/update-results.sh <option-a> <option-b> <option-c>
```
