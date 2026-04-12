// Gokul D Portfolio - Main JS

const TITLES = [
  'Security Professional',
  'AWS Cloud Club Captain',
  'VAPT Specialist',
  'Python Developer'
];

const NAV_ITEMS = [
  { id: 'whoami',          label: 'whoami' },
  { id: 'education',       label: 'education' },
  { id: 'skills',          label: 'skills' },
  { id: 'experience',      label: 'experience' },
  { id: 'projects',        label: 'projects' },
  { id: 'certifications',  label: 'certifications' },
  { id: 'achievements',    label: 'achievements' }
];

// 11.1 Typewriter effect
function typewriter(element, strings, speed = 80) {
  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const cursorEl = element.querySelector('.cursor');

  function tick() {
    const current = strings[stringIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    // Update text content (preserve cursor span)
    const textNode = element.firstChild;
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      textNode.textContent = current.substring(0, charIndex);
    } else {
      element.insertBefore(document.createTextNode(current.substring(0, charIndex)), cursorEl);
    }

    let delay = isDeleting ? speed / 2 : speed;

    if (!isDeleting && charIndex === current.length) {
      delay = 1800; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  // Clear initial static text, keep cursor
  const textNode = element.firstChild;
  if (textNode && textNode.nodeType === Node.TEXT_NODE) {
    textNode.textContent = '';
  }

  setTimeout(tick, 600);
}

// 11.3 Scroll spy using IntersectionObserver
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            if (link.dataset.section === id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  NAV_ITEMS.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

// 11.5 Hamburger menu toggle
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// 11.6 Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const typewriterEl = document.querySelector('.typewriter-target');
  if (typewriterEl) {
    typewriter(typewriterEl, TITLES);
  }

  initScrollSpy();
  initHamburger();
  initSmoothScroll();
});
