/* FUCK DEMETRI — behavior. Reads everything from window.SITE (site.config.js). */
(function () {
  const S = window.SITE || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // Mark current nav link
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((a) => {
    if (a.getAttribute("href") === path) a.setAttribute("aria-current", "page");
  });

  // Rotating tagline
  const tag = $("[data-tagline]");
  if (tag && S.tagline?.length) {
    let i = Math.floor(Math.random() * S.tagline.length);
    const show = () => { tag.textContent = S.tagline[i]; i = (i + 1) % S.tagline.length; };
    show();
    setInterval(show, 4000);
  }

  // Days-since counter
  const num = $("[data-days]");
  if (num && S.lastIncident) {
    const then = new Date(S.lastIncident + "T00:00:00");
    const days = Math.max(0, Math.floor((Date.now() - then) / 86400000));
    num.textContent = days;
    const label = $("[data-days-label]");
    if (label) label.textContent = S.incidentLabel || "days";
  }

  // Shared lightbox
  let lb;
  const closeLb = () => { if (lb) { lb.classList.remove("open"); lb.innerHTML = ""; } };
  const openLb = (p) => {
    if (!lb) {
      lb = document.createElement("div");
      lb.className = "lightbox";
      document.body.appendChild(lb);
      lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
      document.addEventListener("keydown", (e) => e.key === "Escape" && closeLb());
    }
    lb.innerHTML = p.type === "video"
      ? `<video src="${p.src}" poster="${p.poster || ""}" controls autoplay playsinline></video>`
      : `<img src="${p.src}" alt="${p.caption || "Demetri"}">`;
    lb.classList.add("open");
  };
  // About (from Instagram)
  const aboutEl = $("[data-about]");
  if (aboutEl && S.about) {
    const a = S.about;
    aboutEl.innerHTML = `
      <div class="about-card">
        <img class="about-avatar" src="${a.avatar}" alt="${a.name}" width="140" height="140">
        <div class="about-body">
          <div class="about-handle"><a href="${a.instagram}" target="_blank" rel="noopener">@${a.handle}</a></div>
          <h3 class="about-name">${a.name}</h3>
          <p class="about-bio">“${a.bio}” <span class="muted">(his words, not ours)</span></p>
          ${a.facts?.length ? `<div class="about-facts">${a.facts.map((f) => `<div class="fact"><div class="fact-v">${f.v}</div><div class="fact-k">${f.k}</div><div class="fact-n">${f.note || ""}</div></div>`).join("")}</div>` : ""}
        </div>
      </div>`;
  }

  // The Feed (real posts + Trevor)
  const feedEl = $("[data-feed]");
  if (feedEl && S.feed?.length) {
    feedEl.innerHTML = S.feed.map((f, i) => `
      <article class="post">
        <header class="post-head">
          <img src="${S.about?.avatar || ""}" alt="" class="post-avatar">
          <div><div class="post-user">${S.about?.handle || "sweezy_dubz"}</div><div class="post-where">${f.where || ""}</div></div>
        </header>
        <div class="post-media" data-post="${i}"><img src="${f.image}" alt="Instagram post" loading="lazy"></div>
        <div class="post-body">
          <div class="post-likes">♥ ${Number(f.likes || 0).toLocaleString()} likes</div>
          <p class="post-caption"><b>${S.about?.handle || "sweezy_dubz"}</b> ${f.caption}</p>
          ${(f.thread || (f.comment ? [f.comment] : [])).map((c) => `<p class="post-comment ${c.by === "trv0r" ? "is-trevor" : "is-reply"}"><b>${c.by}</b> ${c.text}</p>`).join("")}
          ${f.verdict ? `<p class="post-verdict">${f.verdict}</p>` : ""}
        </div>
      </article>`).join("");
    feedEl.addEventListener("click", (e) => {
      const m = e.target.closest("[data-post]");
      if (m) openLb({ src: S.feed[m.dataset.post].image, caption: "Demetri" });
    });
  }

  // Character sheet
  const statsEl = $("[data-stats]");
  if (statsEl && S.stats?.length) {
    statsEl.innerHTML = S.stats.map((st) => `
      <div class="stat">
        <div class="stat-head"><span class="stat-name">${st.name}</span><span class="stat-val">${st.value}/100</span></div>
        <div class="stat-bar"><div class="stat-fill" style="width:${Math.max(2, Math.min(100, st.value))}%"></div></div>
        ${st.note ? `<div class="stat-note">${st.note}</div>` : ""}
      </div>`).join("");
  }

  // Quotes — all of them
  const quotesEl = $("[data-quotes]");
  if (quotesEl && S.quotes?.length) {
    quotesEl.innerHTML = S.quotes.map((q) => `
      <figure class="quote">
        ${q.context ? `<figcaption class="quote-context">${q.context}</figcaption>` : ""}
        <blockquote>${q.text}</blockquote>
      </figure>`).join("");
  }

  // Marquee content
  const track = $("[data-marquee]");
  if (track) {
    const items = [
      "Fuck Demetri", "Wassuh doe", "Est. 2026", "Merch available", "Still not sorry",
      "What's the point", "I'm going to die anyways", "They're like milk", "Too less tattoos",
      "DJ Meatman", "Nothing matters", "Buy a hoodie", "Wassuh doe", "Exhibit A through Z",
      "No refunds", "No apologies", "Contains Demetri", "Yellow gloves", "Cause of death: his own joke", "Welcome to Shitty Airlines", "City Wok voice", "I'm Batman", "He's not Batman", "One does not simply", "My precious", "Second breakfast", "Alfred would've quit",
    ];
    const html = items.map((t) => `<span>${t}</span><span>★</span>`).join("");
    track.innerHTML = html + html; // duplicate for seamless loop
  }

  const items = S.shuffleGallery ? shuffle(S.photos || []) : (S.photos || []);

  // Gallery (photos + videos)
  const gal = $("[data-gallery]");
  if (gal) {
    if (!items.length) {
      gal.outerHTML = `<div class="empty"><strong>No photos yet.</strong>Drop images into <code>assets/photos/</code> and list them in <code>site.config.js</code>.</div>`;
    } else {
      gal.innerHTML = items.map((p, i) => `
        <figure data-i="${i}" class="${p.type === "video" ? "is-video" : ""}">
          <img src="${p.type === "video" ? p.poster : p.src}" alt="${p.caption || "Demetri"}" loading="lazy">
          ${p.type === "video" ? `<span class="play" aria-hidden="true">▶</span>` : ""}
          ${p.caption ? `<figcaption>${p.caption}</figcaption>` : ""}
        </figure>`).join("");
      gal.addEventListener("click", (e) => {
        const fig = e.target.closest("figure");
        if (fig) openLb(items[fig.dataset.i]);
      });
    }
  }

  // Featured polaroids on the home page
  const feat = $("[data-featured]");
  if (feat) {
    const pool = (S.featured || []).map((src) => items.find((p) => p.src === src) || { src }).filter((p) => p.src);
    const picks = shuffle(pool).slice(0, S.featuredCount || 5);
    if (!picks.length) feat.remove();
    else {
      feat.innerHTML = picks.map((p, i) => `
        <figure class="polaroid" data-i="${i}">
          <img src="${p.src}" alt="${p.caption || "Demetri"}" loading="lazy">
          <figcaption>${p.caption || "Demetri."}</figcaption>
        </figure>`).join("");
      feat.addEventListener("click", (e) => {
        const fig = e.target.closest("figure");
        if (fig) openLb(picks[fig.dataset.i]);
      });
    }
  }

  // Merch — static cards first, then upgrade to live Fourthwall data if a token is set
  const shop = $("[data-shop]");
  const money = (m) => m && typeof m.value === "number"
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: m.currency || "USD", maximumFractionDigits: m.value % 1 ? 2 : 0 }).format(m.value)
    : "";
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const byName = (name) => (S.products || []).find((p) => p.name.trim().toLowerCase() === String(name).trim().toLowerCase());

  // Turn a site.config.js product into the same shape Fourthwall's API returns
  const toLiveShape = (p) => ({
    type: "PRODUCT", name: p.name, slug: p.slug || "", description: p.desc || "",
    images: p.image ? [{ url: p.image }] : [],
    variants: (p.variants || []).map((v) => ({
      id: v.id, name: v.size, unitPrice: { value: v.price, currency: "USD" },
      stock: { type: "UNLIMITED" }, attributes: { size: { name: v.size } },
    })),
  });

  const renderStatic = () => {
    const products = (S.products || []).filter((p) => !p.hidden);
    const withVariants = products.filter((p) => p.variants?.length);
    if (withVariants.length === products.length) { renderLive(products.map(toLiveShape)); return; }
    shop.innerHTML = products.map((p) => {
      if (p.variants?.length) return cardHTML(toLiveShape(p));
      const link = p.buy || S.shopUrl;
      const buy = link
        ? `<a class="btn btn-primary" href="${link}" target="_blank" rel="noopener">Buy</a>`
        : `<span class="btn btn-ghost disabled">Coming soon</span>`;
      return `
        <article class="card">
          <div class="media"><img src="${p.image}" alt="${esc(p.name)}" loading="lazy"></div>
          <div class="body">
            <h3>${esc(p.name)}</h3>
            <p class="desc">${esc(p.desc || "")}</p>
            <div class="row"><span class="price">${esc(p.price)}</span>${buy}</div>
          </div>
        </article>`;
    }).join("");
    wireSizeSelects();
  };

  const shopBase = () => (S.shopUrl || "").replace(/\/+$/, "");
  const cardHTML = (p) => {
    const base = shopBase();
    const local = byName(p.name) || {};
    const img = local.image || p.images?.[0]?.transformedUrl || p.images?.[0]?.url || p.variants[0]?.images?.[0]?.url || "";
    const inStock = (v) => v.stock?.type !== "LIMITED" || (v.stock.inStock ?? 0) > 0;
    const sizes = [];
    p.variants.forEach((v) => {
      const label = v.attributes?.size?.name || v.name || "One size";
      if (!sizes.find((x) => x.label === label)) sizes.push({ label, id: v.id, price: v.unitPrice, ok: inStock(v) });
    });
    const first = sizes.find((x) => x.ok) || sizes[0];
    const soldOut = !sizes.some((x) => x.ok);
    const select = sizes.length > 1 ? `
      <label class="size"><span>Size</span>
        <select data-variant>${sizes.map((x) => `<option value="${x.id}" data-price="${x.price?.value ?? ""}" ${x.ok ? "" : "disabled"} ${x === first ? "selected" : ""}>${esc(x.label)}${x.ok ? "" : " (sold out)"}</option>`).join("")}</select>
      </label>` : "";
    const buy = soldOut
      ? `<span class="btn btn-ghost disabled">Sold out</span>`
      : `<a class="btn btn-primary" data-buy data-base="${base}" href="${base}/cart/checkout?products=${first.id}:1&currency=USD" target="_blank" rel="noopener">Buy</a>`;
    const media = `<img src="${img}" alt="${esc(p.name)}" loading="lazy">`;
    return `
      <article class="card" data-product="${esc(p.slug)}">
        <div class="media">${media}</div>
        <div class="body">
          <h3>${esc(p.name)}</h3>
          <p class="desc">${esc(local.desc || p.description || "")}</p>
          ${select}
          <div class="row"><span class="price" data-price-display>${money(first?.price)}</span>${buy}</div>
        </div>
      </article>`;
  };
  const wireSizeSelects = () => {
    shop.querySelectorAll("[data-variant]").forEach((sel) => {
      sel.addEventListener("change", () => {
        const card = sel.closest(".card");
        const opt = sel.selectedOptions[0];
        const buy = card.querySelector("[data-buy]");
        if (buy) buy.href = `${buy.dataset.base}/cart/checkout?products=${opt.value}:1&currency=USD`;
        const price = card.querySelector("[data-price-display]");
        if (price && opt.dataset.price) price.textContent = money({ value: Number(opt.dataset.price), currency: "USD" });
      });
    });
  };
  const renderLive = (results) => {
    const live = results.filter((p) => !p.type || p.type === "PRODUCT").filter((p) => p.variants?.length);
    const order = (S.products || []).map((p) => p.name.toLowerCase());
    live.sort((a, b) => {
      const ia = order.indexOf(a.name.toLowerCase()), ib = order.indexOf(b.name.toLowerCase());
      return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
    });
    shop.innerHTML = live.map(cardHTML).join("");
    wireSizeSelects();
  };

  if (shop) {
    renderStatic();

    if (S.storefrontToken) {
      fetch(`https://storefront-api.fourthwall.com/v1/collections/all/products?storefront_token=${encodeURIComponent(S.storefrontToken)}&currency=USD&size=50`)
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`Fourthwall ${r.status}`))))
        .then((data) => { if (data?.results?.length) renderLive(data.results); })
        .catch((err) => console.warn("Live store unavailable, showing static products.", err));
    }
  }

  // Footer
  const year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
  const links = $("[data-social]");
  if (links && S.social) {
    const out = [];
    if (S.social.instagram) out.push(`<a href="${S.social.instagram}" target="_blank" rel="noopener">Instagram</a>`);
    if (S.social.tiktok) out.push(`<a href="${S.social.tiktok}" target="_blank" rel="noopener">TikTok</a>`);
    if (S.social.email) out.push(`<a href="mailto:${S.social.email}">Email</a>`);
    links.innerHTML = out.join("");
  }
})();
