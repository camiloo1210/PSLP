import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript,
    SiPostgresql, SiMongodb, SiDocker, SiFigma, SiPython,
    SiJavascript, SiVuedotjs, SiAngular, SiExpress, SiNestjs,
    SiRedis, SiKubernetes, SiGithubactions, SiSupabase, SiRabbitmq,
    SiN8N, SiTensorflow, SiPytorch, SiDotnet, SiCloudflare
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TechTunnel = () => {
    const containerRef = useRef(null);
    const tunnelRef = useRef(null);

    const icons = [
        // Languages
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "Python", Icon: SiPython, color: "#3776AB" },
        { name: "Java", Icon: FaJava, color: "#007396" },
        { name: "C#", Icon: SiDotnet, color: "#512BD4" }, // Using Dotnet icon for C#

        // Frontend
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
        { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
        { name: "Angular", Icon: SiAngular, color: "#DD0031" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },

        // Backend & Database
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "Express", Icon: SiExpress, color: "#ffffff" },
        { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
        { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        { name: "Redis", Icon: SiRedis, color: "#DC382D" },
        { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },

        // Cloud & DevOps
        { name: "AWS", Icon: FaAws, color: "#FF9900" },
        { name: "Docker", Icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
        { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
        { name: "RabbitMQ", Icon: SiRabbitmq, color: "#FF6600" },
        { name: "n8n", Icon: SiN8N, color: "#FF6E26" },
        { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },

        // AI & Machine Learning
        { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
        { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
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
                    end: "bottom+=1000% bottom", // Much longer scroll distance
                    scrub: 1,
                    pin: true,
                }
            });

            // 1. Movement (Scale & Z)
            tl.fromTo(items,
                {
                    opacity: 0, // Start invisible
                    scale: 1, // Start larger (was 0)
                    z: -5000,
                    x: (i) => (i % 2 === 0 ? 1 : -1) * (window.innerWidth * 0.2), // Alternate Right/Left
                    y: 0, // Keep them vertically centered
                },
                {
                    z: 2000,
                    scale: 5,
                    duration: 10,
                    stagger: {
                        each: 3,
                        from: "start"
                    },
                    ease: "none",
                },
                0 // Start at absolute 0
            );

            // 2. Fade In (Quickly at start)
            tl.to(items, {
                opacity: 1,
                duration: 1,
                stagger: {
                    each: 3,
                    from: "start"
                },
                ease: "power2.out"
            }, 0); // Start overlapping with movement start

            // 3. Fade Out (At the very end of travel)
            tl.to(items, {
                opacity: 0,
                duration: 1, // Fade out in last second
                stagger: {
                    each: 3,
                    from: "start"
                },
                immediateRender: false
            }, 9); // Start at 9s (10s duration - 1s fade)

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
                        className="tech-item absolute flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-4 bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-110 group cursor-pointer">
                            <item.Icon className="w-12 h-12 md:w-20 md:h-20 drop-shadow-2xl transition-transform duration-300 group-hover:rotate-12" color={item.color} />
                            <span className="text-sm md:text-xl font-bold text-white tracking-wide whitespace-nowrap drop-shadow-md">{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechTunnel;
