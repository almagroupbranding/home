:root {
  --cream: #f7f0e4;
  --cream-deep: #eadcc8;
  --paper: #fffaf1;
  --burgundy: #6f1d2d;
  --burgundy-dark: #4a111d;
  --charcoal: #262321;
  --muted: #6a5f58;
  --line: rgba(74, 17, 29, 0.18);
  --shadow: 0 22px 60px rgba(38, 35, 33, 0.12);
  --radius: 22px;
  --container: 1160px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Georgia, Cambria, "Times New Roman", serif;
  color: var(--charcoal);
  background:
    radial-gradient(circle at top left, rgba(111, 29, 45, 0.09), transparent 34rem),
    linear-gradient(180deg, var(--cream), #fff8ec 48%, var(--cream));
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
}

p {
  margin: 0 0 1rem;
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 1.08;
  color: var(--charcoal);
  letter-spacing: -0.035em;
}

h1 {
  font-size: clamp(3rem, 8vw, 6.8rem);
  max-width: 11ch;
}

h2 {
  font-size: clamp(2rem, 5vw, 4.1rem);
}

h3 {
  font-size: clamp(1.2rem, 2vw, 1.55rem);
}

ul {
  padding-left: 1.15rem;
}

li {
  margin-bottom: 0.55rem;
}

.container {
  width: min(var(--container), calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.skip-link {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1000;
  transform: translateY(-140%);
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: var(--burgundy);
  color: white;
}

.skip-link:focus {
  transform: translateY(0);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

/* Header */

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(247, 240, 228, 0.9);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.site-header.is-scrolled {
  border-color: var(--line);
  box-shadow: 0 10px 30px rgba(38, 35, 33, 0.08);
}

.header-inner {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
}

.brand strong {
  display: block;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
}

.brand small {
  display: block;
  color: var(--muted);
  font-size: 0.78rem;
  margin-top: -0.15rem;
}

.primary-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
}

.primary-nav a {
  text-decoration: none;
  color: var(--muted);
}

.primary-nav a:hover {
  color: var(--burgundy);
}

.primary-nav .nav-cta {
  color: white;
  background: var(--burgundy);
  padding: 0.7rem 1rem;
  border-radius: 999px;
  box-shadow: 0 10px 20px rgba(111, 29, 45, 0.18);
}

.nav-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
}

.nav-toggle span:not(.sr-only) {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  background: var(--burgundy);
}

/* Hero */

.hero {
  padding-top: clamp(3rem, 7vw, 6rem);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.eyebrow {
  color: var(--burgundy);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  margin-bottom: 0.9rem;
}

.hero-lede {
  max-width: 670px;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--muted);
  margin: 1.5rem 0 2rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 1.6rem;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding: 0.8rem 1.15rem;
  border: 1px solid transparent;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  color: white;
  background: var(--burgundy);
  box-shadow: 0 16px 35px rgba(111, 29, 45, 0.24);
}

.button-primary:hover {
  background: var(--burgundy-dark);
}

.button-secondary {
  color: var(--burgundy);
  background: var(--paper);
  border-color: var(--line);
}

.trust-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
  gap: 0.35rem 1rem;
  list-style: none;
  padding: 0;
  color: var(--muted);
}

.trust-list li {
  margin: 0;
}

.trust-list li::before {
  content: "✦";
  color: var(--burgundy);
  margin-right: 0.45rem;
}

.hero-card {
  position: relative;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: calc(var(--radius) + 8px);
  padding: clamp(1.5rem, 4vw, 2.3rem);
  box-shadow: var(--shadow);
}

.hero-card::before {
  content: "";
  position: absolute;
  inset: 16px;
  border: 1px solid rgba(111, 29, 45, 0.13);
  border-radius: 20px;
  pointer-events: none;
}

.hero-card h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.stamp {
  display: inline-flex;
  margin-bottom: 1.35rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--burgundy);
  font-weight: 700;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.mini-ledger {
  margin-top: 1.5rem;
  border-top: 1px solid var(--line);
}

.mini-ledger div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--line);
}

.mini-ledger span {
  color: var(--muted);
}

.mini-ledger strong {
  text-align: right;
}

/* Content sections */

.problem-band {
  background: var(--burgundy);
  color: #fff5e8;
}

.problem-band h2,
.problem-band .eyebrow {
  color: #fff5e8;
}

.problem-band p {
  color: rgba(255, 245, 232, 0.88);
  font-size: 1.1rem;
}

.two-column {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;
}

.section-heading {
  max-width: 800px;
  margin-bottom: clamp(2rem, 5vw, 3.4rem);
}

.section-heading p:not(.eyebrow) {
  color: var(--muted);
  font-size: 1.1rem;
  margin-top: 1rem;
}

.outcome-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.outcome-grid article,
.price-card,
.diagnostic-card,
.quote-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: 0 18px 40px rgba(38, 35, 33, 0.08);
}

.outcome-grid article {
  padding: 1.4rem;
}

.card-number {
  display: inline-flex;
  color: var(--burgundy);
  font-weight: 700;
  margin-bottom: 1.8rem;
}

.outcome-grid p,
.service-item p,
.price-card p,
.timeline p,
.quote-card p,
.contact-section p,
.footer-small {
  color: var(--muted);
}

.warm-panel {
  background:
    linear-gradient(180deg, rgba(234, 220, 200, 0.7), rgba(247, 240, 228, 0.2)),
    radial-gradient(circle at bottom right, rgba(111, 29, 45, 0.08), transparent 30rem);
}

.service-list {
  display: grid;
  gap: 0.9rem;
}

.service-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.4rem;
  padding: 1.2rem 0;
  border-top: 1px solid var(--line);
}

.service-item:last-child {
  border-bottom: 1px solid var(--line);
}

.service-item strong {
  align-self: center;
  color: var(--burgundy);
  white-space: nowrap;
}

/* Pricing */

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: stretch;
}

.price-card {
  padding: 1.5rem;
}

.price-card.featured {
  border-color: rgba(111, 29, 45, 0.45);
  box-shadow: 0 24px 60px rgba(111, 29, 45, 0.15);
}

.price-card.quiet {
  background: rgba(255, 250, 241, 0.65);
}

.package-label {
  color: var(--burgundy) !important;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-weight: 700;
}

.price {
  font-size: 1.7rem;
  color: var(--burgundy) !important;
  margin: 0.8rem 0 1rem;
  font-weight: 700;
}

.price-card ul {
  margin: 1.25rem 0 0;
  color: var(--muted);
}

/* Diagnostic */

.diagnostic {
  background: var(--charcoal);
  color: var(--paper);
}

.diagnostic h2,
.diagnostic .eyebrow {
  color: var(--paper);
}

.diagnostic p {
  color: rgba(255, 250, 241, 0.75);
}

.diagnostic-grid {
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;
}

.diagnostic-card {
  padding: 1.4rem;
  display: grid;
  gap: 0.8rem;
  color: var(--charcoal);
}

.diagnostic-card label {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  padding: 0.85rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(247, 240, 228, 0.5);
}

input[type="checkbox"] {
  accent-color: var(--burgundy);
  margin-top: 0.25rem;
}

#diagnostic-result {
  display: block;
  min-height: 2rem;
  color: var(--burgundy);
  font-weight: 700;
}

/* Timeline */

.timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.timeline article {
  border-top: 1px solid var(--line);
  padding-top: 1.1rem;
}

.timeline span {
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  margin-bottom: 1rem;
  border-radius: 999px;
  background: var(--burgundy);
  color: white;
}

/* Quote */

.quote-band {
  padding-top: 0;
}

.quote-card {
  padding: clamp(1.5rem, 4vw, 3rem);
  text-align: center;
}

blockquote {
  margin: 0 auto 1.2rem;
  max-width: 870px;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: var(--burgundy);
}

/* Contact */

.contact-section {
  background:
    linear-gradient(180deg, rgba(255, 250, 241, 0.35), rgba(234, 220, 200, 0.5));
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
}

.contact-notes {
  margin-top: 1.5rem;
  padding: 1.1rem;
  border-left: 4px solid var(--burgundy);
  background: rgba(255, 250, 241, 0.7);
  border-radius: 0 16px 16px 0;
}

.contact-form {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: clamp(1.25rem, 3vw, 2rem);
  box-shadow: var(--shadow);
  display: grid;
  gap: 1rem;
}

.contact-form label {
  display: grid;
  gap: 0.35rem;
  font-weight: 700;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid rgba(74, 17, 29, 0.25);
  border-radius: 14px;
  padding: 0.85rem 0.95rem;
  font: inherit;
  background: #fffdf8;
  color: var(--charcoal);
}

input:focus,
select:focus,
textarea:focus {
  outline: 3px solid rgba(111, 29, 45, 0.2);
  border-color: var(--burgundy);
}

.form-helper {
  font-size: 0.9rem;
  margin: 0;
}

/* Footer */

.site-footer {
  padding: 2.2rem 0;
  background: var(--burgundy-dark);
  color: var(--paper);
}

.site-footer p,
.site-footer small {
  color: rgba(255, 250, 241, 0.72);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.8fr 1fr;
  gap: 2rem;
  align-items: start;
}

.site-footer nav {
  display: grid;
  gap: 0.35rem;
}

.site-footer a {
  color: var(--paper);
  text-decoration: none;
}

.footer-brand {
  margin-bottom: 0.9rem;
}

/* Responsive */

@media (max-width: 980px) {
  .hero-grid,
  .two-column,
  .diagnostic-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .outcome-grid,
  .pricing-grid,
  .timeline {
    grid-template-columns: repeat(2, 1fr);
  }

  h1 {
    max-width: 12ch;
  }
}

@media (max-width: 760px) {
  .header-inner {
    min-height: 70px;
  }

  .nav-toggle {
    display: block;
  }

  .primary-nav {
    position: absolute;
    top: 70px;
    left: 1rem;
    right: 1rem;
    display: none;
    padding: 1rem;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: var(--shadow);
  }

  .primary-nav.is-open {
    display: grid;
    gap: 0.8rem;
  }

  .primary-nav .nav-cta {
    text-align: center;
  }

  .trust-list,
  .outcome-grid,
  .pricing-grid,
  .timeline,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .service-item {
    grid-template-columns: 1fr;
  }

  .service-item strong {
    white-space: normal;
  }

  .mini-ledger div {
    display: block;
  }

  .mini-ledger strong {
    display: block;
    text-align: left;
    margin-top: 0.2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition: none !important;
  }
}
