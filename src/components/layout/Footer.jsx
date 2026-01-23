import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { cn } from '../../utils/helpers';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaTwitter />, href: '#' },
        { icon: <FaLinkedin />, href: '#' },
        { icon: <FaInstagram />, href: '#' },
        { icon: <FaGithub />, href: '#' }
    ];

    return (
        <footer className="bg-white pt-20 pb-10 relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 relative z-10">
                {/* Main CTA Section */}
                <div className="bg-gradient-to-r from-pastel-lavender to-pastel-blue p-12 rounded-3xl text-center mb-16 shadow-lg transform hover:scale-[1.01] transition-transform duration-300 footer-cta">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                        ¡Construyamos Algo Increíble Juntos!
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Transformamos tus ideas en soluciones digitales de alto impacto. Agenda una consulta gratuita hoy mismo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-1">
                            Empecemos tu proyecto
                        </button>
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                            Ver Portafolio
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-100 pb-12 footer-content">
                    <div className="col-span-1 md:col-span-1">
                        <div className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                            Platanito Solutions <span className="text-3xl">🍌</span>
                        </div>
                        <p className="text-gray-500 mb-6">
                            Innovación tecnológica con sabor ecuatoriano. Creamos el futuro digital.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pastel-peach hover:text-white transition-all transform hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Empresa</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><a href="#about" className="hover:text-pastel-blue transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#services" className="hover:text-pastel-blue transition-colors">Servicios</a></li>
                            <li><a href="#team" className="hover:text-pastel-blue transition-colors">Equipo</a></li>
                            <li><a href="#" className="hover:text-pastel-blue transition-colors">Carreras</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Legal</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><a href="#" className="hover:text-pastel-blue transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-pastel-blue transition-colors">Términos</a></li>
                            <li><a href="#" className="hover:text-pastel-blue transition-colors">Cookies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Contacto</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>hello@platanitosolutions.com</li>
                            <li>+593 99 123 4567</li>
                            <li>📍 Quito, Ecuador</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-gray-400 text-sm footer-copyright">
                    <p>&copy; {currentYear} Platanito Solutions. Hecho con ❤️ en Ecuador 🇪🇨</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
