document.addEventListener('DOMContentLoaded', () => {
  const typingTextEl = document.getElementById('typing-text');
  const text = "Building fast, scalable, and creative digital experiences.";
  let i = 0;

  const typeEffect = () => {
    if (i < text.length) {
      typingTextEl.textContent += text.charAt(i);
      i += 1;
      setTimeout(typeEffect, 45);
    }
  };

  typeEffect();

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href.startsWith('#')) {
        return;
      }
      e.preventDefault();
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach((section) => observer.observe(section));

  document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  document.getElementById('copyEmail').addEventListener('click', async () => {
    const email = document.getElementById('emailText').textContent.trim();
    await navigator.clipboard.writeText(email);
    document.getElementById('copyEmail').textContent = 'Copied!';
    setTimeout(() => {
      document.getElementById('copyEmail').textContent = 'Copy';
    }, 1500);
  });

  document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mqaagqly', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      document.getElementById('formResponse').textContent = response.ok
        ? 'Message sent successfully!'
        : 'Could not send message right now. Please try again.';

      if (response.ok) {
        form.reset();
      }
    } catch (error) {
      document.getElementById('formResponse').textContent = 'Network error. Please try again later.';
    }
  });
});
