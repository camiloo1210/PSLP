import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../../utils/helpers';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Team = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.team-card', {
                y: 100,
                opacity: 0,
                rotateY: 90,
                duration: 1.2,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const team = [
        { name: "José Cerezo", role: "Founder", image: "bg-kiroku-primary" },
        { name: "Camilo Brazales", role: "Founder", image: "bg-kiroku-secondary" },
        { name: "Camily Solórzano", role: "Founder", image: "bg-kiroku-accent" },
        { name: "Ariel Anchapaxi", role: "Founder", image: "bg-kiroku-action" }
    ];

    return (
        <section id="team" ref={sectionRef} className="py-24 bg-kiroku-background/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-kiroku-contrast mb-4">Nuestro Equipo</h2>
                <p className="text-center text-kiroku-contrast/70 mb-16 max-w-2xl mx-auto">
                    Mentes creativas apasionadas por construir el futuro digital.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="team-card perspective-1000 group">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                                {/* Avatar Placeholder */}
                                <div className={cn("h-64 w-full flex items-center justify-center text-6xl text-white/50 relative overflow-hidden", member.image)}>
                                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                                    👤
                                </div>

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-kiroku-contrast mb-1">{member.name}</h3>
                                    <p className="text-kiroku-primary font-medium mb-4">{member.role}</p>

                                    <div className="flex justify-center gap-4 text-kiroku-contrast/40">
                                        <a href="#" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
                                        <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
                                        <a href="#" className="hover:text-kiroku-contrast transition-colors"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Team;
