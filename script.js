// The Alma Group V3 — small, safe enhancements for GitHub Pages

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

const form = document.querySelector("[data-contact-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const venue = String(data.get("venue") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Venue enquiry: ${venue || "New venue"}`);
    const body = encodeURIComponent(
      `Venue name: ${venue}\n` +
      `Your email: ${email}\n\n` +
      `What needs improving?\n${message}\n\n` +
      `Sent from The Alma Group website.`
    );

    window.location.href = `mailto:almagroupbranding@gmail.com?subject=${subject}&body=${body}`;
  });
}
