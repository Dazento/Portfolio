toggleMenu = () => {
  const navLinks = document.querySelector('.navbar');
  const burger = document.querySelector('.navbar__burger');
  const body = document.querySelector('.body');
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('navbar--active');
    body.classList.toggle('blur');
  })
}
toggleMenu();