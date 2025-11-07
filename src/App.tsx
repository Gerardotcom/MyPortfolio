import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/navbar";
import Home from "./pages/home";
import BackgroundAnimated from "./utils/bg";
import LoadingScreen from "./utils/loadingScreen";


export default function App() {
  const sections = ['Inicio', 'Portafolio', 'Sobre mi'];

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-slate-300/20 dark:bg-slate-900/10 dark:text-white">
      <LoadingScreen/>
      <BackgroundAnimated/>
      <div className='w-full h-full flex flex-col items-center overflow-hidden'>
         <Navbar sections={sections} />
        <div className='w-full h-full mt-4 overflow-auto'>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        </div>

      </div>

    </div>
  );
}
