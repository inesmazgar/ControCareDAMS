import { ChevronLeft, ChevronRight } from "lucide-react";
import { useModalContext } from "../context/ModalContext";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrevious,
}: SlideNavigationProps) {
  const { isModalOpen } = useModalContext();

  if (isModalOpen) return null;

  return (
    <>
      {/* Flèche gauche (Précédent) */}
      {currentSlide > 0 && (
        <button
          onClick={onPrevious}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 hover:scale-110 transition-all duration-200 group"
          aria-label="Slide précédente"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-emerald-600 transition-colors" />
        </button>
      )}

      {/* Flèche droite (Suivant) */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={onNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 hover:scale-110 transition-all duration-200 group"
          aria-label="Slide suivante"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-emerald-600 transition-colors" />
        </button>
      )}

      {/* Indicateurs de slides */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-8 bg-emerald-600"
                : "w-2 bg-gray-300"
              }`}
          />
        ))}
      </div>

      {/* Compteur de slides */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-emerald-600">{currentSlide + 1}</span>
          {" / "}
          <span>{totalSlides}</span>
        </p>
      </div>
    </>
  );
}
