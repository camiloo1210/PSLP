import React, { useEffect, useRef } from 'react';
import { FaArrowLeft, FaExternalLinkAlt, FaMicrophoneAlt, FaShieldAlt, FaHeadset, FaUserCheck, FaDocker, FaBolt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

import Aurora from '../effects/Aurora';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GluPage = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            const elements = gsap.utils.toArray(".reveal-element");

            elements.forEach((el) => {
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: FaBolt,
            title: "Transcripción Instantánea (Tiempo Real Ultra-Rápido)",
            desc: "Olvídate de las esperas. Glu transcribe la voz a texto en milisegundos (menos de 0.05 segundos), permitiendo ver lo que se dice casi al mismo tiempo que se pronuncia. Ideal para no perder ni un detalle en conversaciones vivas."
        },
        {
            icon: FaUserCheck,
            title: "Detector Inteligente de Hablantes (Diarización)",
            desc: "El sistema \"escucha\" y organiza la conversación visualmente, separando automáticamente lo que dice el cliente de lo que dice el agente. Presenta el diálogo en dos columnas claras para un seguimiento perfecto."
        },
        {
            icon: FaHeadset,
            title: "Especializado para Contact Centers",
            desc: "No es un transcriptor genérico. Glu está diseñado pensando en las interacciones agente-cliente, optimizando el flujo de trabajo y ayudando a los equipos de soporte y ventas a enfocarse en la conversación, no en tomar notas."
        },
        {
            icon: FaShieldAlt,
            title: "Seguridad Blindada",
            desc: "Protege tu infraestructura. Glu utiliza un sistema avanzado de \"llaves temporales\" que asegura que tus credenciales maestras nunca queden expuestas, manteniendo la privacidad y seguridad de tus datos empresariales al máximo nivel."
        },
        {
            icon: FaMicrophoneAlt, // Using Mic as placeholder for Multilingual
            title: "Soporte Multilingüe",
            desc: "Rompe las barreras del idioma. La plataforma está preparada para detectar y trabajar con múltiples idiomas, adaptándose a equipos globales y clientes de diferentes regiones sin complicaciones."
        },
        {
            icon: FaDocker, // Using Docker/Bolt icon for Reliability
            title: "Fiabilidad a Prueba de Fallos",
            desc: "Gracias a su conexión directa (Direct Stream), Glu elimina intermediarios innecesarios en la red. Esto significa menos cortes, mayor estabilidad y un rendimiento fluido incluso durante altos volúmenes de llamadas."
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-[#00f0ff] selection:text-black pb-20 relative overflow-hidden">
            {/* <Aurora
                colorStops={['#FC6E6F', '#FDEDEA', '#A7B5DD']}
                blend={0.5}
                amplitude={0.1}
                speed={0.8}
            /> */}

            <div className="relative z-10">

                {/* Header / Nav */}
                <nav className="p-4 md:p-8 flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-3 text-lg font-bold hover:text-[#00f0ff] transition-colors reveal-element"
                    >
                        <FaArrowLeft /> VOLVER
                    </button>
                    <div className="text-2xl font-black tracking-tighter reveal-element text-[#00f0ff]">KIROKU</div>
                </nav>

                {/* Hero Section */}
                <header className="container mx-auto px-6 mt-8 mb-16 md:mt-12 md:mb-24">
                    <div className="max-w-4xl">
                        <div className="flex gap-4 mb-6 reveal-element">
                            <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-bold tracking-wider border border-green-500/20">DESARROLLO ACTIVO</span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 reveal-element">
                            Glu
                        </h1>
                        <h2 className="text-xl md:text-4xl font-bold text-[#00f0ff] mb-6 reveal-element">
                            Transcripción en Tiempo Real para Call Centers
                        </h2>
                        <p className="text-lg md:text-2xl opacity-70 leading-relaxed reveal-element max-w-2xl">
                            Una aplicación de alto rendimiento construida en .NET y Blazor Server.
                            Conecta el navegador directamente con la IA para una transcripción instantánea y segura.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-6 reveal-element">
                            <a
                                href="https://glu-kappa.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#00f0ff] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                            >
                                VISITAR DEMO <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </header>

                {/* Video Preview */}
                <section className="container mx-auto px-6 mb-20 md:mb-32 reveal-element">
                    <div className="w-full aspect-video bg-black rounded-2xl border border-[#00f0ff]/20 overflow-hidden relative shadow-[0_0_40px_rgba(0,240,255,0.1)]">
                        <video
                            src="/glu-demo.mp4"
                            controls
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        >
                            <source src="/glu-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>

                {/* Why Glu? */}
                <section className="container mx-auto px-6 mb-20 md:mb-32 reveal-element">
                    <div className="bg-[#111] p-12 rounded-3xl border border-white/5">
                        <h3 className="text-3xl font-bold mb-6 text-[#00f0ff]">¿POR QUÉ GLU?</h3>
                        <p className="text-2xl leading-relaxed opacity-90">
                            Los sistemas tradicionales de transcripción sufren de latencia y problemas de privacidad. Glu elimina los intermediarios con su Arquitectura Direct Stream, logrando una latencia menor a 50ms mientras mantiene las claves API seguras en el servidor. Es la solución definitiva para interacciones de voz críticas.
                        </p>
                    </div>
                </section>

                {/* Key Features Grid */}
                <section className="container mx-auto px-6 mb-20 md:mb-32">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 border-b border-white/10 pb-8 reveal-element">CARACTERÍSTICAS CLAVE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feat, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-[#1a1a1a] to-transparent p-10 rounded-2xl border border-white/5 hover:border-[#00f0ff]/50 hover:bg-white/5 transition-all reveal-element group">
                                <feat.icon className="text-5xl text-[#00f0ff] mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]" />
                                <h3 className="text-2xl font-bold mb-4 text-white">{feat.title}</h3>
                                <p className="opacity-70 leading-relaxed text-lg">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default GluPage;
