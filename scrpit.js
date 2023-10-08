document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('a[href^="#"]');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }

      });
    });
  });
  