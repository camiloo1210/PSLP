import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight, FaCode, FaRocket, FaPaintBrush, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CircularGallery from '../animations/CircularGallery';
import LogoLoop from '../animations/LogoLoop';
import { SiVercel, SiAuth0, SiStripe, SiAmazon, SiShopify, SiAdobe, SiSlack } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const OusmaneLanding = () => {
    const navigate = useNavigate();
    const componentRef = useRef(null);
    const sliderRef = useRef(null);
    const triggerRef = useRef(null);
    const [mobileUnlocked, setMobileUnlocked] = useState(false);
    const [showHint, setShowHint] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Initial check for desktop to unlock immediately
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setMobileUnlocked(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, []);

    const handleUnlock = () => {
        setMobileUnlocked(true);
        // Smooth scroll to the projects section
        setTimeout(() => {
            const projectsSection = document.getElementById('projects-section');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleMobileScroll = (e) => {
        // Only trigger on mobile
        if (window.innerWidth >= 768) return;

        const element = e.target;
        // Check if scrolled to the end (with small tolerance)
        if (element.scrollLeft + element.clientWidth >= element.scrollWidth - 50) {
            setMobileUnlocked(true);
        }

        if (element.scrollLeft > 50) {
            setShowHint(false);
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
                    y: 50,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 85%"
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

    const partnerLogos = [
        { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
        { node: <SiAuth0 />, title: "Auth0", href: "https://auth0.com" },
        { node: <SiStripe />, title: "Stripe", href: "https://stripe.com" },
        { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
        { node: <SiShopify />, title: "Shopify", href: "https://shopify.com" },
        { node: <SiAdobe />, title: "Adobe", href: "https://adobe.com" },
        { node: <SiSlack />, title: "Slack", href: "https://slack.com" },
    ];

    return (
        <div ref={componentRef} className="bg-[#1a0f1f] text-[#fce4d6] min-h-screen font-sans selection:bg-[#F970A2] selection:text-white overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="h-[90vh] md:h-screen flex flex-col justify-center px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-[60%] md:h-[65%] w-full md:w-[40%] z-0 pointer-events-none">
                    <video
                        src="video/VideoPulpo.mp4"
                        poster="/poster.png"
                        autoPlay
                        preload="auto"
                        muted
                        playsInline
                        className="w-full h-full object-cover mask-image-gradient-b"
                    />
                    {/* Overlays for better text contrast */}
                    <div className="absolute inset-0 bg-[#1a0f1f] mix-blend-color opacity-50"></div>
                    <div className="absolute inset-0 bg-[#1a0f1f] mix-blend-multiply opacity-80"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f1f]/20 to-[#1a0f1f]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a0f1f] to-transparent"></div>
                </div>

                <div className="container mx-auto z-10 relative mt-20 md:mt-0">
                    <p className="hero-sub text-[#F970A2] font-bold tracking-[0.2em] mb-4 uppercase text-xs md:text-base">Estudio Digital</p>
                    <h1 className="text-[17vw] md:text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mix-blend-difference text-white">
                        {"KIROKU".split("").map((char, i) => (
                            <span key={i} className="hero-char inline-block">{char}</span>
                        ))}
                    </h1>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 md:mt-12 border-t border-white/20 pt-6 md:pt-8 gap-6 md:gap-0">
                        <p className="hero-sub text-base md:text-2xl max-w-sm md:max-w-lg text-white/70 leading-relaxed">
                            Creamos experiencias digitales inmersivas que definen el futuro de la web.
                        </p>
                        <div className="hero-sub self-end md:self-auto">
                            <span className="text-5xl md:text-8xl font-bold opacity-10">2026</span>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator for mobile */}
                <div className="absolute bottom-8 left-0 w-full flex flex-col items-center justify-center md:hidden animate-bounce opacity-50 pointer-events-none">
                    <span className="text-xs uppercase tracking-widest mb-2 text-center">Descubre</span>
                    <FaChevronRight className="rotate-90 text-xl" />
                </div>
            </section>

            {/* --- HORIZONTAL SCROLL SECTION --- */}
            <section
                ref={triggerRef}
                className="h-screen w-full flex flex-col justify-center bg-white text-[#1a0f1f] relative z-20 overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none"
                onScroll={handleMobileScroll}
            >
                {/* Visual hint for horizontal scroll on mobile */}
                <div className={`md:hidden absolute top-1/2 right-4 z-50 pointer-events-none transition-opacity duration-500 ${showHint ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-black/80 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse shadow-lg flex items-center gap-2">
                        Desliza <FaArrowRight />
                    </div>
                </div>

                <div ref={sliderRef} className="flex h-full w-[400vw] md:w-[400vw]">

                    {/* Panel 1: Intro */}
                    <div className="scroll-panel snap-always w-screen h-full flex flex-col justify-center items-center p-6 md:p-12 bg-[#Fce4d6] shrink-0 snap-center relative">
                        <h2 className="text-[14vw] md:text-[8vw] font-black leading-none mb-8 md:mb-10 text-center">NUESTRO<br />PROCESO</h2>
                        <div className="flex items-center gap-4 text-xl md:text-2xl font-bold opacity-80 animate-pulse">
                            <span className="hidden md:inline">SCROLL</span>
                            <span className="md:hidden">DESLIZA</span>
                            <FaArrowRight />
                        </div>
                        <div className="absolute bottom-10 text-xs md:text-sm uppercase tracking-widest opacity-40">
                            Metodología Kiroku ©
                        </div>
                    </div>

                    {/* Panel 2: Design */}
                    <div className="scroll-panel snap-always w-screen h-full flex justify-center items-center p-6 md:p-12 bg-[#1a0f1f] text-[#Fce4d6] shrink-0 snap-center">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
                            <div className="text-center md:text-left flex flex-col items-center md:items-start">
                                <FaPaintBrush className="text-5xl md:text-8xl mb-6 md:mb-8 text-[#F970A2]" />
                                <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">DISEÑO</h3>
                                <p className="text-base md:text-xl opacity-70 leading-relaxed max-w-sm">
                                    No solo diseñamos interfaces, esculpimos experiencias.
                                    Cada pixel tiene un propósito, cada animación una historia.
                                </p>
                            </div>
                            <div className="hidden md:block text-[20rem] font-black opacity-10 font-outline-2">01</div>
                            <div className="md:hidden text-[8rem] font-black opacity-10 font-outline-2 text-center absolute top-20 right-6 pointer-events-none">01</div>
                        </div>
                    </div>

                    {/* Panel 3: Develop */}
                    <div className="scroll-panel snap-always w-screen h-full flex justify-center items-center p-6 md:p-12 bg-[#F970A2] text-white shrink-0 snap-center">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
                            <div className="order-2 md:order-1 hidden md:block">
                                <div className="text-[20rem] font-black opacity-20">02</div>
                            </div>
                            <div className="md:hidden text-[8rem] font-black opacity-20 text-center absolute top-20 left-6 pointer-events-none">02</div>

                            <div className="order-1 md:order-2 text-center md:text-left flex flex-col items-center md:items-start">
                                <FaCode className="text-5xl md:text-8xl mb-6 md:mb-8 text-[#1a0f1f]" />
                                <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">CÓDIGO</h3>
                                <p className="text-base md:text-xl opacity-90 leading-relaxed max-w-sm">
                                    Arquitectura robusta, rendimiento extremo.
                                    Utilizamos la última tecnología para dar vida a lo imposible.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Panel 4: Deploy */}
                    <div className="scroll-panel snap-always w-screen h-full flex justify-center items-center p-6 md:p-12 bg-white text-[#1a0f1f] shrink-0 snap-center">
                        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
                            <div className="text-center md:text-left flex flex-col items-center md:items-start">
                                <FaRocket className="text-5xl md:text-8xl mb-6 md:mb-8 text-[#DDA15E]" />
                                <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">LANZAMIENTO</h3>
                                <p className="text-base md:text-xl opacity-70 leading-relaxed max-w-sm mb-8">
                                    Despegue exitoso. Escalabilidad garantizada y soporte continuo.
                                </p>

                                {/* Mobile-only CTA Button to remove friction */}
                                <button
                                    onClick={handleUnlock}
                                    className="md:hidden group bg-[#1a0f1f] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-3"
                                >
                                    Ver Proyectos <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            <div className="hidden md:block text-[20rem] font-black opacity-5 text-[#DDA15E]">03</div>
                            <div className="md:hidden text-[8rem] font-black opacity-5 text-[#DDA15E] text-center absolute top-20 right-6 pointer-events-none">03</div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- UNLOCKABLE CONTENT WRAPPER --- */}
            <div
                id="projects-section"
                className={`transition-all duration-1000 ease-in-out ${mobileUnlocked ? 'opacity-100 translate-y-0' : 'hidden md:block md:opacity-100 md:translate-y-0'}`}
            >

                {/* --- VERTICAL PROJECT LIST --- */}
                <section className="py-20 md:py-32 px-6 min-h-screen">
                    <div className="container mx-auto">
                        <h2 className="reveal-text text-3xl md:text-6xl font-bold mb-16 md:mb-24 border-b border-white/10 pb-8 sticky top-0 bg-[#1a0f1f]/90 backdrop-blur-sm z-10 py-4 md:static md:bg-transparent">
                            TRABAJOS <span className="text-[#F970A2] text-lg md:text-xl align-top">('23-'25)</span>
                        </h2>

                        <div className="space-y-20 md:space-y-32">
                            {projects.map((project, index) => (
                                <div key={index} className="reveal-text group flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
                                    <span className="hidden md:block text-xl font-mono opacity-50">({project.id})</span>

                                    {/* Mobile Project Index */}
                                    <span className="md:hidden absolute -top-10 left-0 text-6xl font-black opacity-5">0{index + 1}</span>

                                    <div className="flex-1 w-full text-center md:text-left z-10">
                                        <h3
                                            onClick={() => project.link && navigate(project.link)}
                                            className="text-5xl md:text-8xl font-black hover:text-[#F970A2] transition-colors cursor-pointer uppercase tracking-tighter"
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-sm md:text-xl mt-4 opacity-60 uppercase tracking-widest font-mono">{project.cat}</p>
                                    </div>
                                    <div className={`w-full md:w-1/3 aspect-video md:aspect-[4/3] ${project.img} rounded-lg opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center p-8 shadow-2xl`}>
                                        {project.logo && <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain drop-shadow-2xl" />}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-32 md:mt-40 text-center">
                            <a href="#" className="reveal-text inline-block text-lg md:text-2xl border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                VER TODO EL PORTAFOLIO
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- TECH TUNNEL SECTION --- */}
                <section className="h-[60vh] md:h-screen w-full overflow-hidden bg-[#110a14] relative z-30">
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none gap-4 md:gap-8">
                        <h2 className="text-5xl md:text-9xl font-black text-white/10 uppercase tracking-tighter text-center">
                            Kiroku
                        </h2>
                        <img src="/Kiroku.svg" alt="Kiroku Logo" className="w-20 h-20 md:w-80 md:h-80 opacity-10" />
                    </div>

                    <div className="relative z-20 w-full h-full">
                        {(!isMobile || mobileUnlocked) && <CircularGallery />}
                    </div>

                </section>

                {/* --- PARTNERS LOOP SECTION --- */}
                <section className="py-20 md:py-24 bg-[#1a0f1f] border-t border-white/5 relative z-30 overflow-hidden">
                    <div className="container mx-auto px-6 mb-12 text-center">
                        <p className="text-[#F970A2] font-bold tracking-[0.2em] mb-4 uppercase text-xs md:text-sm">Partners Trust Us</p>
                        <h2 className="text-2xl md:text-5xl font-bold text-white mb-8">EMPRESAS COLABORADORAS</h2>
                    </div>

                    <LogoLoop
                        logos={partnerLogos}
                        speed={50}
                        hoverSpeed={0}
                        direction="left"
                        logoHeight={window.innerWidth < 768 ? 50 : 80}
                        fadeOutColor="#1a0f1f"
                    />
                </section>

                {/* --- FOOTER --- */}
                <footer className="min-h-screen flex flex-col justify-between py-12 px-6 bg-[#F970A2] text-[#1a0f1f]">
                    <div className="border-b border-black/10 pb-8 mt-12 md:mt-0">
                        <h2 className="text-[13vw] md:text-[10vw] font-black leading-none tracking-tight">
                            HABLEMOS DE<br />TU PROYECTO
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 font-bold mb-12 md:mb-0">
                        <div className="text-xl md:text-xl space-y-2 w-full md:w-auto text-left">
                            <a href="mailto:hello@kiroku.com" className="block hover:opacity-70 transition-opacity">hello@kiroku.com</a>
                            <a href="tel:+593991234567" className="block hover:opacity-70 transition-opacity">+593 99 123 4567</a>
                            <p className="opacity-60">Quito, Ecuador</p>
                        </div>
                        <div className="text-[22vw] md:text-[15vw] font-black leading-none opacity-20 select-none -ml-2 md:ml-0">
                            KIROKU
                        </div>
                    </div>
                </footer>

            </div>

        </div>
    );
};

export default OusmaneLanding;