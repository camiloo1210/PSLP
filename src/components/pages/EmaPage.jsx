import React, { useEffect, useRef } from 'react';
import { FaArrowLeft, FaExternalLinkAlt, FaStethoscope, FaNotesMedical, FaUserMd, FaHospital, FaHeartbeat, FaFileMedical, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EmaPage = () => {
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
            icon: FaUserMd,
            title: "Gestión de Pacientes",
            desc: "Administración integral de historias clínicas, antecedentes y seguimientos. Todo organizado y accesible."
        },
        {
            icon: FaNotesMedical,
            title: "Recetas Digitales",
            desc: "Generación rápida de recetas electrónicas estandarizadas, reduciendo errores y mejorando la legibilidad."
        },
        {
            icon: FaHospital,
            title: "Agenda Inteligente",
            desc: "Sistema de citas optimizado para reducir el ausentismo y gestionar eficientemente los tiempos de consulta."
        },
        {
            icon: FaHeartbeat,
            title: "Monitoreo Continuo",
            desc: "Herramientas para el seguimiento de la evolución del paciente y alertas preventivas."
        },
        {
            icon: FaShieldAlt,
            title: "Seguridad de Datos",
            desc: "Cumplimiento con normativas de privacidad de salud. La información de tus pacientes está siempre protegida."
        },
        {
            icon: FaFileMedical,
            title: "Reportes Clínicos",
            desc: "Estadísticas y reportes automáticos para mejorar la gestión de tu práctica médica."
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0f172a] text-[#e2e8f0] font-sans selection:bg-[#10b981] selection:text-white pb-20">

            {/* Header / Nav */}
            <nav className="p-4 md:p-8 flex justify-between items-center">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-3 text-lg font-bold hover:text-[#10b981] transition-colors reveal-element"
                >
                    <FaArrowLeft /> VOLVER
                </button>
                <div className="text-2xl font-black tracking-tighter reveal-element text-[#10b981]">KIROKU</div>
            </nav>

            {/* Hero Section */}
            <header className="container mx-auto px-6 mt-8 mb-16 md:mt-12 md:mb-24">
                <div className="max-w-4xl">
                    <div className="flex gap-4 mb-6 reveal-element">
                        <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-bold tracking-wider border border-emerald-500/20">HEALTH TECH</span>
                    </div>
                    <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 to-emerald-600 reveal-element">
                        Ema
                    </h1>
                    <h2 className="text-xl md:text-4xl font-bold text-[#10b981] mb-6 reveal-element">
                        Asistente Inteligente para Médicos
                    </h2>
                    <p className="text-lg md:text-2xl opacity-70 leading-relaxed reveal-element max-w-2xl">
                        Una plataforma diseñada por y para médicos. Simplifica la gestión clínica para que puedas concentrarte en lo más importante: tus pacientes.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-6 reveal-element">
                        {/* Placeholder link since URL is not known */}
                        <button
                            disabled
                            className="flex items-center gap-3 bg-[#10b981] text-[#0f172a] px-8 py-4 rounded-full font-bold text-lg opacity-50 cursor-not-allowed"
                        >
                            PRÓXIMAMENTE <FaExternalLinkAlt />
                        </button>
                    </div>
                </div>
            </header>

            {/* Video Placeholder */}
            <section className="container mx-auto px-6 mb-20 md:mb-32 reveal-element">
                <div className="w-full aspect-video bg-[#0f172a] rounded-2xl border border-[#10b981]/20 overflow-hidden relative shadow-[0_0_40px_rgba(16,185,129,0.1)] flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent"></div>
                    <FaStethoscope className="text-9xl text-[#10b981] opacity-20 group-hover:scale-110 transition-transform duration-700" />
                    <h3 className="absolute bottom-10 left-10 text-2xl font-bold opacity-50">DEMO COMING SOON</h3>
                </div>
            </section>

            {/* Mission */}
            <section className="container mx-auto px-6 mb-20 md:mb-32 reveal-element">
                <div className="bg-[#1e293b] p-12 rounded-3xl border border-white/5">
                    <h3 className="text-3xl font-bold mb-6 text-[#10b981]">LA VISIÓN</h3>
                    <p className="text-2xl leading-relaxed opacity-90">
                        La práctica médica moderna exige eficiencia y precisión. Ema digitaliza el consultorio médico, eliminando el papeleo y centralizando la información clínica en una interfaz intuitiva y segura, accesible desde cualquier dispositivo.
                    </p>
                </div>
            </section>

            {/* Key Features Grid */}
            <section className="container mx-auto px-6 mb-20 md:mb-32">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 border-b border-white/10 pb-8 reveal-element">CARACTERÍSTICAS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feat, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-[#1e293b] to-transparent p-10 rounded-2xl border border-white/5 hover:border-[#10b981]/50 hover:bg-emerald-900/10 transition-all reveal-element group">
                            <feat.icon className="text-5xl text-[#10b981] mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                            <h3 className="text-2xl font-bold mb-4 text-white">{feat.title}</h3>
                            <p className="opacity-70 leading-relaxed text-lg">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default EmaPage;
