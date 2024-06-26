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
  mainNavToggle.style.backgroundImage = 'url("../img/svg/icon-menu-cross.svg")';
  mainNavToggle.style.backgroundSize = '60px 35px';
  createOverlay();
}

function closeMenu() {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav--opened');
  document.body.style.overflowY = 'visible';
  mainNavToggle.style.backgroundImage = '';
  mainNavToggle.style.backgroundSize = 'cover';
  removeOverlay();
}

mainNavToggle.addEventListener('click', toggleMenuMobile);
mainNnavLinkActive.addEventListener('click', closeMenu);

function createOverlay() {
  let overlayElement = document.createElement('div');
  overlayElement.style.position = 'fixed';
  overlayElement.style.backgroundColor = 'rgba(41,41,41,0.6)';
  overlayElement.style.left = 0;
  overlayElement.style.right = 0;
  overlayElement.style.top = 0;
  overlayElement.style.bottom = 0;
  overlayElement.style.zIndex = '999';
  overlayElement.style.display = 'flex';
  return overlayElement;
}

function removeOverlay() {
  overlay.remove();
  overlay.removeEventListener('click', createOverlay);
}
