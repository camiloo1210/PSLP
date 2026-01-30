import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaCode, FaRocket, FaPaintBrush } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CircularGallery from '../animations/CircularGallery';

gsap.registerPlugin(ScrollTrigger);

const OusmaneLanding = () => {
    const navigate = useNavigate();
    const componentRef = useRef(null);
    const sliderRef = useRef(null);
    const triggerRef = useRef(null);
    const [mobileUnlocked, setMobileUnlocked] = React.useState(false);

    // Initial check for desktop to unlock immediately
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setMobileUnlocked(true);
        }
    }, []);

    const handleMobileScroll = (e) => {
        // Only trigger on mobile
        if (window.innerWidth >= 768) return;

        const element = e.target;
        // Check if scrolled to the end (with small tolerance)
        if (element.scrollLeft + element.clientWidth >= element.scrollWidth - 10) {
            setMobileUnlocked(true);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Hero Text Reveal
            const tl = gsap.timeline();
            tl.from(".hero-char", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power4.out"
            })
                .from(".hero-sub", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.5");

            // 2. Horizontal Scroll Section
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const panels = gsap.utils.toArray(".scroll-panel");
                gsap.to(panels, {
                    xPercent: -100 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        pin: true,
                        scrub: 1,
                        snap: 1 / (panels.length - 1),
                        end: () => "+=" + sliderRef.current.offsetWidth,
                        refreshPriority: 1
                    }
                });
            });

            // 3. Parallax Images in Vertical Section
            gsap.utils.toArray(".parallax-img").forEach((img) => {
                gsap.to(img, {
                    backgroundPosition: `50% ${innerHeight / 2}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        scrub: true
                    }
                });
            });

            // 4. Reveal Text on Scroll
            gsap.utils.toArray(".reveal-text").forEach((text) => {
                gsap.from(text, {
                    y: 100,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%"
                    }
                });
            });

        }, componentRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        { id: "01", title: "Fiado", cat: "Fintech / SaaS", img: "bg-gradient-to-br from-blue-600 to-indigo-900", link: "/fiado", logo: "/fiado.svg" },
        { id: "02", title: "Glu", cat: "Speech AI / Real-time", img: "bg-gradient-to-br from-cyan-600 to-slate-900", link: "/glu", logo: "/glu.svg" },
        { id: "03", title: "Ema", cat: "HealthTech / Medical", img: "bg-gradient-to-br from-emerald-500 to-teal-900", link: "/ema", logo: "/ema.svg" },
    ];

    return (
        <div ref={componentRef} className="bg-[#1a0f1f] text-[#fce4d6] min-h-screen font-sans selection:bg-[#F970A2] selection:text-white">

            <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-[65%] w-full md:w-[40%] z-0 pointer-events-none">
                    <video
                        src="video/VideoPulpo.mp4"
                        poster="/poster.png"
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover mask-image-gradient-b"
                    />
                    {/* Color tint overlay to match background */}
                    <div className="absolute inset-0 bg-[#1a0f1f] mix-blend-color opacity-50"></div>
                    {/* Darken overlay to merge brightness */}
                    <div className="absolute inset-0 bg-[#1a0f1f] mix-blend-multiply opacity-80"></div>

                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1a0f1f]/20 to-[#1a0f1f]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a0f1f] to-transparent"></div>
                </div>
                <div className="container mx-auto z-10">
                    <p className="hero-sub text-[#F970A2] font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base">Estudio Digital</p>
                    <h1 className="text-[18vw] md:text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mix-blend-difference text-white">
                        {"KIROKU".split("").map((char, i) => (
                            <span key={i} className="hero-char inline-block">{char}</span>
                        ))}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-end mt-12 border-t border-white/20 pt-8 gap-8 md:gap-0">
                        <p className="hero-sub text-lg md:text-2xl max-w-lg text-white/60">
                            Creamos experiencias digitales inmersivas que definen el futuro de la web.
                        </p>
                        <div className="hero-sub">
                            <span className="text-6xl md:text-8xl font-bold opacity-10">2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- HORIZONTAL SCROLL SECTION --- */}
            <section
                ref={triggerRef}
                className="h-screen flex flex-col justify-center bg-white text-[#1a0f1f] relative z-20 overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none"
                onScroll={handleMobileScroll}
            >
                <div ref={sliderRef} className="flex h-full w-[400vw] md:w-[400vw]">

                    {/* Panel 1: Intro */}
                    <div className="scroll-panel w-screen h-full flex flex-col justify-center items-center p-6 md:p-12 bg-[#Fce4d6] shrink-0 snap-center">
                        <h2 className="text-[15vw] md:text-[8vw] font-black leading-none mb-10 text-center">NUESTRO<br />PROCESO</h2>
                        <FaArrowRight className="text-4xl md:text-6xl animate-pulse" />
                    </div>

                    {/* Panel 2: Design */}
                    <div className="scroll-panel w-screen h-full flex justify-center items-center p-6 md:p-12 bg-[#1a0f1f] text-[#Fce4d6] shrink-0 snap-center">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                            <div className="text-center md:text-left">
                                <FaPaintBrush className="text-6xl md:text-8xl mb-8 text-[#F970A2] mx-auto md:mx-0" />
                                <h3 className="text-4xl md:text-6xl font-bold mb-6">DISEÑO</h3>
                                <p className="text-lg md:text-xl opacity-70">
                                    No solo diseñamos interfaces, esculpimos experiencias.
                                    Cada pixel tiene un propósito, cada animación una historia.
                                </p>
                            </div>
                            <div className="hidden md:block text-[20rem] font-black opacity-10 font-outline-2">01</div>
                            <div className="md:hidden text-[10rem] font-black opacity-10 font-outline-2 text-center">01</div>
                        </div>
                    </div>

                    {/* Panel 3: Develop */}
                    <div className="scroll-panel w-screen h-full flex justify-center items-center p-6 md:p-12 bg-[#F970A2] text-white shrink-0 snap-center">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                            <div className="order-2 md:order-1 hidden md:block">
                                <div className="text-[20rem] font-black opacity-20">02</div>
                            </div>
                            <div className="order-2 md:order-1 md:hidden text-center">
                                <div className="text-[10rem] font-black opacity-20">02</div>
                            </div>
                            <div className="order-1 md:order-2 text-center md:text-left">
                                <FaCode className="text-6xl md:text-8xl mb-8 text-[#1a0f1f] mx-auto md:mx-0" />
                                <h3 className="text-4xl md:text-6xl font-bold mb-6">CÓDIGO</h3>
                                <p className="text-lg md:text-xl opacity-90">
                                    Arquitectura robusta, rendimiento extremo.
                                    Utilizamos la última tecnología para dar vida a lo imposible.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Panel 4: Deploy */}
                    <div className="scroll-panel w-screen h-full flex justify-center items-center p-6 md:p-12 bg-white text-[#1a0f1f] shrink-0 snap-center">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                            <div className="text-center md:text-left">
                                <FaRocket className="text-6xl md:text-8xl mb-8 text-[#DDA15E] mx-auto md:mx-0" />
                                <h3 className="text-4xl md:text-6xl font-bold mb-6">LANZAMIENTO</h3>
                                <p className="text-lg md:text-xl opacity-70">
                                    Despegue exitoso. Escalabilidad garantizada y soporte continuo
                                    para asegurar tu dominio digital.
                                </p>
                            </div>
                            <div className="hidden md:block text-[20rem] font-black opacity-5 text-[#DDA15E]">03</div>
                            <div className="md:hidden text-[10rem] font-black opacity-5 text-[#DDA15E] text-center">03</div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- UNLOCKABLE CONTENT WRAPPER --- */}
            <div className={`transition-opacity duration-1000 ${mobileUnlocked ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden md:h-auto md:overflow-visible md:opacity-100'}`}>

                {/* --- VERTICAL PROJECT LIST --- */}
                <section className="py-20 md:py-32 px-6">
                    <div className="container mx-auto">
                        <h2 className="reveal-text text-3xl md:text-6xl font-bold mb-16 md:mb-24 border-b border-white/10 pb-8">
                            TRABAJOS SELECCIONADOS <span className="text-[#F970A2] text-lg md:text-xl align-top">('23-'25)</span>
                        </h2>

                        <div className="space-y-24 md:space-y-32">
                            {projects.map((project, index) => (
                                <div key={index} className="reveal-text group flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                    <span className="hidden md:block text-xl font-mono opacity-50">({project.id})</span>
                                    <div className="flex-1 w-full text-center md:text-left">
                                        <h3
                                            onClick={() => project.link && navigate(project.link)}
                                            className="text-4xl md:text-8xl font-bold hover:text-[#F970A2] transition-colors cursor-pointer uppercase"
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-base md:text-xl mt-4 opacity-60 uppercase tracking-widest">{project.cat}</p>
                                    </div>
                                    <div className={`w-full md:w-1/3 aspect-[4/3] ${project.img} rounded-lg opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center p-8`}>
                                        {project.logo && <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain drop-shadow-2xl" />}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-40 text-center">
                            <a href="#" className="reveal-text inline-block text-2xl border border-white/20 px-12 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                VER TODO EL PORTAFOLIO
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- TECH TUNNEL SECTION (Replaced by Circular Gallery) --- */}
                <section className="h-screen w-full overflow-hidden bg-[#110a14] relative z-30">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none gap-8">
                        <h2 className="text-6xl md:text-9xl font-black text-white/10 uppercase tracking-tighter text-center">
                            Kiroku
                        </h2>
                        <img src="/Kiroku.svg" alt="Kiroku Logo" className="w-24 h-24 md:w-80 md:h-80 opacity-10" />
                    </div>

                    <div className="relative z-20 w-full h-full">
                        <CircularGallery />
                    </div>
                </section>

                {/* --- FOOTER --- */}
                <footer className="h-screen flex flex-col justify-between py-12 px-6 bg-[#F970A2] text-[#1a0f1f]">
                    <div className="border-b border-black/10 pb-8">
                        <h2 className="text-[14vw] md:text-[10vw] font-black leading-none">
                            HABLEMOS DE<br />TU PROYECTO
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-0">
                        <div className="text-lg md:text-xl space-y-2 font-medium w-full md:w-auto text-left">
                            <p>hello@kiroku.com</p>
                            <p>+593 99 123 4567</p>
                            <p>Quito, Ecuador</p>
                        </div>
                        <div className="text-[20vw] md:text-[15vw] font-black leading-none opacity-20 select-none">
                            KIROKU
                        </div>
                    </div>
                </footer>

            </div>

        </div>
    );
};

export default OusmaneLanding;