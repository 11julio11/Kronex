import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="text-gold h-8 w-8 mr-2 font-bold text-2xl">K</div>
              <span className="font-bold text-2xl">KRON<span className="text-gold">EX</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformamos empresas a través de soluciones tecnológicas innovadoras, desarrollo de vanguardia y un equipo de expertos comprometidos con tu éxito digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-gold">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', id: 'home' },
                { name: 'Nosotros', id: 'about' },
                { name: 'Servicios', id: 'services' },
                { name: 'Soluciones', id: 'plans' },
                { name: 'Equipo', id: 'team' },
                { name: 'Blog', id: 'blog' },
                { name: 'Contacto', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-gold">
              Horario
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>Lunes - Viernes:</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sábado:</span>
                <span>10:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Domingo:</span>
                <span>Cerrado</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Festivos:</span>
                <span>Cerrado</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-white font-semibold mb-2">¿Necesitas ayuda?</p>
              <a href="tel:+34612345678" className="text-gold font-bold text-xl hover:text-white transition-colors duration-300">
                +34 612 345 678
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-gold">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Av. Tecnológica 456, Ciudad Digital, CP 54321</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-400">+34 612 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@kronex.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gold text-black py-2 px-6 rounded font-semibold hover:bg-white transition-colors duration-300"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Kronex. Todos los derechos reservados. | Diseñado con 
            <span className="text-red-500 mx-1">♥</span>
            para empresas innovadoras
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;