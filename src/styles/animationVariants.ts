import { Variants } from 'framer-motion';

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.2, 0, 0.2, 1]
    }
  }
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.5, 0, 0.5, 1]
    }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const textVariants: Variants = {
  enter: {
    y: 20,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: [0.2, 0, 0.2, 1]
    }
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.2, 0, 0.2, 1]
    }
  }
};

export const featurePointVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.2, 0, 0.2, 1]
    }
  })
};

export const lineVariants: Variants = {
  hidden: { opacity: 0, strokeDashoffset: 1000 },
  visible: (i: number) => ({
    opacity: 1,
    strokeDashoffset: 0,
    transition: {
      delay: i * 0.2 + 0.3,
      duration: 1.2,
      ease: [0.2, 0, 0.2, 1]
    }
  })
}; 