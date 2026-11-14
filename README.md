# Ali Bawazeer Portfolio

Animated portfolio for Ali Bawazeer, comedy and drama content creator from Hyderabad, India.
Plain HTML, CSS and JavaScript. No build step.

Live URL: https://alibawazeer07.github.io/Portfolio/

## Deploy from Termux

```bash
pkg install git unzip -y
cd ~/storage/downloads          # run termux-setup-storage first if this folder is missing
unzip Portfolio.zip -d Portfolio-site
cd Portfolio-site/Portfolio
git init
git branch -M main
git remote add origin https://github.com/AliBawazeer07/Portfolio.git
git add .
git commit -m "Launch portfolio"
git push -u origin main --force
```

If the repo already has files you want to keep, run `git clone` first, copy these files over it, then commit and push normally.

GitHub asks for a username and a Personal Access Token as the password.

## Turn on GitHub Pages

Repo > Settings > Pages > Build and deployment > Source: Deploy from a branch > Branch: `main`, folder `/ (root)` > Save.
Wait about a minute, then open the live URL.

## Get found on Google

1. Open https://search.google.com/search-console and add the URL-prefix property `https://alibawazeer07.github.io/Portfolio/`.
2. Verify it with the HTML tag method: paste the given `<meta name="google-site-verification" ...>` into `<head>` in `index.html`, push, then click Verify.
3. Submit `https://alibawazeer07.github.io/Portfolio/sitemap.xml` under Sitemaps, and use URL Inspection > Request indexing.
4. Put the portfolio link in your Instagram bio and GitHub profile. Links from your own profiles help Google connect your name to this site.
5. Do the same with Bing Webmaster Tools (it also feeds many AI search tools).

## Editing

- Text and links: `index.html`
- Colours and motion: `css/style.css` (`:root` variables at the top)
- Phone number for WhatsApp: `js/main.js` (`PHONE`) and the `wa.me` links in `index.html`
- If you change the repo name or add a custom domain, update the URLs in `index.html`, `sitemap.xml`, `robots.txt` and `llms.txt`.
