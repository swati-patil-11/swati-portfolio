# Swati Patil Portfolio

Plain HTML, CSS, and vanilla JavaScript portfolio site. No build step or dependencies are required to open the page.

## Run locally

Double-click `index.html` for the visual site. The page includes fallback stats for `file://` because browsers do not allow local JSON fetches. To run the live stats fetcher, use Node 18+:

```bash
npm run fetch-stats
```

For a local server, run `python3 -m http.server` from this folder and open `http://localhost:8000`.

## GitHub Pages

1. Push this folder to a GitHub repository.
2. Open repository **Settings -> Pages**.
3. Select **Deploy from a branch**, choose the branch and `/ (root)`, then save.
4. In **Settings -> Actions -> General**, allow read and write permissions so the stats workflow can commit `data/stats.json`.

The workflow runs every six hours, on push, and through manual **workflow_dispatch**. CodeChef and GeeksforGeeks profiles do not expose official APIs, so their public-page parsers may need maintenance if site markup changes.

## Before publishing checklist

- [ ] Replace the seven `PASTE_CERTIFICATE_LINK_HERE` values in `script.js`.
- [ ] Replace the three placeholder project GitHub links in `script.js`.
- [ ] Replace `CODECHEF_USERNAME` and `GFG_USERNAME` in `data/config.json` (the single profile configuration file).
- [ ] Update the LeetCode fallback count in `fallbackStats` in `script.js`.
- [ ] Replace `PASTE_FORMSPREE_ENDPOINT_HERE` in `data/config.json`.
- [ ] Add your actual `resume.pdf` beside `index.html`.
- [ ] Optionally update the canonical/Open Graph URL in `index.html` to match the repository URL.
