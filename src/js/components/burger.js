const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav-toggle');
let mainNnavLinkActive = document.querySelector('.nav__link--active');
const header = document.querySelector('header');
let overlay;

function toggleMenuMobile() {
  if (mainNav.classList.contains('main-nav--closed')) {
    openMenu();
    overlay = createOverlay();
    header.appendChild(overlay);
  } else {
    closeMenu();
  }
  overlay.addEventListener('click', closeMenu);
}

function openMenu() {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened'); 
  document.body.style.overflowY = 'hidden';
  mainNavToggle.classList.add('burger--active');
  createOverlay();
}

function closeMenu() {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav--opened');
  document.body.style.overflowY = 'visible';
  mainNavToggle.classList.remove('burger--active');
  removeOverlay();
}

mainNavToggle.addEventListener('click', toggleMenuMobile);
mainNnavLinkActive.addEventListener('click', closeMenu);

function createOverlay() {
  let overlayElement = document.createElement('div');
  overlayElement.className = "burger-overlay";
  return overlayElement;
}

function removeOverlay() {
  overlay.remove();
  overlay.removeEventListener('click', createOverlay);
}
