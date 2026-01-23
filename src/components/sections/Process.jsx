import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../../utils/helpers';
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';

const Process = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const steps = gsap.utils.toArray('.process-step');

            steps.forEach((step, i) => {
                gsap.from(step, {
                    opacity: 0,
                    x: i % 2 === 0 ? -50 : 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1
                    }
                });
            });

            // Line filling animation
            gsap.from('.timeline-line', {
                height: 0,
                scrollTrigger: {
                    trigger: '.timeline-container',
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: true
                }
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        { icon: <FaSearch />, title: "Descubrimiento", desc: "Entendemos tus necesidades y objetivos a profundidad.", color: "bg-pastel-peach" },
        { icon: <FaPencilRuler />, title: "Diseño", desc: "Creamos el blueprint y la experiencia de usuario ideal.", color: "bg-pastel-lavender" },
        { icon: <FaCode />, title: "Desarrollo", desc: "Construimos tu solución con código limpio y escalable.", color: "bg-pastel-blue" },
        { icon: <FaRocket />, title: "Entrega", desc: "Lanzamiento exitoso y soporte continuo.", color: "bg-pastel-mint" }
    ];

    return (
        <section id="process" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-20">Nuestro Proceso</h2>

                <div className="timeline-container relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-100 rounded-full"></div>
                    <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pastel-coral to-pastel-blue rounded-full origin-top"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className={cn(
                            "process-step relative flex items-center mb-24 last:mb-0",
                            idx % 2 === 0 ? "justify-start" : "justify-end"
                        )}>
                            {/* Content Card */}
                            <div className={cn(
                                "w-full md:w-[45%] p-8 bg-white rounded-3xl shadow-xl border border-gray-50 hover:shadow-2xl transition-shadow backdrop-blur-sm bg-opacity-90 relative z-10",
                                idx % 2 === 0 ? "mr-auto text-right md:text-right" : "ml-auto text-left"
                            )}>
                                <div className={cn(
                                    "inline-flex p-4 rounded-2xl text-2xl text-gray-700 mb-4 shadow-sm",
                                    step.color,
                                    idx % 2 === 0 ? "float-right ml-4" : "float-left mr-4"
                                )}>
                                    {step.icon}
                                </div>
                                <div className="clear-both">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-pastel-coral rounded-full z-20 shadow-md"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Process;
