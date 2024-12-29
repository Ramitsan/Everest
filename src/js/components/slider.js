'use strict';
import { isSmallDesktop, isTablet, isSmallTablet, isMobile } from "../functions/check-viewport";

const carousel = document.querySelector('.slider__list');
const slideCollection = carousel.querySelectorAll('.slide');
const buttonNext = document.querySelector('.slider__button--next');
const buttonPrev = document.querySelector('.slider__button--prev');

const getSlideWidth = () => {
  let carouselGap = 30;

  if (isSmallDesktop() || isTablet()) {
    carouselGap = 20;
  }
  if (isSmallTablet() || isMobile()) {
    carouselGap = 0;
  }
  return slideCollection[0].getBoundingClientRect().width + carouselGap;
}

buttonNext.addEventListener('click', () => {
  const gap = getSlideWidth();
  carousel.scrollBy(gap, 0);

  if (carousel.scrollWidth !== 0) {
    buttonPrev.style.opacity = 1;
  }
  if (carousel.scrollWidth - gap <= carousel.scrollLeft + width) {
    buttonNext.style.opacity = 0.5;
  }
});
buttonPrev.addEventListener('click', () => {
  const gap = getSlideWidth();
  carousel.scrollBy(-(gap), 0);

  if (carousel.scrollLeft - gap <= 0) {
    buttonPrev.style.opacity = 0.5;
  }
  if (!carousel.scrollWidth - gap <= carousel.scrollLeft + width) {
    buttonNext.style.opacity = 1;
  }
});

let width = carousel.offsetWidth;
window.addEventListener('resize', () => (width = carousel.offsetWidth));