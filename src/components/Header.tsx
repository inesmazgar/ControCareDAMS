import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'statistiques', label: 'Statistiques' },
    { id: 'enjeux-transversaux', label: 'Argumentation' },
    { id: 'documentation-articles1', label: 'Documentation' },
    { id: 'article', label: 'Article AMUE' },
    { id: 'team-group1', label: 'Équipe' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fonction pour vérifier si un item de nav est actif
  const isNavItemActive = (itemId: string) => {
    // Si la section active correspond exactement
    if (activeSection === itemId) return true;

    // Vérifier les catégories
    if (itemId === 'arguments-favorables' && (
      activeSection.startsWith('arguments-') ||
      activeSection.startsWith('sources-') ||
      activeSection === 'enjeux-transversaux'
    )) return true;

    if (itemId === 'chronologie-group1' && activeSection.startsWith('chronologie-')) return true;

    if (itemId === 'documentation-articles1' && (
      activeSection.startsWith('documentation-') ||
      activeSection === 'illustrations-videos'
    )) return true;

    if (itemId === 'team-group1' && (
      activeSection.startsWith('team-') ||
      activeSection.startsWith('remerciements')
    )) return true;

    if (itemId === 'experts' && activeSection.startsWith('methodologie-')) return true;

    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-green-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavClick('accueil')}
            className="hover:opacity-80 transition-opacity"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-colors ${isNavItemActive(item.id)
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-green-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors ${isNavItemActive(item.id)
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}