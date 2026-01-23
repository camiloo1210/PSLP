import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../../utils/helpers';
import { SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTailwindcss, SiNodedotjs, SiExpress, SiNestjs, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiKubernetes, SiGithubactions, SiSupabase, SiTensorflow, SiPytorch, SiOpenai } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const TechStack = () => {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('.tech-category');

            // Horizontal scroll logic
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + scrollContainerRef.current.offsetWidth
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const categories = [
        {
            title: "Frontend",
            desc: "Interfaces dinámicas y responsivas",
            icons: [
                { icon: <SiReact />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiVuedotjs />, name: "Vue.js" },
                { icon: <SiAngular />, name: "Angular" },
                { icon: <SiTailwindcss />, name: "Tailwind" }
            ],
            color: "text-blue-500 bg-blue-50"
        },
        {
            title: "Backend",
            desc: "Arquitecturas robustas y escalables",
            icons: [
                { icon: <SiNodedotjs />, name: "Node.js" },
                { icon: <SiExpress />, name: "Express" },
                { icon: <SiNestjs />, name: "NestJS" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <SiRedis />, name: "Redis" }
            ],
            color: "text-green-600 bg-green-50"
        },
        {
            title: "Cloud & DevOps",
            desc: "Infraestructura segura y automatizada",
            icons: [
                { icon: <FaAws />, name: "AWS" },
                { icon: <SiDocker />, name: "Docker" },
                { icon: <SiKubernetes />, name: "K8s" },
                { icon: <SiGithubactions />, name: "Actions" },
                { icon: <SiSupabase />, name: "Supabase" }
            ],
            color: "text-orange-500 bg-orange-50"
        },
        {
            title: "AI & ML",
            desc: "Inteligencia artificial de vanguardia",
            icons: [
                { icon: <SiTensorflow />, name: "TensorFlow" },
                { icon: <SiPytorch />, name: "PyTorch" },
                { icon: <SiOpenai />, name: "OpenAI" }
            ],
            color: "text-purple-600 bg-purple-50"
        }
    ];

    return (
        <section id="tech" ref={sectionRef} className="h-screen bg-pastel-cream overflow-hidden flex flex-col justify-center">
            <div className="container mx-auto px-6 mb-10 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Nuestra Tecnología</h2>
                <p className="text-gray-600 mt-2">Desliza para explorar nuestro stack</p>
            </div>

            <div ref={scrollContainerRef} className="flex px-10 gap-20 w-[400vw]">
                {categories.map((cat, idx) => (
                    <div key={idx} className={cn("tech-category w-screen md:w-[80vw] lg:w-[60vw] h-[60vh] flex-shrink-0 rounded-[3rem] p-12 flex flex-col justify-center items-center shadow-lg border border-white/50", cat.color)}>
                        <h3 className="text-5xl font-bold mb-4">{cat.title}</h3>
                        <p className="text-2xl mb-12 opacity-80">{cat.desc}</p>

                        <div className="flex flex-wrap justify-center gap-12">
                            {cat.icons.map((tech, tIdx) => (
                                <div key={tIdx} className="flex flex-col items-center gap-4 group">
                                    <div className="text-7xl group-hover:scale-125 transition-transform duration-300 filter drop-shadow-sm">
                                        {tech.icon}
                                    </div>
                                    <span className="font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default TechStack;
