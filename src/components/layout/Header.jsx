import { useState, useEffect } from 'react';
import { cn } from '../../utils/helpers';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Servicios', href: '#services' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Tecnología', href: '#tech' },
        { name: 'Equipo', href: '#team' },
        { name: 'Contacto', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            // Adjust for header height
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                isScrolled ? 'bg-pastel-cream/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="text-2xl font-bold text-gray-800 flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    Platanito Solutions <span className="text-3xl">🍌</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-gray-600 hover:text-pastel-coral font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pastel-coral transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-gray-800 z-50 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={cn(
                    "fixed inset-0 bg-pastel-cream flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-2xl font-bold text-gray-700 hover:text-pastel-coral transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
