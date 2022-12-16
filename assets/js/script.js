/* ----- Burger Menu ----- */
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

/* ----- Skills Switcher ----- */
// var btn
const frontendBtn = document.getElementById('frontendBtn');
const backendBtn = document.getElementById('backendBtn');
const designBtn = document.getElementById('designBtn');

// var card
const frontendCard = document.getElementById('frontendCard');
const backendCard = document.getElementById('backendCard');
const designCard = document.getElementById('designCard');

// var switch Active
const switchActive = document.getElementById('switch');

defaultBtnWidth = () => {
  const frontendBtnWidth = `${frontendBtn.offsetWidth}px`;
  switchActive.style.width = frontendBtnWidth;
}
new ResizeObserver(defaultBtnWidth).observe(frontendBtn);

frontendBtn.addEventListener('click', () => {
  if (!backendCard.classList.contains("active") && !designCard.classList.contains("active")) return;
  backendCard.classList.remove('active');
  designCard.classList.remove('active');
  frontendCard.classList.add('active');
  frontendBtnWidth = () => {
    const frontendBtnWidth = `${frontendBtn.offsetWidth}px`;
    switchActive.style.width = frontendBtnWidth;
    switchActive.style.marginLeft = `0`
  }
  new ResizeObserver(frontendBtnWidth).observe(frontendBtn);
})

backendBtn.addEventListener('click', () => {
  if (!frontendCard.classList.contains("active") && !designCard.classList.contains("active")) return;
  frontendCard.classList.remove('active');
  designCard.classList.remove('active');
  backendCard.classList.add('active');
  backendBtnWidth = () => {
    const backendBtnWidth = `${backendBtn.offsetWidth}px`;
    const frontendBtnWidth = `${frontendBtn.offsetWidth}px`;
    switchActive.style.width = backendBtnWidth;
    switchActive.style.marginLeft = `${frontendBtnWidth}`
  }
  new ResizeObserver(backendBtnWidth).observe(backendBtn);
  new ResizeObserver(backendBtnWidth).observe(frontendBtn);
})

designBtn.addEventListener('click', () => {
  if (!backendCard.classList.contains("active") && !frontendCard.classList.contains("active")) return;
  backendCard.classList.remove('active');
  frontendCard.classList.remove('active');
  designCard.classList.add('active');
  designBtnWidth = () => {
    const designBtnWidth = `${designBtn.offsetWidth}px`;
    switchActive.style.width = designBtnWidth;
    switchActive.style.marginLeft = `calc(100% - ${designBtnWidth})`
  }
  new ResizeObserver(designBtnWidth).observe(designBtn);
})