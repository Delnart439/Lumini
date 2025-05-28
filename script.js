document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});


document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Ouvre le menu seulement si le lien est "#"
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Existing logo animation...
    const logo = document.querySelector('.logo-animate');
    if (logo) setTimeout(() => logo.classList.add('visible'), 100);

    // Service images animation
    const services = document.querySelectorAll('.service-animate');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    services.forEach(el => observer.observe(el));
});

window.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.contact-btn-wrapper');
    if (wrapper) {
        setTimeout(() => {
            wrapper.classList.add('arrows-in');
        }, 400);
    }
});

const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('open');
  document.body.classList.toggle('menu-open', nav.classList.contains('open'));
});


