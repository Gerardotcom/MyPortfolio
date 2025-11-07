const HomeSection = () => (
  <section id="Inicio" className="h-full w-full flex px-8 justify-end p-8 transition-all duration-300">
    {/* Contenedor Hero (4/6 de altura) */}
    <div className="w-full flex justify-center items-center transition-image duration-300">
      <a
        href="https://media.licdn.com/dms/document/media/v2/D4E1FAQHVn5zgV3d7rg/feedshare-document-pdf-analyzed/feedshare-document-pdf-analyzed/0/1733827468341?e=1735171200&v=beta&t=mQSDYw_v-MVhL1P-wux0Qfna7qX4Db-WA0SGgcj80NU"
        className="mt-6 inline-block bg-white/30 backdrop-blur-sm border border-white text-slate-800 px-6 py-3 rounded-lg hover:bg-sky-200/50 dark:bg-slate-950/20 dark:hover:bg-sky-900/50 dark:border-white/30 dark:text-slate-200 transition zoom-hover duration-300"
        aria-label="Descargar mi CV"
        target="_blank" rel="noopener noreferrer"
      >
        Descargar CV
      </a>
    </div>


    {/* Contenedor Texto (2/6 de altura) */}
    <div className="w-full">
      <div className="h-full w-3/4 flex flex-col px-4 py-4 justify-center items-start text-start">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-slate-200">
          UX/UI Designer & front-end developer
        </h1>
        <p className="mt-4 text-lg text-slate-800 dark:text-slate-300">
          Desarrollador Web, Móvil enfocado a soluciones a innovadoras.
        </p>

      </div>
    </div>
  </section>

);

export default HomeSection;
