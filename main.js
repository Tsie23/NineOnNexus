// Nav Bar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const pmItems    = document.querySelectorAll('.pm-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    pmItems.forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// Contact Form Submit
function submitForm() {
  const form = document.querySelector('.contact-form');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json()).then(result => {
    if (result.success) {
      document.getElementById('formSuccess').style.display = 'block';
      form.reset();
    } else {
      alert('There was an error sending your message. Please try again.');
    }
  }).catch(error => {
    alert('There was an error sending your message. Please try again.');
  });
}

// Scroll Reveal
const reveals = document.querySelectorAll(
  '.about-teaser, .about-main, .values-grid, .pt-grid, .contact-section, .value-card, .pm-item'
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  observer.observe(el);
});
