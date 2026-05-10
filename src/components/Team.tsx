import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Carlos Mendoza',
      role: 'CTO & Fundador',
      specialty: 'Arquitectura de Software',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      social: {
        github: '#',
        linkedin: '#',
        email: 'carlos@kronex.com',
      },
      bio: 'Más de 15 años desarrollando soluciones tecnológicas escalables para empresas Fortune 500.',
    },
    {
      name: 'Laura Sánchez',
      role: 'Lead Developer',
      specialty: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
      social: {
        github: '#',
        linkedin: '#',
        email: 'laura@kronex.com',
      },
      bio: 'Especialista en React, Node.js y arquitecturas cloud. Apasionada por crear experiencias de usuario excepcionales.',
    },
    {
      name: 'Miguel Torres',
      role: 'DevOps Engineer',
      specialty: 'Cloud & Infrastructure',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800',
      social: {
        github: '#',
        linkedin: '#',
        email: 'miguel@kronex.com',
      },
      bio: 'Experto en AWS, Docker y Kubernetes. Garantiza que nuestras soluciones sean seguras y escalables.',
    },
    {
      name: 'Ana Martínez',
      role: 'UX/UI Designer',
      specialty: 'Diseño de Experiencia',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
      social: {
        github: '#',
        linkedin: '#',
        email: 'ana@kronex.com',
      },
      bio: 'Diseñadora con enfoque en usabilidad y accesibilidad. Crea interfaces que los usuarios aman usar.',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon-black mb-4">NUESTRO EQUIPO</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto mb-6"></div>
          <p className="text-titanium-gray max-w-3xl mx-auto">
            Conoce a los expertos que hacen posible la transformación digital de tu empresa. 
            Un equipo multidisciplinario comprometido con la excelencia y la innovación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-pure-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-carbon-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-pure-white text-sm mb-4 px-4">{member.bio}</p>
                    <div className="flex space-x-4 justify-center">
                      <a href={member.social.github} className="w-10 h-10 bg-pure-white rounded-full flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors duration-300">
                        <Github className="h-5 w-5 text-carbon-black" />
                      </a>
                      <a href={member.social.linkedin} className="w-10 h-10 bg-pure-white rounded-full flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors duration-300">
                        <Linkedin className="h-5 w-5 text-carbon-black" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-pure-white rounded-full flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors duration-300">
                        <Mail className="h-5 w-5 text-carbon-black" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-carbon-black mb-1">{member.name}</h3>
                <p className="text-electric-blue font-medium mb-1">{member.role}</p>
                <p className="text-titanium-gray text-sm">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-carbon-black rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-pure-white mb-4">¿Quieres unirte a nuestro equipo?</h3>
            <p className="text-gray-300 mb-6">
              Estamos siempre buscando talento excepcional para seguir creciendo. 
              Si eres apasionado por la tecnología y quieres formar parte de proyectos innovadores, contáctanos.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-electric-blue text-pure-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              Enviar CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;