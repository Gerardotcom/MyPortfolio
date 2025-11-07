import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500); // pequeño delay para suavidad
          return 100;
        }
        return prev + 5; // velocidad de llenado
      });
    }, 50); // cada 50ms se incrementa 2%

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-400 transition-transform duration-1000 ease-in
      ${isLoaded ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg font-medium text-slate-700">
          Por favor espere...
        </p>

        <div className="w-64 h-4 p-1 bg-slate-200/40 rounded-full overflow-clip">
          <div
            className="h-full bg-blue-700/80 transition-all duration-300 ease-linear rounded-full drop-shadow-lg drop-shadow-sky-500/60"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <span className="text-sm font-bold text-slate-500">{progress}%</span>
      </div>
    </div>
  );
}
