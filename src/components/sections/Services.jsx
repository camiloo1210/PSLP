import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../../utils/helpers';
import { appleZoomEffect } from '../../animations/appleEffects';
import { FaCode, FaMobileAlt, FaPalette, FaBrain } from 'react-icons/fa';

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            appleZoomEffect('.service-card');
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const services = [
        {
            icon: <FaCode />,
            title: "Desarrollo de Software",
            description: "Soluciones personalizadas para tus necesidades únicas. Desde CRMs hasta plataformas complejas.",
            color: "bg-kiroku-primary/30 text-kiroku-primary"
        },
        {
            icon: <FaMobileAlt />,
            title: "Apps Móviles y Web",
            description: "Experiencias multiplataforma de excelencia con React Native y tecnologías modernas.",
            color: "bg-kiroku-secondary/30 text-kiroku-secondary"
        },
        {
            icon: <FaPalette />,
            title: "Diseño UI/UX",
            description: "Interfaces hermosas e intuitivas que encantan a los usuarios desde el primer clic.",
            color: "bg-kiroku-accent/30 text-kiroku-accent"
        },
        {
            icon: <FaBrain />,
            title: "Integración de IA",
            description: "Potencia tu negocio con soluciones inteligentes utilizando lo último en inteligencia artificial.",
            color: "bg-kiroku-action/30 text-kiroku-action"
        }
    ];

    return (
        <section id="services" ref={sectionRef} className="py-24 bg-kiroku-background/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-kiroku-contrast mb-4">Nuestros Servicios</h2>
                    <p className="text-xl text-kiroku-contrast/80 max-w-2xl mx-auto">
                        Convertimos desafíos complejos en soluciones digitales elegantes y eficientes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="service-card bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-kiroku-primary/20 group"
                        >
                            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:rotate-6", service.color)}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-kiroku-contrast mb-4 group-hover:text-kiroku-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-kiroku-contrast/70 leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;
