import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import ContactView from './Contact.jsx';  // Vista de contacto
import Tarjetas from '../Generales/Proyectos.jsx';
import SobreMi from '../Generales/SobreMi.jsx';
import Edit from '../Efectos/edittext.jsx';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <Router>
       <Menu /> 
      <div>
    
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={
            <>
              <VistaInicio />
              <Edit />  {/* Edición de texto con margen */}
            </>
          } />
          
          {/* Ruta para la vista de contacto */}
          <Route path="/contacto" element={<ContactView />} />
          
          {/* Ruta para la vista "Sobre mí" */}
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Proyectos" element={<Tarjetas />} />
        </Routes>
      </div>
      <Footer /> {/* Pie de página */}
    </Router>
  );
}

//Vista Inicio
function VistaInicio() {
  const fullText = 'Soy Sergio'; // Texto completo
  const [displayedText, setDisplayedText] = useState('');

  // Efecto de digitación infinito
  useEffect(() => {
    let index = 0;
    let isTyping = true;

    // Función para reiniciar la animación
    const resetTyping = () => {
      setDisplayedText(''); // Limpiar el texto
      index = 0;
      isTyping = true;
    };

    const interval = setInterval(() => {
      if (isTyping) {
        setDisplayedText(fullText.slice(0, index + 1));
        index += 1;
        if (index === fullText.length) {
          isTyping = false; // Cambiar a false cuando termine de escribir
          setTimeout(resetTyping, 1000); // Espera 1 segundo antes de reiniciar
        }
      }
    }, 100); // Velocidad de la escritura

    return () => clearInterval(interval);
  }, [fullText]);

  // Efecto de partículas
  const createParticle = (x, y) => {
    const particle = document.createElement('div');
    particle.classList.add('particle'); // Estilo para las partículas

    // Tamaño aleatorio
    const size = Math.random() * 1 + 5; // Tamaño entre 5px y 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Posicionamiento en la pantalla
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Añadir al body
    document.body.appendChild(particle);

    // Eliminar la partícula después de la animación
    setTimeout(() => {
      particle.remove();
    }, 2000); // Duración de la animación
  };

  // Captura el movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const numberOfParticles = 10; // Número de partículas por movimiento
      for (let i = 0; i < numberOfParticles; i++) {
        createParticle(e.clientX + Math.random() * 20 - 10, e.clientY + Math.random() * 20 - 10); // Crear partículas en la posición del mouse
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove); // Limpiar el evento al desmontar
    };
  }, []);

  return (
    <section className="relative h-screen bg-gray-100 flex flex-col justify-center items-center overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://almacenamientovite.s3.us-east-2.amazonaws.com/6330779-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 text-center">
        {/* Texto digitado */}
        <h1 className="text-white text-6xl font-bold typing-text my-16">
          Hola, {displayedText}
        </h1>

        {/* Subtítulo */}
        <p className="text-xl text-white my-6">
          Desarrollador Fullstack
        </p>

        {/* Botón */}
        <Link to="/SobreMi">
          <button className="mt-8 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            Sobre mí
          </button>
        </Link>
      </div>

      {/* Capa de oscurecimiento */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </section>
  );
}



export default App;
