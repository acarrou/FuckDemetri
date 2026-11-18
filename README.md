# Fuck Demetri

Static site for fuckdemetri.com (and .store / .net / .info / .online). No build step, no framework. Open `index.html` or serve the folder.

```
python3 -m http.server 8000      # then visit http://localhost:8000
```

## Editing

Everything you'd change regularly lives in **`site.config.js`**:

| What | Where |
|---|---|
| Taglines, Demetri Quotes | `tagline`, `quotes` |
| Days-since counter | `lastIncident` (YYYY-MM-DD), `incidentLabel` |
| Photos & videos | `photos` array, files in `assets/photos/` and `assets/video/` |
| Merch products + buy links | `products`, `payLink` |
| Footer socials | `social` |

### Adding photos and videos
1. Drop the image into `assets/photos/` (JPG/PNG/WebP, ideally under 1 MB each). Strip location metadata first if it came straight off a phone.
2. Add a line to `photos` in `site.config.js`:
   ```js
   { src: "assets/photos/demetri-23.jpg", caption: "Exhibit A." },
   ```
3. For video, convert to H.264 MP4 (iPhone HEVC `.mov` files won't play in most browsers) and add a poster frame:
   ```
   ffmpeg -i clip.mov -map_metadata -1 -vf "scale='min(1080,iw)':-2" -c:v libx264 -crf 24 -pix_fmt yuv420p -movflags +faststart -c:a aac assets/video/demetri-04.mp4
   ffmpeg -ss 0.5 -i assets/video/demetri-04.mp4 -frames:v 1 assets/video/demetri-04-poster.jpg
   ```
   ```js
   { type: "video", src: "assets/video/demetri-04.mp4", poster: "assets/video/demetri-04-poster.jpg" },
   ```

## Merch (Fourthwall)

The store is run by Fourthwall: shop at https://fuckdemetri-shop.fourthwall.com. They print, ship,
handle support and payouts. The merch page on this site is the storefront; only checkout happens
on Fourthwall.

How the Buy buttons work: each product in `site.config.js` has a `slug` and a `variants` list
(size → Fourthwall variant ID → price). Picking a size and clicking Buy opens
`https://fuckdemetri-shop.fourthwall.com/cart/checkout?products=<variantId>:1` which lands
straight in Fourthwall checkout with that item in the cart. No API key is needed for this.

Optional live mode: paste a Storefront API token into `storefrontToken` (Fourthwall dashboard →
Settings → For developers → Storefront API) and the page will refresh prices, sizes and stock from
Fourthwall on every load, falling back to the config if the API is unreachable.

Adding a product later: create it on Fourthwall, then add an entry to `products` with its slug
and variant IDs (Dashboard → Products → the product → variants, or ask Claude with the Fourthwall
MCP connected). `hidden: true` keeps a card off the page.

Managing the shop from Claude Code: `claude mcp add -s user --transport http fourthwall https://mcp.fourthwall.com`
then `/mcp` to log in. Claude can then read orders, change prices, create products from the artwork
in `fourthwall-upload/`, and publish/unpublish the shop.

## Deploying to the domain

The site is plain files, so any static host works. Recommended: **Cloudflare Pages** or **Netlify** (both free).

1. Push this folder to a GitHub repo (or drag-and-drop the folder into Netlify).
2. In the host, add a custom domain: `fuckdemetri.com` and `www.fuckdemetri.com`.
3. In GoDaddy → Domain → **Manage DNS**, set the records the host gives you (usually an `A` record on `@` and a `CNAME` on `www`).
4. For the other domains (.store, .net, .info, .online), use GoDaddy's **Forward Domain** to send them to `https://fuckdemetri.com`.

SSL is automatic on both hosts.

## Files

```
index.html        home: hero, counter, quotes
gallery.html      photos + videos (reads site.config.js)
merch.html        store (reads site.config.js)
404.html          not found page
site.config.js    all content/config
css/style.css
js/main.js
assets/brand/     logo SVGs used by the site (cropped): lockup, fd, badge, white variants
assets/brand/print/  original 4096px PNGs + SVGs, upload these to the print shop
assets/merch/     product renders shown in the store
assets/photos/    drop Demetri photos here
```
