import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNetlifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Crear FormData para Netlify
    const formDataNetlify = new FormData();
    formDataNetlify.append('form-name', 'contact');
    formDataNetlify.append('name', formData.name);
    formDataNetlify.append('email', formData.email);
    formDataNetlify.append('subject', formData.subject);
    formDataNetlify.append('message', formData.message);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataNetlify as any).toString()
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">CONTACTO</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas. Ponte en contacto con nosotros y un miembro de nuestro equipo te atenderá lo antes posible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-gray-100 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h3>
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                    <p className="text-gray-600">Av. Principal 123, Ciudad Elite, CP 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+34 612 345 678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@elitegym.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horario</h4>
                    <p className="text-gray-600">Lunes - Viernes: 6:00 - 23:00</p>
                    <p className="text-gray-600">Sábado - Domingo: 8:00 - 20:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold text-gray-900 mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-gold hover:text-black transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-gold hover:text-black transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-gold hover:text-black transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            {/* Formulario Netlify */}
            <form 
              onSubmit={handleNetlifySubmit} 
              className="bg-white rounded-lg shadow-lg p-8"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              {/* Campos ocultos para Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`w-full py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                  status === 'sending' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gold hover:text-black'
                }`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">¡Mensaje enviado con éxito!</p>
                      <p className="text-sm">Te responderemos pronto a tu email.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Error al enviar el mensaje</p>
                      <p className="text-sm">Por favor, inténtalo de nuevo o contáctanos directamente.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="mt-16 rounded-lg overflow-hidden h-96 shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2ses!4v1667736123456!5m2!1sen!2ses" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;