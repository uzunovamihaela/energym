# Energym — Website

Static HTML/CSS/JS website for Energym fitness centre in Хасково.

---

## Folder structure

```
energym/
│
├── index.html              ← Main page (all sections)
│
├── css/
│   ├── tokens.css          ← Design tokens: colours, fonts, spacing, radius
│   ├── base.css            ← Reset, utility classes, scroll-reveal base
│   ├── components.css      ← Shared components: buttons
│   ├── nav.css             ← Header, desktop nav, mobile overlay menu
│   ├── hero.css            ← Full-screen hero with image slideshow
│   ├── ticker.css          ← Crossed diagonal marquee strips
│   ├── facilities.css      ← Facilities/about section + gallery carousel
│   ├── location.css        ← Location card + Google Map embed
│   ├── pricing.css         ← Pricing cards grid
│   └── footer.css          ← Footer columns + bottom bar
│
├── js/
│   ├── nav.js              ← Sticky header, mobile menu open/close
│   ├── hero.js             ← Background slideshow auto-advance + dots
│   ├── gallery.js          ← Facility gallery: prev/next, swipe, dots
│   └── scroll-reveal.js    ← IntersectionObserver fade-in on scroll
│
└── assets/
    ├── icons/
    │   ├── favicon.svg     ← Browser tab icon (teal)
    │   ├── favicon-black.svg
    │   └── logo.svg        ← Full Energym wordmark (teal)
    └── images/             ← ← PUT YOUR PHOTOS HERE
        │   hero-1.jpg
        │   hero-2.jpg
        │   hero-3.jpg
        │   facility-1.jpg
        │   facility-2.jpg
        │   facility-3.jpg
        └── location.jpg
```

---

## Adding your own photos

1. Drop your images into `assets/images/`.
2. Update the `background-image` URLs in the relevant CSS files:

| CSS file            | What to change                                |
|---------------------|-----------------------------------------------|
| `css/hero.css`      | `.hero-bg-slide:nth-child(1/2/3)` URLs        |
| `css/facilities.css`| `.gallery-slide:nth-child(1/2/3)` URLs        |
| `css/location.css`  | `.location-card-photo` URL                    |

Replace the framerusercontent.com URLs with `../assets/images/your-file.jpg`.

---

## Changing colours / fonts

Open `css/tokens.css`. All design decisions live there as CSS variables:

```css
--clr-primary:  #2ad1d1;   /* teal — brand colour */
--clr-accent:   #dec912;   /* yellow */
--radius:       12px;      /* global border-radius */
--font-display: 'Bebas Neue', sans-serif;
--font-body:    'DM Sans', sans-serif;
```

---

## Deploying to GitHub Pages

1. Push the entire `energym/` folder contents to your repo root (or a branch).
2. Go to **Settings → Pages → Deploy from branch → `main` / `root`**.
3. Connect your custom domain under **Settings → Pages → Custom domain**.

---

## Nav items

Currently: **Home · Gallery · Contact**  
To change, edit the `<ul class="nav-links">` in `index.html` and the links inside `.mobile-menu`.
