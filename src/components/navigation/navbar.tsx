"use client";

import { useState, useEffect } from 'react';
import { RiSunLine, RiMoonLine } from '@remixicon/react';

interface NavbarProps {
    sections: string[];
}

export default function Navbar({ sections }: NavbarProps) {
    if (!sections || sections.length === 0) return null; // Asegurarse de que 'sections' esté disponible

    const [activeSection, setActiveSection] = useState(sections?.[0] || "Home");
    const [darkMode, setDarkMode] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Sincronizar el tema entre SSR y cliente
    useEffect(() => {
        setIsMounted(true); // Marcar el componente como montado en el cliente
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDarkMode);
        document.documentElement.classList.toggle('dark', prefersDarkMode);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    // Función para manejar el desplazamiento de la página y activar la sección visible
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sectionOffsets = sections.map((section) => {
            const element = document.getElementById(section);
            return {
                section,
                offsetTop: element?.offsetTop || 0,
                offsetHeight: element?.offsetHeight || 0,
            };
        });

        const currentSection = sectionOffsets.find(
            ({ offsetTop, offsetHeight }) =>
                scrollPosition >= offsetTop - 100 &&
                scrollPosition < offsetTop + offsetHeight - 100
        );

        if (currentSection && currentSection.section !== activeSection) {
            setActiveSection(currentSection.section);
        }
    };

    // Función para desplazarse suavemente a la sección deseada
    const scrollToSection = (section: string) => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Hook para manejar el evento de scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <nav className="w-fit h-fit px-6 py-2 mt-4 bg-white/20 border-2 border-slate-200 rounded-full backdrop-blur-xs dark:bg-slate-900/15 dark:border-slate-500 transition-all duration-300 z-20 select-none">
            <div className="h-full w-fit flex justify-between items-center space-x-6">
                {/* Contenedor Izquierdo: Logo o Imagen */}
                <a href="https://www.linkedin.com/in/gerardotcom/" target="_blank" rel="noopener noreferrer">
                    <div className=" w-[2.5rem] h-[2.5rem] bg-[url(/pictures/profile_picture.jpg)] bg-cover border border-white dark:border-slate-100/60 rounded-full">
                    </div>
                </a>

                {/* Contenedor Central: Botones de Navegación */}
                <div className="w-fit flex justify-between items-center">
                    {sections.map((section) => (
                        <button
                            key={section}
                            className={`py-2 px-6 rounded-full border transition-all cursor-pointer ${activeSection === section
                                ? "border-white text-slate-900 dark:text-white bg-slate-100/50 dark:bg-slate-950/50 dark:border-slate-700"
                                : "border-transparent text-slate-900 dark:text-slate-400"
                                } hover:translate-y-1`}
                            onClick={() => {
                                setActiveSection(section); // Actualizar sección activa
                                scrollToSection(section); // Desplazarse a la sección
                            }}
                        >
                            {section}
                        </button>
                    ))}
                </div>

                {/* Contenedor Derecho: Botón de Modo Claro/Oscuro */}
                <div className="flex h-full items-center py-2">
                    <button
                        onClick={toggleDarkMode}
                        className="w-10 h-10 flex items-center justify-center bg-white/50 border border-slate-300/90 rounded-full transition-all zoom-hover duration-300 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-950/50 dark:hover:bg-slate-800/50 cursor-pointer"
                    >
                        {darkMode ? (
                            <RiMoonLine className=" text-blue-500 transition-transform duration-300" />
                        ) : (
                            <RiSunLine className=" text-yellow-500 transition-transform duration-300" />
                        )}
                    </button>
                </div>
            </div>
        </nav>

    );
}
