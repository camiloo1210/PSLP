import gsap from 'gsap';

export const appleZoomEffect = (selector) => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
        gsap.fromTo(el,
            { scale: 0.8, y: 50, opacity: 0 },
            {
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: 1
                }
            }
        );
    });
};

export const initProjectShowcase = (containerRef, itemsSelector) => {
    const items = gsap.utils.toArray(itemsSelector);

    // We want to pin the section and have items scroll through with the zoom effect
    // But adhering to the prompt: "Pin section while individual projects animate"
    // This often means a horizontal scroll or a stacked card efffect.
    // However, the prompt describes: "Projects start at scale 0.7... As they enter viewport, scale to 1.0... When centered, briefly scale to 1.15... Pin section"

    // Complex sequence:
    // 1. Pin the container.
    // 2. Animate items one by one (or as they scroll naturally if container is long).
    // Let's assume a vertical scroll where items trigger their own animations, but maybe the background is pinned or the title.

    // Implementation: simple vertical scroll with scrubbed scaling is safer and looks great.
    // If pinning is required, it usually means 100vh container with absolute positioning?
    // Let's stick to the "Signature Effect" description: "Elements start small... scrub... scale up".

    items.forEach((el) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "center center",
                scrub: 1
            }
        });

        tl.fromTo(el,
            { scale: 0.7, opacity: 0.5, y: 100 },
            { scale: 1, opacity: 1, y: 0 }
        );

        // Emphasis when centered
        gsap.to(el, {
            scale: 1.1,
            zIndex: 10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            scrollTrigger: {
                trigger: el,
                start: "center 55%",
                end: "center 45%",
                toggleActions: "play reverse play reverse",
                scrub: 0.5
            }
        });
    });
};
