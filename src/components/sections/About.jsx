import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../../utils/helpers';
import { FaRocket, FaMapMarkerAlt, FaCogs } from 'react-icons/fa';

const About = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin animation for the section
            // Prompt: Section pins while text fades in

            // Text Fade In
            gsap.from(contentRef.current.children, {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse"
                }
            });

            // Stats Counter
            statsRef.current.forEach(el => {
                if (!el) return;
                const target = parseInt(el.getAttribute('data-target'), 10);
                gsap.fromTo(el,
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 2,
                        snap: { innerText: 1 },
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { icon: <FaRocket />, value: 100, suffix: '%', label: "Enfoque en Innovación" },
        { icon: <FaMapMarkerAlt />, value: 3, suffix: '', label: "Sedes en Ecuador" }, // Example number
        { icon: <FaCogs />, value: 50, suffix: '+', label: "Proyectos a Medida" }
    ];

    const addToRefs = (el) => {
        if (el && !statsRef.current.includes(el)) {
            statsRef.current.push(el);
        }
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center bg-white py-20 relative overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-pastel-cream/30 -skew-x-12 transform translate-x-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div ref={contentRef} className="max-w-4xl mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-pastel-lavender/30 text-purple-600 text-sm font-bold mb-4 tracking-wider uppercase">
                        ¿Quiénes Somos?
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                        Innovación tecnológica con <br />
                        <span className="text-pastel-coral relative inline-block">
                            sabor ecuatoriano 🇪🇨
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-pastel-yellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 mb-16 leading-relaxed">
                        Somos Platanito Solutions, una empresa de desarrollo de software nacida en el corazón de Ecuador.
                        Nos dedicamos a transformar negocios a través de soluciones digitales personalizadas,
                        combinando creatividad, tecnología de punta y un profundo entendimiento de las necesidades locales y globales.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-50 hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-4xl text-pastel-coral mb-4 flex justify-center">{stat.icon}</div>
                                <div className="text-4xl font-bold text-gray-800 mb-2 flex justify-center items-baseline">
                                    <span ref={addToRefs} data-target={stat.value}>0</span>
                                    <span>{stat.suffix}</span>
                                </div>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
