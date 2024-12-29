export const isMobile = () => {
  if (window.innerWidth <= 576) {
    return true;
  }

  return false;
};

export const isSmallTablet = () => {
  if (window.innerWidth > 576 && window.innerWidth <= 768) {
    return true;
  }

  return false;
};

export const isTablet = () => {
  if (window.innerWidth > 768 && window.innerWidth <= 1024) {
    return true;
  }

  return false;
};

export const isSmallDesktop = () => {
  if (window.innerWidth > 1024 && window.innerWidth <= 1280) {
    return true;
  }

  return false;
};

export const isDesktop = () => {
  if (window.innerWidth > 1280) {
    return true;
  }

  return false;
};
