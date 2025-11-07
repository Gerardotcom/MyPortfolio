import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";

const AboutMeSection = () => (
  <section id="Sobre mi" className="h-full w-full flex flex-col p-10">
    <div className="h-fit">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Sobre mi</h2>
    </div>
    <div className="flex w-full h-2/3 justify-between items-center text-slate-900 dark:text-slate-100">
      <div className="w-full">
        <h2 className="mb-4">
          Education
        </h2>
        <p className="font-bold">
          Universidad Tecnologica de Tula-Tepéji
        </p>
        <p className="font-light">
          Ingenieria en Entornos Virtuales y Negocios Digitales
        </p>
      </div>
      <div className="w-full">
        <h2 className="mb-4">Skillset</h2>
        <ul className="font-light space-y-1">
          <li>
            UX/UI Design
          </li>
          <li>
            Advanced prototyping
          </li>
          <li>
            Frontend-Development
          </li>
          <li>
            prototyping focused on development
          </li>
        </ul>
      </div>
    </div>
    <div className="fixed bottom-10 flex w-full h-fit gap-6 items-center">
      {/* GitHub */}
      <a
        href="https://github.com/Gerardotcom"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
      >
        <RiGithubFill size={24} />
        <span>@Gerardotcom</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/gerardotcom/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
      >
        <RiLinkedinBoxFill size={24} />
        <span>@gerardotcom</span>
      </a>
    </div>
  </section>
);

export default AboutMeSection;
