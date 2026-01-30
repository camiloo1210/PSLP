import { useRef, useEffect } from 'react';
import { initHeroAnimations } from '../../animations/heroAnimations';
import { cn } from '../../utils/helpers';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const shapesRef = useRef(null);

    useEffect(() => {
        // const ctx = initHeroAnimations({ heroRef, titleRef, subRef, ctaRef, shapesRef });
        // return () => ctx && ctx.revert(); // Cleanup GSAP matchMedia/context if used, or just let strict mode handle it
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kiroku-background via-white to-kiroku-secondary/20 bg-[length:400%_400%] animate-gradient-xy"
        >
            {/* Floating Shapes Background */}
            <div ref={shapesRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-kiroku-primary rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-kiroku-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[20%] left-[20%] w-80 h-80 bg-kiroku-accent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
                <div className="absolute bottom-[10%] right-[20%] w-60 h-60 bg-kiroku-action rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-bold text-kiroku-contrast mb-6 leading-tight tracking-tight"
                >
                    Soluciones Innovadoras <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-kiroku-primary to-kiroku-accent">
                        para un Mañana Mejor
                    </span>
                </h1>

                <p
                    ref={subRef}
                    className="text-xl md:text-2xl text-kiroku-contrast/80 mb-10 max-w-2xl mx-auto"
                >
                    Construimos tecnología que transforma ideas en realidad. Especialistas en desarrollo a medida desde Ecuador para el mundo.
                </p>

                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-kiroku-action text-white rounded-full font-bold text-lg hover:bg-kiroku-action/90 transition-all hover:scale-105 shadow-xl flex items-center gap-2 group"
                    >
                        Conversemos sobre tu proyecto
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-kiroku-contrast/10 text-kiroku-contrast rounded-full font-bold text-lg hover:bg-white transition-all hover:scale-105 shadow-lg"
                    >
                        Ver nuestros proyectos
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll-pill"></div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
