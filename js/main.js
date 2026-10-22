// Gulf Jobs Hub – Main JS
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      this.classList.toggle('active');
    });
  }

  // Simple URL param handling for filters (static demo)
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  const country = params.get('country');
  const cat = params.get('cat');

  if (q || country || cat) {
    const keywordInput = document.getElementById('jobKeyword');
    const countrySelect = document.getElementById('jobCountry');
    if (keywordInput && q) keywordInput.value = q;
    if (countrySelect && country) countrySelect.value = country;
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
