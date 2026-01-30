import React, { useEffect, useRef } from 'react';
import { FaArrowLeft, FaExternalLinkAlt, FaMicrophoneAlt, FaShieldAlt, FaHeadset, FaUserCheck, FaDocker, FaBolt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const GluPage = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.from(".reveal-element", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: FaBolt,
            title: "Latencia Ultra Baja",
            desc: "Menos de 50ms de extremo a extremo con Direct Stream. El navegador se comunica directamente con la IA."
        },
        {
            icon: FaShieldAlt,
            title: "Seguridad Primero",
            desc: "Cero exposición de claves API permanentes en el cliente. Autenticación mediante tokens temporales."
        },
        {
            icon: FaHeadset,
            title: "Optimizado para Call Centers",
            desc: "Diseñado específicamente para mejorar las interacciones entre agentes y clientes en tiempo real."
        },
        {
            icon: FaUserCheck,
            title: "Inteligencia de Hablantes",
            desc: "Separación e identificación automática de interlocutores (Diarización) para mayor claridad."
        },
        {
            icon: FaDocker,
            title: "Listo para Producción",
            desc: "Soporte para Docker, monitoreo de salud y arquitectura escalable para altas demandas."
        },
        {
            icon: FaMicrophoneAlt,
            title: "Transcripción en Tiempo Real",
            desc: "Precisión de nivel empresarial impulsada por Soniox AI, capturando cada palabra al instante."
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-[#00f0ff] selection:text-black pb-20">

            {/* Header / Nav */}
            <nav className="p-8 flex justify-between items-center">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-3 text-lg font-bold hover:text-[#00f0ff] transition-colors reveal-element"
                >
                    <FaArrowLeft /> VOLVER
                </button>
                <div className="text-2xl font-black tracking-tighter reveal-element text-[#00f0ff]">KIROKU</div>
            </nav>

            {/* Hero Section */}
            <header className="container mx-auto px-6 mt-12 mb-24">
                <div className="max-w-4xl">
                    <div className="flex gap-4 mb-6 reveal-element">
                        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm font-bold tracking-wider border border-cyan-500/20">PRODUCTION READY</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 reveal-element">
                        Glu
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#00f0ff] mb-6 reveal-element">
                        Transcripción en Tiempo Real para Call Centers
                    </h2>
                    <p className="text-xl md:text-2xl opacity-70 leading-relaxed reveal-element max-w-2xl">
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
            <section className="container mx-auto px-6 mb-32 reveal-element">
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
            <section className="container mx-auto px-6 mb-32 reveal-element">
                <div className="bg-[#111] p-12 rounded-3xl border border-white/5">
                    <h3 className="text-3xl font-bold mb-6 text-[#00f0ff]">¿POR QUÉ GLU?</h3>
                    <p className="text-2xl leading-relaxed opacity-90">
                        Los sistemas tradicionales de transcripción sufren de latencia y problemas de privacidad.
                        <strong>Glu</strong> elimina los intermediarios con su <strong>Arquitectura Direct Stream</strong>, logrando una latencia menor a 50ms
                        mientras mantiene las claves API seguras en el servidor. Es la solución definitiva para interacciones de voz críticas.
                    </p>
                </div>
            </section>

            {/* Key Features Grid */}
            <section className="container mx-auto px-6 mb-32">
                <h2 className="text-4xl font-bold mb-16 border-b border-white/10 pb-8 reveal-element">CARACTERÍSTICAS CLAVE</h2>
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
    );
};

export default GluPage;
