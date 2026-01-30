import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '../../utils/helpers';
import { initProjectShowcase } from '../../animations/appleEffects';
import { FaHospital, FaShoppingCart, FaGraduationCap, FaSeedling } from 'react-icons/fa';

const Projects = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            initProjectShowcase(containerRef.current, '.project-card');
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: "HealthConnect",
            icon: <FaHospital />,
            category: "Healthcare",
            stats: "10,000+ usuarios",
            desc: "Plataforma integral de gestión hospitalaria y telemedicina.",
            tags: ["React", "Node.js", "PostgreSQL", "AWS"],
            color: "from-blue-400 to-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "EcoMart",
            icon: <FaShoppingCart />,
            category: "E-commerce",
            stats: "500+ comerciantes",
            desc: "Marketplace sostenible para negocios locales con pagos integrados.",
            tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
            color: "from-green-400 to-green-600",
            bg: "bg-green-50"
        },
        {
            title: "EduPlatform",
            icon: <FaGraduationCap />,
            category: "EdTech",
            stats: "25,000+ estudiantes",
            desc: "Sistema de gestión de aprendizaje potenciado por IA personalizable.",
            tags: ["Vue.js", "Python", "TensorFlow"],
            color: "from-purple-400 to-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "AgroTech",
            icon: <FaSeedling />,
            category: "AgriTech",
            stats: "2,000+ agricultores",
            desc: "Gestión de cultivos basada en IoT y análisis predictivo.",
            tags: ["React Native", "Firebase", "IoT"],
            color: "from-yellow-400 to-yellow-600",
            bg: "bg-yellow-50"
        }
    ];

    return (
        // Height is determined by content, but we want enough scroll space for effects
        <section id="projects" ref={sectionRef} className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-kiroku-primary font-bold tracking-wider uppercase mb-2 block">Portafolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-kiroku-contrast">Proyectos Destacados</h2>
                </div>

                <div ref={containerRef} className="space-y-32">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "project-card flex flex-col lg:flex-row items-center gap-12 p-8 rounded-[3rem]",
                                project.bg
                            )}
                        >
                            {/* Project Image Placeholder */}
                            <div className={cn(
                                "w-full lg:w-1/2 aspect-video rounded-3xl shadow-2xl overflow-hidden relative group",
                                "bg-gradient-to-br", project.color
                            )}>
                                <div className="absolute inset-0 flex items-center justify-center text-white text-9xl opacity-20 group-hover:scale-110 transition-transform duration-700">
                                    {project.icon}
                                </div>
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className={cn("p-3 rounded-xl text-white bg-gradient-to-r", project.color)}>
                                        {project.icon}
                                    </span>
                                    <span className="text-kiroku-contrast/50 font-semibold uppercase tracking-wide text-sm">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-4xl font-bold text-kiroku-contrast">{project.title}</h3>

                                <p className="text-xl text-kiroku-contrast/70 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex items-center gap-2 text-kiroku-contrast/60 font-medium bg-white/50 inline-block px-4 py-2 rounded-lg">
                                    👥 {project.stats}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-kiroku-contrast/70 shadow-sm border border-kiroku-background">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
