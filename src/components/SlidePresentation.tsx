import { ReactNode } from "react";

interface SlidePresentationProps {
  children: ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function SlidePresentation({
  children,
  currentSlide,
  totalSlides,
  onNext,
  onPrevious,
}: SlidePresentationProps) {
  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      {/* Contenu principal de la slide */}
      <div className="h-full w-full flex flex-col">
        {/* Zone de contenu avec scroll interne si nécessaire */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Clause toujours visible en bas */}
        <div className="border-t border-gray-200 bg-white py-3 px-6">
          <p className="text-xs text-gray-600 text-center">
            <span className="font-semibold">Clause de non-responsabilité :</span>{" "}
            Ce site web a été réalisé dans le cadre d'un projet académique de
            Polytech Montpellier (année 2025/2026). Les informations présentées
            ne constituent pas des conseils médicaux professionnels et ne doivent
            pas être utilisées comme tels. Pour toute question de santé,
            veuillez consulter un professionnel de santé qualifié.
          </p>
        </div>
      </div>
    </div>
  );
}
