import gsap from 'gsap';

export const initHeroAnimations = (refs) => {
    const { heroRef, titleRef, subRef, ctaRef, shapesRef } = refs;
    const tl = gsap.timeline();

    // Initial reveal
    // Split text effect simulation (without SplitText plugin)
    // We rely on the element having opacity 0 initially in CSS to avoid FOUC

    tl.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power4.out"
        }
    )
        .fromTo(subRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, "-=1.0")
        .fromTo(ctaRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6");

    // Floating shapes continuous animation
    if (shapesRef.current && shapesRef.current.children) {
        Array.from(shapesRef.current.children).forEach((shape, i) => {
            gsap.to(shape, {
                y: "random(-20, 20)",
                x: "random(-20, 20)",
                rotation: "random(-10, 10)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.2
            });
        });
    }

    // Parallax on scroll
    if (shapesRef.current) {
        gsap.to(shapesRef.current, {
            yPercent: 30, // move down slower than scroll
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Background gradient shift
        gsap.to(heroRef.current, {
            backgroundPosition: "0% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }
};
