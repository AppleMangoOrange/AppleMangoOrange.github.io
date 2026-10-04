document.querySelector('#year').textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('nav a')];

const observer = new IntersectionObserver((entries) => {
  const visible = entries.find((entry) => entry.isIntersecting);
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));

const gear = document.querySelector('.scroll-gear');
let animationFrame;

function rotateGear() {
  gear.style.setProperty('--gear-rotation', `${window.scrollY * 0.16}deg`);
  animationFrame = undefined;
}

window.addEventListener('scroll', () => {
  if (!animationFrame) animationFrame = requestAnimationFrame(rotateGear);
}, { passive: true });

rotateGear();
