// src/Vistas/ContactView.jsx
import React from 'react';

function SobreMi() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen" id='sobre-mi'>
    {/* Contenedor principal */}
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      {/* Foto y nombre */}
      <div className="flex items-center space-x-6">
        <img
          src="src/assets/CV.jpeg"
          alt="Foto de Sergio"
          className="w-40 h-40 object-cover rounded-full shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Sergio Antonio Gonzalez Lopez</h1>
          <p className="text-lg text-gray-600 mt-2">Desarrollador Fullstack</p>
        </div>
      </div>

      {/* Descripción */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Sobre Mí</h2>
        <p className="mt-4 text-gray-600">
          Soy un desarrollador fullstack apasionado por la tecnología y la innovación. Tengo experiencia en el desarrollo de aplicaciones web utilizando tecnologías como React, Node.js, y PHP. Mi objetivo es crear soluciones eficientes y escalables que impacten positivamente en las organizaciones.
        </p>
      </section>

      {/* Experiencia */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Experiencia</h2>
        <ul className="mt-4 space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Desarrollador Fullstack - Empresa X</h3>
            <p className="text-gray-600">Enero 2022 - Presente</p>
            <p className="mt-2 text-gray-500">
              Desarrollo de aplicaciones web utilizando React, Node.js, y PHP, gestionando bases de datos SQL y MongoDB.
            </p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Ingeniero de Software - Empresa Y</h3>
            <p className="text-gray-600">Julio 2019 - Diciembre 2021</p>
            <p className="mt-2 text-gray-500">
              Trabajé en el diseño e implementación de soluciones escalables utilizando tecnologías como Docker, Kubernetes y AWS.
            </p>
          </li>
        </ul>
      </section>

      {/* Educación */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Educación</h2>
        <ul className="mt-4 space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Licenciatura en Ingeniería en Sistemas - Universidad Z</h3>
            <p className="text-gray-600">2015 - 2019</p>
          </li>
        </ul>
      </section>

      {/* Habilidades */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Habilidades</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">React, Node.js, PHP</li>
          <li className="text-gray-600">Bases de datos SQL, MongoDB</li>
          <li className="text-gray-600">Docker, Kubernetes, CI/CD</li>
          <li className="text-gray-600">Google Cloud, AWS</li>
        </ul>
      </section>

      {/* Contacto */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li><strong>Email:</strong> sergio@correo.com</li>
          <li><strong>Teléfono:</strong> +123 456 789</li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sergio" className="text-blue-500 hover:underline">linkedin.com/in/sergio</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/sergio" className="text-blue-500 hover:underline">github.com/sergio</a></li>
        </ul>
      </section>
    </div>
  </div>
  );
}

export default SobreMi;
