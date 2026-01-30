import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register specific to this component instance, though usually global registration is fine.
gsap.registerPlugin(ScrollTrigger);

const SakuraPetal = ({ color, className, style }) => (
    <svg
        viewBox="0 0 30 30"
        className={className}
        style={style}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15,0 C15,0 18,10 25,12 C32,14 28,25 15,30 C2,25 -2,14 5,12 C12,10 15,0 15,0 Z"
            fill={color}
            opacity="0.9"
        />
    </svg>
);

const SakuraBackground = () => {
    const containerRef = useRef(null);
    const petalsRef = useRef([]);

    const PETAL_COUNT = 50;
    // Updated with Kiroku brand colors + soft pinks
    const COLORS = ["#ffb6c1", "#ffc9d4", "#ffe0eb", "#F970A2", "#B65691"];

    const petals = useMemo(() => {
        return Array.from({ length: PETAL_COUNT }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // %
            yStart: -50 - Math.random() * 100, // Start higher up
            scale: 0.5 + Math.random() * 0.8,
            rotation: Math.random() * 360,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            driftRange: 50 + Math.random() * 150,
            duration: 5 + Math.random() * 10
        }));
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // We'll target the document body or root for the scroll trigger
            // since this is a global background.

            petalsRef.current.forEach((petal, i) => {
                if (!petal) return;

                const scrollSpeed = 0.5 + Math.random() * 1.5;

                // 1. Fall Animation (Scroll Linked)
                gsap.to(petal, {
                    y: '120vh',
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body", // Global scroll
                        start: "top top",
                        end: "bottom bottom",
                        scrub: scrollSpeed,
                    }
                });

                // 2. Loop Animation (Drift & Spin)
                gsap.to(petal, {
                    x: `+=${petals[i].driftRange}`,
                    rotation: `+=${360 + Math.random() * 360}`,
                    duration: petals[i].duration,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                });

                // 3. Float
                gsap.to(petal, {
                    y: '+=30',
                    duration: 2 + Math.random() * 3,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [petals]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
            aria-hidden="true"
        >
            {petals.map((p, i) => (
                <div
                    key={p.id}
                    ref={(el) => (petalsRef.current[i] = el)}
                    className="absolute will-change-transform"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.yStart}px`,
                        width: `${30 * p.scale}px`,
                        height: `${30 * p.scale}px`,
                        transform: `rotate(${p.rotation}deg)`,
                        opacity: 0.7,
                        filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.05))'
                    }}
                >
                    <SakuraPetal color={p.color} />
                </div>
            ))}
        </div>
    );
};

export default SakuraBackground;
