document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.navbar-mobile-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    mobileToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  });