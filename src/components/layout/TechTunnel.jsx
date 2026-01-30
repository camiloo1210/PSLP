import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript,
    SiPostgresql, SiMongodb, SiDocker, SiFigma,
    SiPython
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TechTunnel = () => {
    const containerRef = useRef(null);
    const tunnelRef = useRef(null);

    const icons = [
        { Icon: SiReact, color: "#61DAFB" },
        { Icon: SiNextdotjs, color: "#ffffff" },
        { Icon: SiTypescript, color: "#3178C6" },
        { Icon: SiNodedotjs, color: "#339933" },
        { Icon: SiTailwindcss, color: "#06B6D4" },
        { Icon: SiPostgresql, color: "#4169E1" }, // Zoom center
        { Icon: FaAws, color: "#FF9900" },
        { Icon: SiDocker, color: "#2496ED" },
        { Icon: SiMongodb, color: "#47A248" },
        { Icon: SiFigma, color: "#F24E1E" },
        { Icon: SiPython, color: "#3776AB" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.tech-item');

            // Initial Random Positions
            // Tunnel Animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom+=200% bottom",
                    scrub: 1,
                    pin: true,
                }
            });

            tl.fromTo(items,
                {
                    opacity: 0,
                    scale: 0,
                    z: (i) => -2000 - Math.random() * 1000,
                    x: (i) => (Math.random() - 0.5) * window.innerWidth * 0.8,
                    y: (i) => (Math.random() - 0.5) * window.innerHeight * 0.8,
                },
                {
                    z: 2000, // Move WAY past camera (was 500)
                    scale: 4, // Scale up massive
                    opacity: 1,
                    duration: 10,
                    stagger: {
                        amount: 5,
                        from: "random"
                    },
                    ease: "power1.in",
                }
            );

            // Fading out as they pass "through" the camera not strictly needed if z-index handles it, 
            // but helps cleanup visually.
            tl.to(items, {
                opacity: 0,
                duration: 2,
                stagger: {
                    amount: 5,
                    from: "random"
                },
                immediateRender: false
            }, "<+=8"); // Overlap with movement

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen w-full overflow-hidden bg-[#110a14] relative z-30 [perspective:1000px]">
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <h2 className="text-6xl md:text-9xl font-black text-white/10 uppercase tracking-tighter text-center">
                    Kiroku
                </h2>
            </div>

            <div ref={tunnelRef} className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
                {icons.map((item, idx) => (
                    <div
                        key={idx}
                        className="tech-item absolute flex flex-col items-center justify-center p-4"
                    >
                        <item.Icon size={80} color={item.color} className="drop-shadow-2xl" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechTunnel;
