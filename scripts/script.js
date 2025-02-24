document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
  });
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mqaagqly', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (response.ok) {
        document.getElementById('formResponse').textContent = 'Message sent successfully!';
        form.reset();
      } else {
        document.getElementById('formResponse').textContent = 'Failed to send the message. Please try again.';
      }
    } catch (error) {
      document.getElementById('formResponse').textContent = 'An error occurred. Please try again.';
    }
  });
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    
    document.getElementById('formResponse').innerText = "Thank you! Your message has been sent.";
    this.reset();
  });
  const sections = document.querySelectorAll('.fade-in');

  const revealOnScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  const text = "Hi, I'm Sumanth Burugula. A passionate Software Development Engineer | Skilled in Java & C++ | Expertise in Systems Development, Database Management, and Instruction | Java, Data Structures & Mainframe Certified | Former NTT DATA Developer | Open to SDE Roles";
  let i = 0;
  
  function typeEffect() {
    if (i < text.length) {
      document.getElementById('typing-text').textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", typeEffect);
      
  
  const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const heroText = "Welcome to My Portfolio!";
let index = 0;

function typeWriter() {
  if (index < heroText.length) {
    document.getElementById("hero-text").innerHTML += heroText.charAt(index);
    index++;
    setTimeout(typeWriter, 1000);
  }
}

window.onload = typeWriter;
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.9)";
  } else {
    nav.style.background = "transparent";
  }
});
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(section => {
  observer.observe(section);
});
document.getElementById("copyEmail").addEventListener("click", function () {
  let email = document.getElementById("email").textContent.trim();
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied to clipboard!");
  });
});

