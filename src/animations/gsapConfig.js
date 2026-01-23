import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initGSAP = () => {
    // Global GSAP settings
    gsap.defaults({
        ease: 'power2.out',
        duration: 1
    });
};
