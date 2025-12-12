import { AlertCircle } from 'lucide-react';

interface FooterProps {
  onDisclaimerClick: () => void;
}

export function Footer({ onDisclaimerClick }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 py-3 px-4 z-50">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onDisclaimerClick}
          className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors mx-auto group"
        >
          <span>
            <strong>Clause de non-responsabilité :</strong> Ce site web a été réalisé dans le cadre d'un projet académique de Polytech Montpellier (année 2025/2026). Les informations présentées ne constituent pas des conseils médicaux professionnels et ne doivent pas être utilisées comme tels. Pour toute question de santé, veuillez consulter un professionnel de santé qualifié.
          </span>
        </button>
      </div>
    </footer>
  );
}