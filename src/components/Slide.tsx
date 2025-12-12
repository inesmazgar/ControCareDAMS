import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  isActive: boolean;
}

export function Slide({ children, isActive }: SlideProps) {
  if (!isActive) return null;

  return (
    <div className="h-screen w-full flex flex-col animate-in fade-in duration-500">
      {/* Contenu de la slide - scroll si le contenu dépasse */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      {/* Clause de non-responsabilité toujours visible en bas */}
      <div className="border-t border-gray-200 bg-white py-3 px-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex-shrink-0">
        <p className="text-xs text-gray-600 text-center max-w-6xl mx-auto">
          <span className="font-semibold">Clause de non-responsabilité :</span>{" "}
          Ce site web a été réalisé dans le cadre d'un projet académique de
          Polytech Montpellier (année 2025/2026). Les informations présentées
          ne constituent pas des conseils médicaux professionnels et ne doivent
          pas être utilisées comme tels. Pour toute question de santé,
          veuillez consulter un professionnel de santé qualifié.
        </p>
      </div>
    </div>
  );
}