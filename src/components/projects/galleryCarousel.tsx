import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

interface GalleryCarouselProps {
	galeria: { imagen: string; descripcion: string }[];
}

export default function GalleryCarousel({ galeria }: GalleryCarouselProps) {
	const [current, setCurrent] = useState(0);

	const handlePrev = () => {
		setCurrent((prev) => (prev === 0 ? galeria.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrent((prev) => (prev === galeria.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="w-full h-full rounded-xl overflow-hidden shadow-md bg-slate-100/30 pb-4 dark:bg-slate-800/30 backdrop-blur-sm">
			{/* Imagen principal */}
			<div className="h-128 p-4 sm:h-96 flex items-center justify-center overflow-hidden select-none">
					<img
						src={galeria[current].imagen}
						alt={`Vista ${current + 1}`}
						className="object-contain w-fit h-full rounded-2xl transition-all duration-500"
					/>
			</div>

			{/* Descripción */}
			<div className="p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-t border-slate-300 dark:border-slate-700 transition-all duration-400">
				<p className="text-sm text-gray-700 dark:text-gray-300 text-center">
					{galeria[current].descripcion}
				</p>
			</div>

			{/* Botones de navegación */}
			<button
				onClick={handlePrev}
				className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-900 bg-slate-200 dark:bg-slate-800/60 rounded-full p-2 hover:bg-slate-300 dark:text-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
			>
				<RiArrowLeftSLine size={24} />
			</button>

			<button
				onClick={handleNext}
				className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-900 bg-slate-200 dark:bg-slate-800/60 rounded-full p-2 hover:bg-slate-300 dark:text-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
			>
				<RiArrowRightSLine size={24} />
			</button>

			{/* Indicadores */}
			<div className="w-full flex justify-center gap-2">
				{galeria.map((_, i) => (
					<div
						key={i}
						onClick={() => setCurrent(i)}
						className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${i === current
							? "bg-blue-700 dark:bg-blue-800 scale-110"
							: "bg-gray-400 dark:bg-slate-600 hover:bg-gray-300"
							}`}
					/>
				))}
			</div>
		</div>
	);
}
