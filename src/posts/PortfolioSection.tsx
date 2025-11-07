'use client';

import { useState } from "react";
import projects from "../components/projects/projects";
import type { Project } from "../components/projects/project";
import ProjectDrawer from "../components/projects/projectDrawer";
import { RiComputerLine, RiSmartphoneLine, RiArrowRightSLine, RiArrowLeftSLine, } from "@remixicon/react";

const PortfolioSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Project | null>(null);

  const handleOpenDrawer = (project: Project) => {
    setProyectoSeleccionado(project);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setProyectoSeleccionado(null), 200);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="Portafolio" className="h-full w-full flex flex-col p-10 relative overflow-hidden">
      <div className="h-fit">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Portafolio</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Aquí algunos proyectos que he realizado:
        </p>
      </div>

      {/* Contenedor de proyectos */}
      <div className="w-full h-full flex justify-around items-center mt-8 space-x-8 overflow-clip">
        {currentProjects.map((proyecto, index) => (
          <div
            key={index}
            onClick={() => handleOpenDrawer(proyecto)}
            className="relative max-w-sm h-56 sm:w-full lg:w-2/5 p-2 mb-8 cursor-pointer rounded-3xl overflow-hidden group bg-slate-100/30 dark:bg-slate-700/80 hover:scale-105 transition-all duration-200"
            style={{
              backgroundImage: `url(${proyecto.imagen})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay oscuro al hacer hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-slate-900/20 transition-all duration-200 z-20"></div>

            {/* Sección inferior con info */}
            <div className="absolute bottom-0 left-0 w-full bg-white/60 dark:bg-slate-800/90 backdrop-blur-md p-4 flex justify-between items-center rounded-b-3xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {proyecto.titulo}
              </h3>

              {/* Íconos de plataformas */}
              <div className="flex space-x-3 text-gray-700 dark:text-gray-200">
                {proyecto.desktop && <RiComputerLine size={22} />}
                {proyecto.mobile && <RiSmartphoneLine size={22} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navegación */}
      {projects.length > projectsPerPage && (
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className={`w-10 h-10 flex justify-center items-center rounded-lg transition duration-200 ${currentPage === 0
              ? "bg-slate-200 text-gray-600 cursor-not-allowed dark:bg-slate-900/50"
              : "bg-slate-50 text-gray-800 hover:bg-slate-200 dark:bg-slate-800/60 dark:text-gray-100 dark:hover:bg-slate-700 cursor-pointer"
              }`}
          >
            <RiArrowLeftSLine />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className={`w-10 h-10 flex justify-center items-center rounded-lg transition duration-200 ${currentPage === totalPages - 1
              ? "bg-slate-200 text-gray-600 cursor-not-allowed dark:bg-slate-900/50"
              : "bg-slate-50 text-gray-800 hover:bg-slate-200 dark:bg-slate-800/60 dark:text-gray-100 dark:hover:bg-slate-700 cursor-pointer"
              }`}
          >
            <RiArrowRightSLine />
          </button>
        </div>
      )}

      {/* Drawer lateral */}
      <ProjectDrawer
        project={proyectoSeleccionado}
        isOpen={drawerOpen}
        onClose={handleCloseDrawer}
      />
    </section>
  );
};

export default PortfolioSection;
