import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaPaintBrush, FaBolt, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const WhyUs = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.why-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const reasons = [
        { icon: <FaPaintBrush />, title: "Diseño Primero", desc: "No solo funciona, enamora. Priorizamos la estética y usabilidad." },
        { icon: <FaBolt />, title: "Entrega Rápida", desc: "Metodologías ágiles para resultados tangibles en tiempo récord." },
        { icon: <FaShieldAlt />, title: "Seguro y Escalable", desc: "Arquitectura pensada para crecer contigo sin comprometer seguridad." },
        { icon: <FaHandshake />, title: "Soporte 24/7", desc: "Estamos contigo en cada paso, incluso después del lanzamiento." }
    ];

    return (
        <section id="why-us" ref={sectionRef} className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, idx) => (
                        <div key={idx} className="why-card p-8 rounded-3xl bg-pastel-cream/30 hover:bg-pastel-cream transition-colors duration-300 border border-transparent hover:border-pastel-peach/50">
                            <div className="text-4xl text-pastel-coral mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default WhyUs;
