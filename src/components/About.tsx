 
import { Code, Smartphone, Cloud } from 'lucide-react';
import aboutImage from '../assets/images/about/nosotros.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SOBRE KRONEX</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>


        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Gym interior" 
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-10 -right-10 bg-gold text-black p-6 rounded-lg hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm uppercase font-medium">Años de experiencia</p>
              </div>
            </div>
          </div>


          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Una empresa tecnológica diferente</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              En Kronex, nos especializamos en brindar soluciones tecnológicas integrales que transforman 
              la manera en que las empresas operan. Desde desarrollo web y aplicaciones móviles hasta 
              consultoría en transformación digital, ofrecemos servicios de vanguardia respaldados por 
              un equipo de expertos comprometidos con la excelencia.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <Code className="text-gold mb-3 h-8 w-8" />
                <h4 className="text-white font-bold text-xl mb-2">Misión</h4>
                <p className="text-gray-400 text-sm">Impulsar el crecimiento empresarial a través de soluciones tecnológicas innovadoras, eficientes y personalizadas.</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <Smartphone className="text-gold mb-3 h-8 w-8" />
                <h4 className="text-white font-bold text-xl mb-2">Visión</h4>
                <p className="text-gray-400 text-sm">Ser la empresa líder en soluciones tecnológicas, reconocida por nuestra innovación y compromiso con el éxito de nuestros clientes.</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <Cloud className="text-gold mb-3 h-8 w-8" />
                <h4 className="text-white font-bold text-xl mb-2">Valores</h4>
                <p className="text-gray-400 text-sm">Innovación, excelencia, transparencia y compromiso absoluto con el éxito y crecimiento de nuestros clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;