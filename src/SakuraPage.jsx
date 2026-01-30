import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- Sakura Petal SVG Component ---
const SakuraPetal = ({ color = "#ffb6c1", className, style }) => (
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

const SakuraPage = () => {
    const containerRef = useRef(null);
    const petalsRef = useRef([]);

    // --- Configuration ---
    const PETAL_COUNT = 50;
    const COLORS = ["#ffb6c1", "#ffc9d4", "#ffe0eb", "#F970A2"]; // Added Kiroku Primary

    // --- Generate Petal Data ---
    const petals = useMemo(() => {
        return Array.from({ length: PETAL_COUNT }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // %
            yStart: -20 - Math.random() * 80, // px, above fold
            scale: 0.5 + Math.random() * 0.8, // 0.5x - 1.3x
            rotation: Math.random() * 360,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            driftRange: 50 + Math.random() * 100, // Horizontal drift amount
            duration: 5 + Math.random() * 10 // Float duration
        }));
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // --- 1. Global Falling Animation (Scroll Linked) ---
            // We want petals to fall from their start pos down to well below the viewport
            // linked to the entire page scroll percentage.

            petalsRef.current.forEach((petal, i) => {
                if (!petal) return;

                // Randomize scroll speed slightly for depth perception
                const scrollSpeed = 0.5 + Math.random() * 1.5;

                // Fall Animation linked to scroll
                gsap.to(petal, {
                    y: '120vh', // Fall through the viewport
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: scrollSpeed, // scrub linked to scroll speed
                    }
                });

                // --- 2. Floating/Drifting Animation (Independent loop) ---
                // Natural movement: rotation + horizontal drift
                gsap.to(petal, {
                    x: `+=${petals[i].driftRange}`, // Drift right/left
                    rotation: `+=${360 + Math.random() * 360}`, // Spin
                    duration: petals[i].duration,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true, // Go back and forth
                });

                // Secondary float (bobbing)
                gsap.to(petal, {
                    y: '+=20',
                    duration: 3 + Math.random() * 2,
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
            className="relative min-h-[300vh] bg-neutral-50 font-sans text-kiroku-contrast overflow-x-hidden selection:bg-pink-200"
            style={{ backgroundColor: '#fffbf0' }} // Warm base
        >
            {/* --- Particles Container --- */}
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
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
                            opacity: 0.8,
                            filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1)) blur(0.5px)'
                        }}
                    >
                        <SakuraPetal color={p.color} />
                    </div>
                ))}
            </div>

            {/* --- Header / Hero Content --- */}
            <section className="h-screen flex items-center justify-center relative">
                <div className="text-center z-10 px-6">
                    <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-600 text-sm font-bold mb-6 tracking-widest uppercase animate-fade-in-up">
                        Kiroku
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-800 tracking-tight">
                        Hanami
                        <span className="text-pink-400">.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-lg mx-auto leading-relaxed">
                        La belleza efímera de la naturaleza, capturada en código.
                    </p>
                    <div className="mt-10 animate-bounce text-gray-300">
                        ↓ Scroll para explorar
                    </div>
                </div>
            </section>

            {/* --- Content Section 1 --- */}
            <section className="min-h-screen flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-800">El Arte de GSAP</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Utilizando <strong>ScrollTrigger</strong>, cada pétalo responde dinámicamente al movimiento del usuario.
                            La física calculada aleatoriamente otorga a cada elemento una personalidad única, simulando la impredecible danza del viento.
                        </p>
                        <ul className="space-y-4 pt-4 border-t border-gray-100">
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                                40-60 Partículas SVG optimizadas
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                                Animaciones compuestas (Scroll + Drift)
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                                Renderizado eficiente a 60fps
                            </li>
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative rounded-3xl overflow-hidden aspect-square flex items-center justify-center bg-gradient-to-br from-pink-50 to-white shadow-xl border border-pink-100 p-8">
                            <SakuraPetal className="w-32 h-32 animate-pulse text-pink-300" color="#F970A2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Content Section 2 --- */}
            <section className="min-h-screen flex flex-col items-center justify-center relative">
                <div className="container mx-auto px-6 text-center z-10">
                    <h2 className="text-5xl font-bold text-gray-800 mb-12">Zen Digital</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Fluidez", desc: "Animaciones suaves con scrub." },
                            { title: "Armonía", desc: "Paleta de colores curada." },
                            { title: "Detalle", desc: "Movimiento orgánico y natural." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white">
                                <h3 className="text-2xl font-bold mb-4 text-pink-500">{card.title}</h3>
                                <p className="text-gray-600">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="h-96 flex items-center justify-center bg-gray-900 text-white relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Kiroku</h2>
                    <p className="text-gray-400">Hecho con ❤️ y GSAP</p>
                </div>
            </footer>
        </div>
    );
};

export default SakuraPage;
