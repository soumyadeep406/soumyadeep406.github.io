(() => {
  const revealItems = document.querySelectorAll('.section, .project-card, .footer');

  window.addEventListener('load', () => {
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('reveal'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    revealItems.forEach((item) => observer.observe(item));
  });
})();
