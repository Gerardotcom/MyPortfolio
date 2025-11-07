import HomeSection from "../posts/HomeSection";
import PortfolioSection from "../posts/PortfolioSection";
import AboutMeSection from "../posts/AboutMeSection";

export default function Home() {
  return (
    <main className="w-full h-full px-8">
      {/* Contenedor de limitación de las secciones */}
      <div className="h-full w-full pb-6">
        <div className="flex flex-col w-full h-full overflow-hidden bg-white/20 border-2 border-slate-200 backdrop-blur-xs rounded-3xl shadow-xl dark:bg-slate-950/30 dark:border-slate-700">
          {/* Contenedor interno que organiza las secciones */}
          <div className="flex flex-col w-full h-full overflow-y-hidden snap-y snap-mandatory">
            {/* Secciones */}
            <div className="w-full h-full shrink-0 snap-center">
              <HomeSection />
            </div>
            <div className="w-full h-full shrink-0 snap-center"></div>

            <div className="w-full h-full shrink-0 snap-center">
              <PortfolioSection />
            </div>
            <div className="w-full h-full shrink-0 snap-center"></div>

            <div className="w-full h-full shrink-0 snap-center">
              <AboutMeSection />
            </div>
            <div className="w-full h-full shrink-0 snap-center"></div>

          </div>
        </div>
      </div>
    </main>
  );
}
