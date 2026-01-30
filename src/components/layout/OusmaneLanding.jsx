import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaCode, FaRocket, FaPaintBrush } from 'react-icons/fa';
import TechTunnel from './TechTunnel';

gsap.registerPlugin(ScrollTrigger);

const OusmaneLanding = () => {
    const componentRef = useRef(null);
    const sliderRef = useRef(null);
    const triggerRef = useRef(null);

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
                    refreshPriority: 1 // FIX: Ensure this pin is calculated BEFORE TechTunnel
                }
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
        { id: "01", title: "HealthConnect", cat: "Healthcare", img: "bg-gradient-to-br from-pink-500 to-rose-900" },
        { id: "02", title: "EcoMart", cat: "E-Commerce", img: "bg-gradient-to-br from-emerald-500 to-teal-900" },
        { id: "03", title: "EduPlatform", cat: "EdTech", img: "bg-gradient-to-br from-violet-500 to-purple-900" },
        { id: "04", title: "AgroTech", cat: "Innovation", img: "bg-gradient-to-br from-amber-500 to-orange-900" },
    ];

    return (
        <div ref={componentRef} className="bg-[#1a0f1f] text-[#fce4d6] min-h-screen font-sans selection:bg-[#F970A2] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
                <div className="container mx-auto z-10">
                    <p className="hero-sub text-[#F970A2] font-bold tracking-[0.2em] mb-4 uppercase">Estudio Digital</p>
                    <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mix-blend-difference text-white">
                        {"KIROKU".split("").map((char, i) => (
                            <span key={i} className="hero-char inline-block">{char}</span>
                        ))}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-end mt-12 border-t border-white/20 pt-8">
                        <p className="hero-sub text-xl md:text-2xl max-w-lg text-white/60">
                            Creamos experiencias digitales inmersivas que definen el futuro de la web.
                        </p>
                        <div className="hero-sub mt-8 md:mt-0">
                            <span className="text-8xl font-bold opacity-10">2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- HORIZONTAL SCROLL SECTION --- */}
            <section ref={triggerRef} className="overflow-hidden h-screen flex flex-col justify-center bg-white text-[#1a0f1f] relative z-20">
                <div ref={sliderRef} className="flex h-full w-[400vw]">

                    {/* Panel 1: Intro */}
                    <div className="scroll-panel w-screen h-full flex flex-col justify-center items-center p-12 bg-[#Fce4d6]">
                        <h2 className="text-[8vw] font-black leading-none mb-10">NUESTRO<br />PROCESO</h2>
                        <FaArrowRight className="text-6xl animate-pulse" />
                    </div>

                    {/* Panel 2: Design */}
                    <div className="scroll-panel w-screen h-full flex justify-center items-center p-12 bg-[#1a0f1f] text-[#Fce4d6]">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <FaPaintBrush className="text-8xl mb-8 text-[#F970A2]" />
                                <h3 className="text-6xl font-bold mb-6">DISEÑO</h3>
                                <p className="text-xl opacity-70">
                                    No solo diseñamos interfaces, esculpimos experiencias.
                                    Cada pixel tiene un propósito, cada animación una historia.
                                </p>
                            </div>
                            <div className="text-[20rem] font-black opacity-10 font-outline-2">01</div>
                        </div>
                    </div>

                    {/* Panel 3: Develop */}
                    <div className="scroll-panel w-screen h-full flex justify-center items-center p-12 bg-[#F970A2] text-white">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <div className="text-[20rem] font-black opacity-20">02</div>
                            </div>
                            <div className="order-1 md:order-2">
                                <FaCode className="text-8xl mb-8 text-[#1a0f1f]" />
                                <h3 className="text-6xl font-bold mb-6">CÓDIGO</h3>
                                <p className="text-xl opacity-90">
                                    Arquitectura robusta, rendimiento extremo.
                                    Utilizamos la última tecnología para dar vida a lo imposible.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Panel 4: Deploy */}
                    <div className="scroll-panel w-screen h-full flex justify-center items-center p-12 bg-white text-[#1a0f1f]">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <FaRocket className="text-8xl mb-8 text-[#DDA15E]" />
                                <h3 className="text-6xl font-bold mb-6">LANZAMIENTO</h3>
                                <p className="text-xl opacity-70">
                                    Despegue exitoso. Escalabilidad garantizada y soporte continuo
                                    para asegurar tu dominio digital.
                                </p>
                            </div>
                            <div className="text-[20rem] font-black opacity-5 text-[#DDA15E]">03</div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- VERTICAL PROJECT LIST --- */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <h2 className="reveal-text text-4xl md:text-6xl font-bold mb-24 border-b border-white/10 pb-8">
                        TRABAJOS SELECCIONADOS <span className="text-[#F970A2] text-xl align-top">('23-'25)</span>
                    </h2>

                    <div className="space-y-32">
                        {projects.map((project, index) => (
                            <div key={index} className="reveal-text group md:flex items-center gap-12">
                                <span className="hidden md:block text-xl font-mono opacity-50">({project.id})</span>
                                <div className="flex-1">
                                    <h3 className="text-5xl md:text-8xl font-bold hover:text-[#F970A2] transition-colors cursor-pointer uppercase">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl mt-4 opacity-60 uppercase tracking-widest">{project.cat}</p>
                                </div>
                                <div className={`w-full md:w-1/3 aspect-[4/3] ${project.img} rounded-lg opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105`}></div>
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

            {/* --- TECH TUNNEL SECTION --- */}
            <TechTunnel />

            {/* --- FOOTER --- */}
            <footer className="h-screen flex flex-col justify-between py-12 px-6 bg-[#F970A2] text-[#1a0f1f]">
                <div className="border-b border-black/10 pb-8">
                    <h2 className="text-[10vw] font-black leading-none">
                        HABLEMOS DE<br />TU PROYECTO
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div className="text-xl space-y-2 font-medium">
                        <p>hello@kiroku.com</p>
                        <p>+593 99 123 4567</p>
                        <p>Quito, Ecuador</p>
                    </div>
                    <div className="text-[15vw] font-black leading-none opacity-20 select-none">
                        KIROKU
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default OusmaneLanding;
