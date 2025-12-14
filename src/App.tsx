import { useState, useEffect } from "react";
import { ModalProvider } from "./context/ModalContext";
import { ArrowLeft } from "lucide-react";
import { Hero } from "./components/Hero";
import { Statistics } from "./components/Statistics";
import { ArgumentsFavorables } from "./components/ArgumentsFavorables";
import { ArgumentsDefavorables } from "./components/ArgumentsDefavorables";
import { EnjeuxTransversaux } from "./components/EnjeuxTransversaux";
import { SourcesContinuite } from "./components/SourcesContinuite";
import { SourcesCouts } from "./components/SourcesCouts";
import { SourcesDonnees } from "./components/SourcesDonnees";
import { SourcesDeshumanisation } from "./components/SourcesDeshumanisation";
import { TimelineGroup1 } from "./components/timeline/TimelineGroup1";
import { TimelineGroup2 } from "./components/timeline/TimelineGroup2";
import { TimelineGroup3 } from "./components/timeline/TimelineGroup3";
import { TimelineGroup4 } from "./components/timeline/TimelineGroup4";
import { Experts } from "./components/Experts";
import { MethodologieAnalyse } from "./components/MethodologieAnalyse";
import { MethodologieStep1 } from "./components/methodologie/MethodologieStep1";
import { MethodologieStep2 } from "./components/methodologie/MethodologieStep2";
import { MethodologieStep3 } from "./components/methodologie/MethodologieStep3";
import { MethodologieEntretiensEthique } from "./components/methodologie/MethodologieEntretiensEthique";
import { DocumentationArticles1 } from "./components/documentation/DocumentationArticles1";
import { DocumentationArticles2 } from "./components/documentation/DocumentationArticles2";
import { DocumentationArticles3 } from "./components/documentation/DocumentationArticles3";
import { DocumentationOuvrages } from "./components/documentation/DocumentationOuvrages";
import { DocumentationRapports } from "./components/documentation/DocumentationRapports";
import { DocumentationTheses } from "./components/documentation/DocumentationTheses";
import { DocumentationSitesWeb } from "./components/documentation/DocumentationSitesWeb";
import { DocumentationSitesWeb2 } from "./components/documentation/DocumentationSitesWeb2";
import { IllustrationsVideos } from "./components/IllustrationsVideos";
import { ArticleResume } from "./components/ArticleResume";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TeamGroup1 } from "./components/team/TeamGroup1";
import { TeamGroup2 } from "./components/team/TeamGroup2";
import { Remerciements1 } from "./components/Remerciements1";
import { Remerciements2 } from "./components/Remerciements2";
import { Disclaimer } from "./components/Disclaimer";
import { Slide } from "./components/Slide";
import { SlideNavigation } from "./components/SlideNavigation";

export default function App() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSection, setPreviousSection] = useState<string | null>(null);
  const [highlightedSourceId, setHighlightedSourceId] = useState<string | null>(null);

  // Mettre à jour le titre de la page et le favicon
  useEffect(() => {
    document.title = "ControCare : Controverse de Télémédecine";
    // ... favicon logic
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="%2310B981" opacity="0.1"/><path d="M20 28C20 28 10 22 10 15C10 12 12 10 14.5 10C16.5 10 18 11 20 13C22 11 23.5 10 25.5 10C28 10 30 12 30 15C30 22 20 28 20 28Z" fill="%2310B981" opacity="0.8"/><path d="M8 20 L12 20 L14 16 L16 24 L18 20 L20 20 L22 20 L24 16 L26 24 L28 20 L32 20" stroke="%23059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="30" cy="12" r="6" fill="white"/><path d="M30 9 L30 15 M27 12 L33 12" stroke="%2310B981" stroke-width="2" stroke-linecap="round"/></svg>';
    document.head.appendChild(link);
  }, []);

  // Définir l'ordre des slides
  const slides = [
    "accueil",
    "statistiques",

    // Experts & Méthodologie
    "experts",
    "methodologie-analyse",
    "methodologie-step1",
    "methodologie-step2",
    "methodologie-step3",
    "methodologie-entretiens-ethique",

    // Chronologie
    "chronologie-group1",
    "chronologie-group2",
    "chronologie-group3",
    "chronologie-group4",

    // Argumentation
    "enjeux-transversaux",
    "arguments-favorables",

    "arguments-defavorables",


    // Documentation
    "documentation-articles1",
    "documentation-articles2",
    "documentation-articles3",
    "documentation-ouvrages",
    "documentation-rapports",
    "documentation-theses",
    "documentation-sites-web",
    "documentation-sites-web2",
    "illustrations-videos",

    // AMUE + Conclusion -> Equipe
    "article",
    "remerciements1",
    "remerciements2",
    "team-group1",
    "team-group2",

    "disclaimer"
  ];

  // Synchroniser activeSection avec currentSlide
  useEffect(() => {
    setActiveSection(slides[currentSlide]);
  }, [currentSlide]);

  // Navigation
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // Empêcher le scroll du body
  useEffect(() => {
    document.body.classList.add("presentation-mode");
    return () => {
      document.body.classList.remove("presentation-mode");
    };
  }, []);

  // Gérer les clics depuis le Header et la navigation interne
  const handleNavigation = (section: string, sourceId?: string) => {
    const slideIndex = slides.indexOf(section);
    if (slideIndex !== -1) {
      // If we are navigating with a sourceId, it likely means we are jumping to a source.
      // Save current position ONLY if we are not already in a "jumped" state (to avoid overwriting the original source)
      // or if we decide to overwrite it. A simple stack is better, but one level is enough for "Back to text".
      if (sourceId) {
        setPreviousSection(activeSection);
      } else {
        // Normal navigation usually clears history? 
        // Or should we keep it if the user manually navigates?
        // Let's clear it if they navigate via menu to keep UI clean, 
        // unless they click "Back".
        setPreviousSection(null);
      }

      setCurrentSlide(slideIndex);

      if (sourceId) {
        setHighlightedSourceId(sourceId);
        setTimeout(() => setHighlightedSourceId(null), 3000);
      }
    }
  };

  const handleBack = () => {
    if (previousSection) {
      const slideIndex = slides.indexOf(previousSection);
      if (slideIndex !== -1) {
        setCurrentSlide(slideIndex);
        setPreviousSection(null); // Clear history after going back
      }
    }
  };

  return (
    <ModalProvider>
      <div className="h-screen overflow-hidden bg-white">
        <Header
          activeSection={activeSection}
          setActiveSection={handleNavigation}
        />

        <main className="h-full">
          <Slide isActive={activeSection === "accueil"}>
            <Hero setActiveSection={handleNavigation} />
          </Slide>

          <Slide isActive={activeSection === "statistiques"}>
            <Statistics setActiveSection={handleNavigation} />
          </Slide>

          {/* Experts & Méthodologie */}
          <Slide isActive={activeSection === "experts"}>
            <Experts />
          </Slide>

          <Slide isActive={activeSection === "methodologie-analyse"}>
            <MethodologieAnalyse />
          </Slide>

          <Slide isActive={activeSection === "methodologie-step1"}>
            <MethodologieStep1 />
          </Slide>

          <Slide isActive={activeSection === "methodologie-step2"}>
            <MethodologieStep2 />
          </Slide>

          <Slide isActive={activeSection === "methodologie-step3"}>
            <MethodologieStep3 />
          </Slide>

          <Slide isActive={activeSection === "methodologie-entretiens-ethique"}>
            <MethodologieEntretiensEthique />
          </Slide>

          {/* Chronologie */}
          <Slide isActive={activeSection === "chronologie-group1"}>
            <TimelineGroup1 />
          </Slide>

          <Slide isActive={activeSection === "chronologie-group2"}>
            <TimelineGroup2 />
          </Slide>

          <Slide isActive={activeSection === "chronologie-group3"}>
            <TimelineGroup3 />
          </Slide>

          <Slide isActive={activeSection === "chronologie-group4"}>
            <TimelineGroup4 />
          </Slide>

          {/* Argumentation */}
          <Slide isActive={activeSection === "enjeux-transversaux"}>
            <EnjeuxTransversaux setActiveSection={handleNavigation} />
          </Slide>

          <Slide isActive={activeSection === "arguments-favorables"}>
            <ArgumentsFavorables setActiveSection={handleNavigation} />
          </Slide>

          <Slide isActive={activeSection === "arguments-defavorables"}>
            <ArgumentsDefavorables setActiveSection={handleNavigation} />
          </Slide>


          {/* Documentation */}
          <Slide isActive={activeSection === "documentation-articles1"}>
            <DocumentationArticles1 highlightedSourceId={highlightedSourceId} />
          </Slide>

          <Slide isActive={activeSection === "documentation-articles2"}>
            <DocumentationArticles2 highlightedSourceId={highlightedSourceId} />
          </Slide>

          <Slide isActive={activeSection === "documentation-articles3"}>
            <DocumentationArticles3 highlightedSourceId={highlightedSourceId} />
          </Slide>

          <Slide isActive={activeSection === "documentation-ouvrages"}>
            <DocumentationOuvrages highlightedSourceId={highlightedSourceId} />
          </Slide>

          <Slide isActive={activeSection === "documentation-rapports"}>
            <DocumentationRapports highlightedSourceId={highlightedSourceId} />
          </Slide>

          <Slide isActive={activeSection === "documentation-theses"}>
            <DocumentationTheses />
          </Slide>

          <Slide isActive={activeSection === "documentation-sites-web"}>
            <DocumentationSitesWeb highlightedSourceId={highlightedSourceId} />
          </Slide>

          <Slide isActive={activeSection === "documentation-sites-web2"}>
            <DocumentationSitesWeb2 />
          </Slide>

          <Slide isActive={activeSection === "illustrations-videos"}>
            <IllustrationsVideos />
          </Slide>

          {/* AMUE + Conclusion -> Equipe */}
          {/* AMUE + Conclusion -> Equipe */}
          <Slide isActive={activeSection === "article"}>
            <ArticleResume />
          </Slide>

          <Slide isActive={activeSection === "remerciements1"}>
            <Remerciements1 />
          </Slide>

          <Slide isActive={activeSection === "remerciements2"}>
            <Remerciements2 />
          </Slide>

          <Slide isActive={activeSection === "team-group1"}>
            <TeamGroup1 />
          </Slide>

          <Slide isActive={activeSection === "team-group2"}>
            <TeamGroup2 />
          </Slide>

          <Slide isActive={activeSection === "disclaimer"}>
            <Disclaimer />
          </Slide>
        </main>

        {/* Navigation par flèches */}
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />

        {/* Bouton Retour (si navigation croisée) */}
        {previousSection && (
          <div className="fixed bottom-24 right-8 z-50">
            <button
              onClick={handleBack}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all flex items-center gap-2 animate-bounce-subtle"
            >
              <ArrowLeft size={20} />
              Retour à la lecture
            </button>
          </div>
        )}

        <Footer onDisclaimerClick={() => setCurrentSlide(slides.length - 1)} />
      </div>
    </ModalProvider>
  );
}