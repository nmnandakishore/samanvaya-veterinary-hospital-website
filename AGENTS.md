# Samanvaya Veterinary Hospital — Website Phase 1 Build Brief

**For: OpenCode + DeepSeek V4 Flash**
**Scope: static marketing site only. No booking backend, no e-commerce backend.**


## 1. Project summary

A marketing website for **Samanvaya Veterinary Hospital (SVH)**. Phase 1 (this brief) is static content only — no forms that submit anywhere real, no booking logic, no cart. Phase 2 (later, not now) adds a booking calendar integration and e-commerce.

**Visual target**: enterprise-grade institutional design — think a large European association or government-adjacent site built on Adobe Experience Manager, not a startup SaaS landing page. Structural, grid-disciplined, generously wide, restrained use of color and motion. A reference screenshot of the British Veterinary Association's header was used to confirm the **structural pattern** (three-tier header, left-aligned bottom nav) — do not copy BVA's actual colors, its diagonal-cut dividers, or its login/cart treatment; none of that was requested.

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js (App Router)**, latest stable — not TanStack Router. Next.js's own router gives SSR/SSG, which this project needs for local SEO now and product/service pages later. |
| Language | TypeScript, strict mode |
| Styling | **Tailwind CSS v4** (CSS-first `@theme` config in `globals.css` — there is no `tailwind.config.js` by default in v4, don't create one unless you have a reason to) |
| Components | **shadcn/ui** (Radix primitives). Use the CLI (`shadcn init` / `shadcn add`) rather than hand-rolling primitives it already covers. |
| Data layer | **TanStack Query** — not needed for phase 1's static content, but wire up a `QueryClientProvider` now so phase 2 (booking availability, product catalog) slots in without restructuring. |
| Forms | React Hook Form + Zod (used later for Contact Us; keep it simple in phase 1, no submission backend yet) |
| Icons | lucide-react |
| Images/fonts | `next/image`, `next/font/google` |

Do not add: a cart/checkout library, a calendar/scheduling library, a CMS integration, or any payment SDK. None of that is in scope yet (see section 11).

---

## 3. Design tokens

### Colors

| Token | Hex | Role |
|---|---|---|
| `primary` | `#012363` | Headings, body-content emphasis, links, primary icons, in-page CTA buttons on content sections |
| `secondary` | `#005888` | Header top bar background, "Book an Appointment" button, bottom footer background, structural chrome |
| `surface` | `#f6f6f6` | Page/body background, header bottom bar background |
| `surface-soft` | `#aacee4` | Logo panel background, nav hover/active background, top footer background — treat this as the sitewide "highlight" color, also usable later for stat callouts or pull-quote backgrounds on interior pages |
| `accent-from` → `accent-to` | `#00164d` → `#400951` | Horizontal gradient (see below). Not assigned to header/footer chrome — use it for the hero slider treatment and, sparingly, for section eyebrows/dividers on interior pages. Full rationale in section 6. |

> **Contrast rule, non-negotiable**: any element that switches its background to `surface-soft` (`#aacee4`) on hover/active must also switch its text/icon color to `primary` (`#012363`) at the same time. This matters specifically for the top bar, whose default text is white on `#005888` — white text would be nearly invisible on the light hover background if you forget to swap it.

### Gradient

```css
background: linear-gradient(90deg, #00164d 0%, #400951 100%);
```

### Typography

Two-family pairing, not a single default font used everywhere:

- **Headings**: `IBM Plex Sans` (weights 500/600) — has an engineered, institutional character that fits the AEM/enterprise brief better than a generic grotesque.
- **Body**: `Public Sans` (weight 400/500) — extremely legible at small sizes, reads as credible/official without being cold. Pairs cleanly with Plex without feeling like the same font twice.
- Load both via `next/font/google`, self-hosted, no layout shift.

### Shape & elevation

Keep this restrained and structural — the opposite of a bubbly consumer-app look:

- Border radius: `6px` on buttons/inputs/nav pills, `10px` on cards. Nothing larger.
- Shadows: near-invisible. `0 1px 2px rgba(1,35,99,0.06)` for card elevation is enough. No large soft drop shadows, no glow.

### Tailwind v4 theme block

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --font-heading: "IBM Plex Sans", sans-serif;
  --font-body: "Public Sans", sans-serif;

  --color-primary: #012363;
  --color-secondary: #005888;
  --color-surface: #f6f6f6;
  --color-surface-soft: #aacee4;
  --color-accent-from: #00164d;
  --color-accent-to: #400951;

  --radius-control: 6px;
  --radius-card: 10px;

  --container-max: 2400px;
}
```

This gives you `bg-primary`, `text-secondary`, `bg-surface-soft`, etc. automatically. For the gradient, if `from-accent-from to-accent-to` utilities don't resolve cleanly, fall back to an arbitrary-value utility: `bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]` — this always works.

---

## 4. Global layout rules

**Container behaves like a wide European enterprise site, not a centered US-style 1280px column.** No hard cap that leaves large empty margins on a big monitor — instead a very wide max-width with fluid, viewport-scaled padding:

```css
.container-fluid {
  width: 100%;
  max-width: var(--container-max); /* 2400px */
  margin-inline: auto;
  padding-inline: clamp(1rem, 3vw, 4rem);
}
```

Section **backgrounds** (header bars, both footers) are full-bleed (edge to edge of the viewport). Section **content** (logo, nav items, footer columns, page content) sits inside `.container-fluid`. This means the logo's left edge, the bottom-nav's left edge, and every page's content all line up vertically down the whole site — that alignment discipline is a big part of what reads as "enterprise-grade" rather than templated.

Use a 12-column grid (`grid-cols-12` with `gap-6` or similar) for content sections on interior pages.

Standard Tailwind breakpoints apply (`sm/md/lg/xl/2xl`). The header's 3-tier desktop layout collapses at `lg` (1024px) — see section 5.

---

## 5. Header specification

This is the one part of the brief worth building first and reviewing in isolation before anything else.

### Structure (desktop, ≥1024px)

The header is a 2-row × 2-column CSS grid, where the logo cell spans both rows on the left, sitting beside a stacked top bar + mid bar on the right. A separate full-width bar sits below the grid.

```
┌───────────┬──────────────────────────────────────────────┐
│           │  TOP BAR (40px) — bg #005888, nav right-aligned │
│  LOGO     ├──────────────────────────────────────────────┤
│  (260px)  │  MID BAR (96px) — bg white, reserved for phase 2 │
│  bg aacee4│  (search / contact info later — leave empty now) │
└───────────┴──────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│ BOTTOM BAR (56px) — bg #f6f6f6, nav LEFT-aligned              │
└────────────────────────────────────────────────────────────┘
```

Structural sketch:

```jsx
<header>
  <div className="grid grid-cols-[260px_1fr] grid-rows-[40px_96px]">
    <div className="row-span-2 bg-surface-soft flex items-center justify-center">
      <Logo />
    </div>
    <div className="bg-secondary flex items-center justify-end gap-6 px-6">
      <TopNav /> {/* About Us, Contact Us, Shop */}
    </div>
    <div className="bg-white" /> {/* empty for now, see note above */}
  </div>

  <div className="bg-surface">
    <div className="container-fluid flex items-center gap-8 h-14">
      <MainNav />          {/* Home, Medical Care, Professional Care, Food & Accessories */}
      <BookAppointmentCta /> {/* last item in the same left-aligned row, not floated right */}
    </div>
  </div>
</header>
```

Note that the outer grid (logo + top/mid bar) and the bottom bar's inner row both live inside `.container-fluid`, per section 4 — the logo panel is not flush against the true browser edge, it aligns with the site's standard left margin.

### Logo

- Use the provided logo asset via `next/image`. Its background is already `#aacee4` (matches the panel — confirmed by sampling the file), so it will sit flush with no visible edge in this specific spot.
- It is **not transparent**. If the logo is ever used anywhere else (mobile compact header, favicon, letterhead, a footer), get a transparent PNG or SVG version — the flattened light-blue-background version will show a visible box on any other background.
- Maintain aspect ratio; don't stretch it to fill the 260×136 panel — center it with sensible padding.

### Top bar (`About Us`, `Contact Us`, `Shop`)

- Background `#005888`, white text, right-aligned, small size (~13px), comfortable letter spacing.
- Hover/active: background switches to `#aacee4`, **text switches to `#012363`** (see the contrast rule in section 3).

### Bottom bar / main nav (`Home`, `Medical Care`, `Professional Care`, `Food & Accessories`, `Book an Appointment`)

- Background `#f6f6f6`, left-aligned as one group (the CTA button is the last item in that same left-aligned row — it is not pushed to the far right).
- Text color `#012363`. Hover/active background `#aacee4` (text stays `#012363`, already sufficient contrast).
- **Book an Appointment** is visually distinct: background `#005888`, white text, `6px` radius, padding like a button not a nav link. Give it its own hover treatment (e.g. a slightly darker secondary, not the light-blue nav-hover style) so it keeps its weight as a CTA rather than blending into the nav.
- **Dropdowns**: submenu content isn't defined yet, but build the mechanism now using shadcn's `NavigationMenu` component (handles keyboard nav and accessibility for you). Model navigation as data, not hardcoded JSX, so submenus can be added later as a content change, not a code change:

```ts
// lib/nav-config.ts
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const topNav: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Shop", href: "/shop" },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Medical Care", href: "/medical-care", children: [] },
  { label: "Professional Care", href: "/professional-care", children: [] },
  { label: "Food & Accessories", href: "/food-accessories", children: [] },
];
```

`Medical Care`, `Professional Care`, and `Food & Accessories` are the items likely to get dropdowns later — leave their `children` array empty but wired up to `NavigationMenu`'s dropdown rendering so adding items later needs zero component changes. `Home` and the Book Appointment CTA don't need dropdown capability.

### Mobile / responsive (<1024px)

Not explicitly specified in the brief, added because the site needs to work on a phone. Collapse the entire three-tier header into one compact bar (~64px): small logo (no color panel needed at this size, or a small one) on the left, hamburger trigger on the right. Hamburger opens a shadcn `Sheet` (slide-out drawer) containing, in order: main nav items (accordion-expand any with children), a divider, top-bar items (About Us / Contact Us / Shop), and the Book an Appointment button prominently at the top or bottom of the drawer.

---

## 6. Hero slider

A simple full-width crossfade slider directly below the header (no slide/push transition — opacity crossfade only). Requirements:

- Autoplay (~5–6s per slide), pause on hover/focus, accessible previous/next controls and position indicators, respects `prefers-reduced-motion` (disable autoplay, allow manual advance only).
- Each slide: full-width image + optional short heading + optional CTA button.
- Use shadcn's `Carousel` (Embla-based) as the base and configure a crossfade rather than a horizontal slide — it already handles touch/swipe/keyboard for you, which a from-scratch component would need to reimplement. If a fade transition isn't straightforward with the plugin available in your environment, a lightweight custom component (stacked absolutely-positioned slides, opacity transition via a `useState` index, no extra dependency) is an acceptable fallback — the requirement is the crossfade behavior, not a specific package.
- **This is where the accent gradient earns its place**: apply `linear-gradient(90deg, #00164d, #400951)` as a scrim/overlay under slide text (for legibility over photos) and/or as the background of any in-slide CTA button, so the gradient token isn't just defined and unused.
- Use 3 placeholder slides (stock veterinary/clinic imagery is fine as a placeholder) until real photography is supplied — flag placeholders clearly with a code comment so they're easy to find and swap.

---

## 7. Footers

Two stacked footers, both full-bleed background with `.container-fluid` content, matching the alignment rule in section 4.

### Top footer

- Background `#aacee4`.
- Four columns (`grid-cols-4` desktop, stacking to `grid-cols-1` or `2` on mobile), each a heading + a list of links. Content isn't specified yet — use clearly-labeled placeholder columns (e.g. "Services", "Resources", "About", "Contact") with 3–4 placeholder links each, easy to replace once real site content/sitemap exists.
- Text/links in `#012363` for contrast against the light background.

### Bottom footer

- Background `#005888`, white/light text.
- Flex row, `justify-between`: copyright notice on the left (`© {current year} Samanvaya Veterinary Hospital`), small legal links (Privacy Policy, Terms) on the right. Stack vertically and centered on mobile.

---

## 8. Phase 1 pages / routes

| Route | Content expectation |
|---|---|
| `/` | Home — hero slider, services overview, trust signals (placeholder testimonials/stats using `surface-soft` as a callout background per section 3), CTA into Book an Appointment |
| `/medical-care` | Overview page, placeholder service copy |
| `/professional-care` | Overview page, placeholder service copy |
| `/food-accessories` | Overview page — this is the one that will eventually connect into phase 2's e-commerce, so structure its content blocks as if products will slot in later, but don't build any cart/product logic now |
| `/about-us` | Standard about page |
| `/contact-us` | Contact details + a static form UI (React Hook Form + Zod for client-side validation only — no submission endpoint yet, `console.log` or a disabled-state placeholder is fine) |
| `/shop` | Simple "online shop coming soon" placeholder page so the top-bar `Shop` link doesn't dead-end — not the real storefront |
| `/book-appointment` | Simple "online booking coming soon — call us at [phone]" placeholder so the CTA button doesn't dead-end — not the real booking flow |

---

## 9. Accessibility & performance

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`; correct heading hierarchy per page (one `h1`).
- All images have meaningful `alt` text; decorative images use `alt=""`.
- Visible focus states on every interactive element (don't strip Radix's default focus rings).
- Dropdown/mobile menu fully keyboard-operable (shadcn's `NavigationMenu` and `Sheet` handle most of this out of the box — don't override the built-in ARIA behavior).
- All images through `next/image`; fonts through `next/font`.
- Target: Lighthouse 90+ on Performance and Accessibility for the static pages.

---

## 10. Folder structure

```
app/
  layout.tsx
  globals.css
  page.tsx                      → Home
  about-us/page.tsx
  contact-us/page.tsx
  shop/page.tsx
  book-appointment/page.tsx
  medical-care/page.tsx
  professional-care/page.tsx
  food-accessories/page.tsx
components/
  layout/
    site-header.tsx
    header-top-bar.tsx
    header-mid-bar.tsx
    header-main-nav.tsx
    mobile-nav-drawer.tsx
    site-footer.tsx
    footer-top.tsx
    footer-bottom.tsx
  sections/
    hero-slider.tsx
  ui/                            → shadcn-generated, don't hand-edit structurally
lib/
  nav-config.ts
  utils.ts
public/
  logo/                          → SVH logo asset(s)
```

---

## 11. Explicitly out of scope for phase 1 (guardrails)

Do **not** build any of the following yet, even partially — this is a static site:

- Real appointment booking logic, calendar UI, or any external scheduling-software integration
- Real shopping cart, checkout, payment processing, or product database
- CMS/backend integration of any kind
- Real form submission endpoints (client-side validation only)

Do keep the code structured so these can be added later without rework: the `QueryClientProvider` from section 2, the nav config being data-driven (section 5), and the `/shop` and `/book-appointment` placeholder routes already existing (section 8) are the phase-2 on-ramps. Nothing beyond that is needed now.

---

## 12. Assumptions made — confirm or override before/while running this

- **Primary vs. secondary color roles** (section 3) — I inferred these since the brief didn't assign `#012363` anywhere explicit.
- **Typography** (IBM Plex Sans / Public Sans) — not specified in the brief at all.
- **Gradient placement** (hero slider scrim + sparing use on interior pages) — the brief defined the gradient but didn't say where it goes.
- **Header bar heights** (40 / 96 / 56px) and **logo panel width** (260px) — reasonable defaults, easy to change globally since they're just grid track sizes.
- **Container max-width** (2400px) — the specific ceiling on "use the max width of the screen" is my call; adjust `--container-max` if you want it wider/narrower.
- **`Shop` and `Book an Appointment` phase-1 destinations** — placeholder "coming soon" pages rather than dead links.
- **Footer column headings/content** — fully placeholder pending your actual sitemap.
- **Mobile breakpoint for header collapse** (1024px) — not specified, standard choice for a nav this dense.
