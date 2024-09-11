// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.navbar .mobile-menu-toggle').addEventListener('click', function () {
    document.querySelector('.navbar .mobile-menu-items').classList.toggle('active');
  });
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
