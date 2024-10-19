import React from 'react';
import Draggable from 'react-draggable';

function ProjectCard({ imgSrc, title, description, repoLink, demoLink }) {
  return (
    <Draggable>
      <div className="relative my-10 p-6 max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto flex flex-col items-center justify-center text-center bg-gray-800 bg-opacity-70 backdrop-blur-lg backdrop-opacity-30"> {/* Cambiar a un fondo más oscuro */}
        {/* Glass effect on the card */}
        <img className="w-full mb-4 rounded-md" src={imgSrc} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{title}</div>
          <p className="text-gray-300 text-base">{description}</p> {/* Cambiar el color del texto a más claro */}
        </div>
        <div className="px-6 pt-4 pb-2">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-3 py-1 rounded-lg mr-2 hover:bg-gray-800"
          >
            Código Fuente
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
          >
            Demo
          </a>
        </div>
      </div>
    </Draggable>
  );
}

function ProjectGallery({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          repoLink={project.repoLink}
          demoLink={project.demoLink}
        />
      ))}
    </div>
  );
}

export default ProjectGallery;
