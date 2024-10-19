import React from 'react';
import ProjectGallery from '../projectcard'; // Asegúrate de importar tu componente correctamente

function Tarjetas() {
  const projects = [
    {
      imgSrc: "https://almacenamientovite.s3.us-east-2.amazonaws.com/2505057.jpg",
      title: "Blog Interactivo",
      description: " Creación de un blog interactivo utilizando Next.js, permitiendo la generación de contenido dinámico y la implementación de funcionalidades de comentarios en tiempo real.",
      repoLink: "https://github.com/tu-usuario/proyecto1",
      demoLink: "https://demo.com/proyecto1"
    },
    {
      imgSrc: "https://almacenamientovite.s3.us-east-2.amazonaws.com/3086605.jpg",
      title: "Dashboard de Análisis de Datos",
      description: " Desarrollo de un dashboard interactivo para la visualización de datos, utilizando D3.js y TailwindCSS, que permite a los usuarios analizar estadísticas de manera intuitiva.",
      repoLink: "https://github.com/tu-usuario/proyecto2",
      demoLink: "https://demo.com/proyecto2"
    },
    {
      imgSrc: "https://almacenamientovite.s3.us-east-2.amazonaws.com/2465990.jpg",
      title: "Aplicación de Gestión de Tareas",
      description: "Construcción de una aplicación de gestión de tareas con Next.js, enfocada en la usabilidad y la integración de autenticación para usuarios.",
      repoLink: "https://github.com/tu-usuario/proyecto3",
      demoLink: "https://demo.com/proyecto3"
    },
    {
      imgSrc: "https://almacenamientovite.s3.us-east-2.amazonaws.com/10-paginas-web-creativas.jpg",
      title: "E-commerce Responsive",
      description: "Desarrollo de una plataforma de comercio electrónico utilizando React y TailwindCSS, centrada en una experiencia de usuario fluida y optimizada para dispositivos móviles.",
      repoLink: "https://github.com/tu-usuario/proyecto4",
      demoLink: "https://demo.com/proyecto4"
    },
    {
      imgSrc: "https://almacenamientovite.s3.us-east-2.amazonaws.com/03-.png",
      title: "Portafolio Personal",
      description: "Diseño y desarrollo de un portafolio personal utilizando React y TailwindCSS, que exhibe proyectos anteriores y habilidades técnicas de manera atractiva.",
      repoLink: "https://github.com/tu-usuario/proyecto5",
      demoLink: "https://demo.com/proyecto5"
    },
    {
      imgSrc: "https://almacenamientovite.s3.us-east-2.amazonaws.com/planes_responsive.jpg",
      title: "Sistema de Reserva",
      description: "Implementación de un sistema de reservas en línea con Next.js, que permite a los usuarios reservar citas y gestionar su disponibilidad fácilmente.",
      repoLink: "https://github.com/tu-usuario/proyecto6",
      demoLink: "https://demo.com/proyecto6"
    }
  ];

  return <ProjectGallery projects={projects} />;
}

export default Tarjetas;
