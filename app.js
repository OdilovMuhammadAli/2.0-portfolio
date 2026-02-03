// Mobile Menu
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileToggle.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileToggle.classList.remove("active");
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Stats Counter
const animateCounter = (element) => {
  const target = parseInt(element.getAttribute("data-count"));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

// Intersection Observer for Stats
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".stat-number");
        counters.forEach((counter) => {
          if (counter.textContent === "0") {
            animateCounter(counter);
          }
        });
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Skill Bars Animation
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll(".skill-bar-fill");
        skillBars.forEach((bar) => {
          const width = bar.getAttribute("data-width");
          bar.style.width = width + "%";
        });
      }
    });
  },
  { threshold: 0.3 }
);

const skillsSection = document.querySelector("#skills");
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Scroll to Top
const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Xabar yuborildi! Tez orada javob beramiz.");
  contactForm.reset();
});

// Project Cards Click
document.querySel;
