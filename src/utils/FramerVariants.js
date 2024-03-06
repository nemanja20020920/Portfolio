export const fadeUpVariants = {
  initial: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: 'bottom',
  },
  animate: {
    opacity: 1,
    scaleY: 1,
  },
};

export const fadeDownVariants = {
  initial: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: 'top',
  },
  animate: {
    opacity: 1,
    scaleY: 1,
  },
};

export const fadeInVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};

export const slideInLeft = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const slideInRight = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
