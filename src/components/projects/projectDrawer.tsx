import { useEffect, useState } from "react";
import type { Project } from "./project";
import { RiCloseLine } from "@remixicon/react";
import GalleryCarousel from "./galleryCarousel";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  const [visibleProject, setVisibleProject] = useState<Project | null>(null);
  const [isBlocking, setIsBlocking] = useState(false); // 🔒 Bloqueador de interacción

  // Evita el scroll del fondo cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Control del contenido visible con retraso de 300ms
  useEffect(() => {
    if (isOpen && project) {
      setVisibleProject(project);
    } else {
      const timeout = setTimeout(() => setVisibleProject(null), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, project]);

  // Control del overlay bloqueador
  useEffect(() => {
    if (!isOpen) {
      setIsBlocking(true); // activa el bloqueo
      const timeout = setTimeout(() => setIsBlocking(false), 300); // lo desactiva después de 300ms
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <>
      {/* Fondo oscuro con blur */}
      <div
        className={`fixed inset-0 bg-slate-200/40 backdrop-blur-sm transition-all duration-500 z-40 dark:bg-slate-950/40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      ></div>

      {/* Drawer lateral derecho */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-fit bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-all duration-400 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="w-full h-full flex flex-col items-center overflow-y-auto">
          {/* Header */}
          <div className="h-fit w-11/12 fixed top-4 px-6 py-3 flex justify-between items-center rounded-full border border-slate-300 bg-slate-100/20 dark:border-slate-700 dark:bg-slate-950/20 backdrop-blur-md z-30">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              {`${visibleProject?.titulo} - ${visibleProject?.tipo}` || "Cargando..."}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
            >
              <RiCloseLine size={28} />
            </button>
          </div>

          <div className="w-full h-fit flex mt-18">
            <div className="w-fit h-full">
              <div className="overflow-y-auto sticky top-19  w-sm flex justify-center items-center p-6 space-y-4">
                {visibleProject?.galeria && visibleProject.galeria.length > 0 ? (
                  <GalleryCarousel galeria={visibleProject.galeria} />
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Este proyecto no tiene galería disponible.
                  </p>
                )}
              </div>
            </div>


            <div className="w-md flex flex-col h-full overflow-y-auto">
              {/* Contenido */}
              {visibleProject && (
                <div className="mt-6 space-y-4 px-8 pb-8 animate-fade-in">
                  {visibleProject.imagen && (
                    <img
                      src={visibleProject.imagen}
                      alt={visibleProject.titulo}
                      className="w-full rounded-lg sm:w-sm select-none"
                    />
                  )}
                  <div>
                    <h2>Descripción</h2>
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                      {visibleProject.descripcion}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      Tecnologías usadas:
                    </h4>
                    <ul className="ml-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      {visibleProject.tecnologias.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>

                  {visibleProject.link && (
                    <a
                      href={visibleProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-blue-600 text-slate-900 px-5 py-2 rounded-lg hover:bg-blue-700 dark:text-slate-100 transition-all duration-200"
                    >
                      Ver proyecto
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      {isBlocking && (
        <div className="fixed inset-0 bg-transparent pointer-events-auto z-60" />
      )}
    </>
  );
}
