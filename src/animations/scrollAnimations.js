import gsap from 'gsap';

export const splitTextReveal = (element) => {
    // Placeholder for complex text reveal
    gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
};

export const animateStats = (elements) => {
    elements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        gsap.to(el, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true
            }
        });
    });
};

export const fadeUp = (elements, stagger = 0.2) => {
    gsap.from(elements, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: stagger,
        scrollTrigger: {
            trigger: elements[0], // Trigger based on the first element or parent usually
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
};
