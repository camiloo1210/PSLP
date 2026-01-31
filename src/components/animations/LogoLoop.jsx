import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const LogoLoop = ({
    logos = [],
    speed = 30, // Duration for the loop
    direction = 'left',
    logoHeight = 120,
    gap = 60,
    hoverSpeed = 0.5,
    scaleOnHover = true,
    fadeOut = true,
    fadeOutColor = '#1a0f1f',
}) => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const tweenRef = useRef(null);

    // Create 4 sets to ensure we have enough buffer for seamless looping on wide screens
    // and to ensure calculations are robust.
    const extendedLogos = [...logos, ...logos, ...logos, ...logos];

    useEffect(() => {
        let ctx;
        let resizeObserver;

        const setupAnimation = () => {
            // Clean up previous context if exists
            if (ctx) ctx.revert();

            ctx = gsap.context(() => {
                const container = containerRef.current;
                if (!container) return;

                const totalWidth = container.scrollWidth;
                const oneParamSetWidth = totalWidth / 4; // Since we have 4 sets

                // Set initial position
                if (direction === 'left') {
                    gsap.set(container, { x: 0 });
                } else {
                    gsap.set(container, { x: -oneParamSetWidth });
                }

                tweenRef.current = gsap.to(container, {
                    x: direction === 'left' ? `-=${oneParamSetWidth}` : `+=${oneParamSetWidth}`,
                    duration: speed,
                    ease: "none",
                    repeat: -1,
                    overwrite: true,
                });

            }, wrapperRef);
        };

        // Initialize animation
        setupAnimation();

        // Setup ResizeObserver to handle image loading or window resizing
        resizeObserver = new ResizeObserver(() => {
            setupAnimation();
        });

        if (wrapperRef.current) {
            resizeObserver.observe(wrapperRef.current);
        }
        // Also observe the inner container to catch content changes
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (ctx) ctx.revert();
            if (resizeObserver) resizeObserver.disconnect();
        };
    }, [logos, speed, direction]);

    const handleMouseEnter = () => {
        if (!tweenRef.current) return;

        let targetScale = hoverSpeed;
        if (hoverSpeed > 10) {
            targetScale = speed / hoverSpeed;
        }

        gsap.to(tweenRef.current, { timeScale: targetScale, duration: 0.5 });
    };

    const handleMouseLeave = () => {
        if (!tweenRef.current) return;
        gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });
    };

    return (
        <div
            ref={wrapperRef}
            className="relative w-full overflow-hidden flex items-center"
            // CRITICAL FIX: Increased height significantly (logoHeight + 140px) to ensure tooltips fit inside the overflow area.
            style={{ height: logoHeight + 140 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {fadeOut && (
                <>
                    <div
                        className="absolute left-0 top-0 bottom-0 z-10 w-24 pointer-events-none"
                        style={{ background: `linear-gradient(to right, ${fadeOutColor}, transparent)` }}
                    />
                    <div
                        className="absolute right-0 top-0 bottom-0 z-10 w-24 pointer-events-none"
                        style={{ background: `linear-gradient(to left, ${fadeOutColor}, transparent)` }}
                    />
                </>
            )}

            <div
                ref={containerRef}
                className="flex items-center whitespace-nowrap will-change-transform"
                style={{
                    gap: `${gap}px`,
                    paddingLeft: `${gap}px`,
                }}
            >
                {extendedLogos.map((logo, index) => (
                    <div
                        key={index}
                        className={`
              relative group flex flex-col items-center justify-center shrink-0
              ${scaleOnHover ? 'transition-transform duration-300 hover:scale-110' : ''}
              /* Add z-index to hover state to ensure it pops over neighbors if needed, though mostly relevant for scale */
            `}
                        style={{ height: logoHeight }}
                    >
                        <a
                            href={logo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center h-full w-auto grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 p-2"
                        >
                            {logo.src ? (
                                <img
                                    src={logo.src}
                                    alt={logo.alt || logo.title}
                                    className="h-full w-auto object-contain pointer-events-none select-none max-w-[200px]"
                                />
                            ) : (
                                // Increased text size for visibility
                                <div className="text-6xl text-white/50 group-hover:text-[#F970A2] transition-colors p-4">
                                    {logo.node}
                                </div>
                            )}
                        </a>

                        {/* Tooltip Fixes:
                1. Increased 'bottom' offset to be lower but within the expanded container.
                2. Added z-index 50.
                3. Added border for visibility against dark bg.
            */}
                        <div
                            className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white text-[#1a0f1f] text-sm font-bold py-2 px-4 rounded-lg uppercase tracking-wider shadow-xl whitespace-nowrap z-50 border-2 border-[#F970A2]"
                        >
                            {logo.title || logo.alt}
                            {/* Little arrow at top of tooltip */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-t-2 border-l-2 border-[#F970A2]"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoLoop;
