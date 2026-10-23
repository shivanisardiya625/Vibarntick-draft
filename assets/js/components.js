// Shared header/footer are inserted into elements marked data-site-header/data-site-footer.
// const header = `
// <div class="topbar"><div class="container"><span>Software Design & Development</span><span>Let's build something useful together</span></div></div>
// <header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html" aria-label="Vibrantick home"><span class="brand-mark">V</span><span>Vibrantick</span></a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button><nav class="nav-links" aria-label="Main navigation"><a href="services.html">Services</a><a href="industries.html">Industries</a><a href="about.html">About Us</a><a href="portfolio.html">Portfolio</a><a class="btn" href="contact.html">Contact Us <span>↗</span></a></nav></div></header>`;


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.innerHTML = isOpen ? "&times;" : "☰";
});


const footer = `
<footer class="footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark">V</span><span>Vibrantick</span></a><p>Technology and digital solutions designed around your business goals.</p></div><div><h4>Explore</h4><div class="footer-links"><a href="services.html">Services</a><a href="industries.html">Industries</a><a href="about.html">About Us</a><a href="portfolio.html">Portfolio</a></div></div><div><h4>Services</h4><div class="footer-links"><a href="services.html#web">Web Development</a><a href="services.html#mobile">Mobile App Solutions</a><a href="services.html#software">Software Development</a><a href="services.html#marketing">Digital Marketing</a></div></div><div><h4>Contact</h4><div class="footer-links"><a href="contact.html">Contact Form</a><a href="https://vibrantick.com/">Official Website</a><a href="https://vibrantick.com/">Company Information</a></div></div></div><div class="footer-bottom"><span>© <span data-year></span> Vibrantick. First-draft design for review.</span><span>Privacy Policy · Terms & Conditions (add approved legal links)</span></div></div></footer>`;
document
  .querySelectorAll("[data-site-header]")
  .forEach((el) => (el.innerHTML = header));
document
  .querySelectorAll("[data-site-footer]")
  .forEach((el) => (el.innerHTML = footer));
const script = document.createElement("script");
script.src = "assets/js/main.js";
document.body.appendChild(script);
