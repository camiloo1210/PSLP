import React, { useEffect, useRef } from 'react';
import { FaArrowLeft, FaExternalLinkAlt, FaCashRegister, FaBoxOpen, FaFileInvoiceDollar, FaShieldAlt, FaChartLine, FaCalculator } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FiadoPage = () => {
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

    const modules = [
        {
            icon: FaFileInvoiceDollar,
            title: "Facturación Electrónica SRI",
            desc: "Emite facturas autorizadas en segundos y automatiza tus declaraciones de impuestos (Formularios 103 y 104) sin esfuerzo manual. Cumplimiento tributario garantizado y \"Zero-Click\"."
        },
        {
            icon: FaBoxOpen,
            title: "Inventario Multi-Bodega Inteligente",
            desc: "Control total del stock en todas tus sucursales y bodegas en tiempo real. Gestiona transferencias, ajustes y auditorías desde una sola plataforma centralizada, eliminando las pérdidas y el desorden."
        },
        {
            icon: FaCashRegister,
            title: "Punto de Venta (POS) Omnicanal",
            desc: "Vende desde cualquier lugar y dispositivo con nuestro POS de última generación. Sincronización instantánea, funcionamiento offline y compatibilidad nativa con impresoras térmicas y lectores de código de barras."
        },
        {
            icon: FaChartLine, // Using ChartLine as a placeholder for Supply Chain
            title: "Cadena de Suministro y Compras",
            desc: "Optimiza tu relación con proveedores. Administra órdenes de compra, cuentas por pagar y la recepción de mercadería con trazabilidad completa, asegurando que nunca te quedes sin stock crítico."
        },
        {
            icon: FaCalculator, // Using Calculator for Finance
            title: "Finanzas y \"Time Travel\" de Caja",
            desc: "Visualiza la salud financiera de tu negocio al instante. Reportes automáticos, gestión de cuentas por cobrar y proyecciones de flujo de caja basadas en datos reales para tomar decisiones estratégicas."
        },
        {
            icon: FaShieldAlt, // Using Shield as placeholder for HR
            title: "Recursos Humanos y Nómina",
            desc: "Gestiona tu capital humano de forma integral. Administración de roles y permisos granulares, control de asistencia, comisiones de venta y liquidaciones integradas al ecosistema de tu empresa."
        },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-[#1a0f1f] text-[#fce4d6] font-sans selection:bg-[#F970A2] selection:text-white pb-20">

            {/* Header / Nav */}
            <nav className="p-4 md:p-8 flex justify-between items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-3 text-lg font-bold hover:text-[#F970A2] transition-colors reveal-element"
                >
                    <FaArrowLeft /> VOLVER
                </button>
                <div className="text-2xl font-black tracking-tighter reveal-element">KIROKU</div>
            </nav>

            {/* Hero Section */}
            <header className="container mx-auto px-6 mt-8 mb-16 md:mt-12 md:mb-24">
                <div className="max-w-4xl">
                    <div className="flex gap-4 mb-6 reveal-element">
                        <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-bold tracking-wider border border-green-500/20">DESARROLLO ACTIVO</span>
                    </div>
                    <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 reveal-element">
                        Fiado
                    </h1>
                    <h2 className="text-xl md:text-4xl font-bold text-[#F970A2] mb-6 reveal-element">
                        ERP Empresarial & POS Offline-First
                    </h2>
                    <p className="text-lg md:text-2xl opacity-70 leading-relaxed reveal-element max-w-2xl">
                        Empoderando negocios en regiones en desarrollo con herramientas de nivel empresarial.
                        Una plataforma híbrida que combina la velocidad del software local con el poder de la nube.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-6 reveal-element">
                        <a
                            href="https://fiado.kirokusolutions.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-[#F970A2] text-[#1a0f1f] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105"
                        >
                            VISITAR SITIO WEB <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </header>

            {/* Video Preview */}
            <section className="container mx-auto px-6 mb-20 md:mb-32 reveal-element">
                <div className="w-full aspect-video bg-black rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl">
                    <video
                        src="/fiado-demo.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    >
                        <source src="/fiado-demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* The Mission */}
            <section className="container mx-auto px-6 mb-20 md:mb-32 reveal-element">
                <div className="bg-white/5 p-12 rounded-3xl border border-white/5">
                    <h3 className="text-3xl font-bold mb-6 text-[#F970A2]">LA MISIÓN</h3>
                    <p className="text-2xl leading-relaxed opacity-90">
                        Las pequeñas y medianas empresas (PYMES) a menudo luchan con herramientas fragmentadas e internet inestable. Fiado resuelve esto con una plataforma unificada: un POS Local-First que funciona al instante sin internet y un ERP en la Nube para una gestión centralizada. Una única fuente de la verdad para todas las operaciones de tu negocio.
                    </p>
                </div>
            </section>

            {/* Key Modules Grid */}
            <section className="container mx-auto px-6 mb-20 md:mb-32">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 border-b border-white/10 pb-8 reveal-element">MÓDULOS CLAVE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((mod, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-2xl border border-white/5 hover:border-[#F970A2]/50 hover:bg-white/10 transition-all reveal-element group">
                            <mod.icon className="text-5xl text-[#F970A2] mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold mb-4">{mod.title}</h3>
                            <p className="opacity-70 leading-relaxed text-lg">{mod.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default FiadoPage;
