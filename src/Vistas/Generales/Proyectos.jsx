import React from 'react';
import ProjectGallery from '../projectcard'; // Asegúrate de importar tu componente correctamente

function Tarjetas() {
  const projects = [
    {
      imgSrc: "https://via.placeholder.com/400x200",
      title: "Proyecto 1",
      description: "Este es un proyecto desarrollado con React y TailwindCSS.",
      repoLink: "https://github.com/tu-usuario/proyecto1",
      demoLink: "https://demo.com/proyecto1"
    },
    {
      imgSrc: "https://via.placeholder.com/400x200",
      title: "Proyecto 2",
      description: "Otro proyecto increíble utilizando Node.js y Express.",
      repoLink: "https://github.com/tu-usuario/proyecto2",
      demoLink: "https://demo.com/proyecto2"
    },
    {
      imgSrc: "https://via.placeholder.com/400x200",
      title: "Proyecto 3",
      description: "Un proyecto avanzado que utiliza Python y Flask.",
      repoLink: "https://github.com/tu-usuario/proyecto3",
      demoLink: "https://demo.com/proyecto3"
    },
    {
      imgSrc: "https://via.placeholder.com/400x200",
      title: "Proyecto 4",
      description: "Aplicación móvil construida con React Native.",
      repoLink: "https://github.com/tu-usuario/proyecto4",
      demoLink: "https://demo.com/proyecto4"
    },
    {
      imgSrc: "https://via.placeholder.com/400x200",
      title: "Proyecto 5",
      description: "Proyecto utilizando Machine Learning con Python.",
      repoLink: "https://github.com/tu-usuario/proyecto5",
      demoLink: "https://demo.com/proyecto5"
    },
    {
      imgSrc: "https://via.placeholder.com/400x200",
      title: "Proyecto 6",
      description: "Desarrollo web avanzado con Next.js y TailwindCSS.",
      repoLink: "https://github.com/tu-usuario/proyecto6",
      demoLink: "https://demo.com/proyecto6"
    }
  ];

  return <ProjectGallery projects={projects} />;
}

export default Tarjetas;
