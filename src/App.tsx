import { useState, useEffect } from "react";
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

  // Mettre à jour le titre de la page et le favicon
  useEffect(() => {
    document.title = "ControCare : Controverse de Télémédecine";

    // Créer et ajouter le favicon SVG
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
    "sources-continuite",
    "sources-couts",
    "arguments-defavorables",
    "sources-donnees",
    "sources-deshumanisation",

    // Documentation
    "documentation-articles1",
    "documentation-articles2",
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

  // Gérer les clics depuis le Header
  const handleSectionChange = (section: string) => {
    const slideIndex = slides.indexOf(section);
    if (slideIndex !== -1) {
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-white">
      <Header
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />

      <main className="h-full">
        <Slide isActive={currentSlide === 0}>
          <Hero setActiveSection={handleSectionChange} />
        </Slide>

        <Slide isActive={currentSlide === 1}>
          <Statistics setActiveSection={handleSectionChange} />
        </Slide>

        {/* Experts & Méthodologie */}
        <Slide isActive={currentSlide === 2}>
          <Experts />
        </Slide>

        <Slide isActive={currentSlide === 3}>
          <MethodologieAnalyse />
        </Slide>

        <Slide isActive={currentSlide === 4}>
          <MethodologieStep1 />
        </Slide>

        <Slide isActive={currentSlide === 5}>
          <MethodologieStep2 />
        </Slide>

        <Slide isActive={currentSlide === 6}>
          <MethodologieStep3 />
        </Slide>

        <Slide isActive={currentSlide === 7}>
          <MethodologieEntretiensEthique />
        </Slide>

        {/* Chronologie */}
        <Slide isActive={currentSlide === 8}>
          <TimelineGroup1 />
        </Slide>

        <Slide isActive={currentSlide === 9}>
          <TimelineGroup2 />
        </Slide>

        <Slide isActive={currentSlide === 10}>
          <TimelineGroup3 />
        </Slide>

        <Slide isActive={currentSlide === 11}>
          <TimelineGroup4 />
        </Slide>

        {/* Argumentation */}
        <Slide isActive={currentSlide === 12}>
          <EnjeuxTransversaux />
        </Slide>

        <Slide isActive={currentSlide === 13}>
          <ArgumentsFavorables />
        </Slide>

        <Slide isActive={currentSlide === 14}>
          <SourcesContinuite />
        </Slide>

        <Slide isActive={currentSlide === 15}>
          <SourcesCouts />
        </Slide>

        <Slide isActive={currentSlide === 16}>
          <ArgumentsDefavorables />
        </Slide>

        <Slide isActive={currentSlide === 17}>
          <SourcesDonnees />
        </Slide>

        <Slide isActive={currentSlide === 18}>
          <SourcesDeshumanisation />
        </Slide>

        {/* Documentation */}
        <Slide isActive={currentSlide === 19}>
          <DocumentationArticles1 />
        </Slide>

        <Slide isActive={currentSlide === 20}>
          <DocumentationArticles2 />
        </Slide>

        <Slide isActive={currentSlide === 21}>
          <DocumentationOuvrages />
        </Slide>

        <Slide isActive={currentSlide === 22}>
          <DocumentationRapports />
        </Slide>

        <Slide isActive={currentSlide === 23}>
          <DocumentationTheses />
        </Slide>

        <Slide isActive={currentSlide === 24}>
          <DocumentationSitesWeb />
        </Slide>

        <Slide isActive={currentSlide === 25}>
          <DocumentationSitesWeb2 />
        </Slide>

        <Slide isActive={currentSlide === 26}>
          <IllustrationsVideos />
        </Slide>

        {/* AMUE + Conclusion -> Equipe */}
        <Slide isActive={currentSlide === 27}>
          <ArticleResume />
        </Slide>

        <Slide isActive={currentSlide === 28}>
          <Remerciements1 />
        </Slide>

        <Slide isActive={currentSlide === 29}>
          <Remerciements2 />
        </Slide>

        <Slide isActive={currentSlide === 30}>
          <TeamGroup1 />
        </Slide>

        <Slide isActive={currentSlide === 31}>
          <TeamGroup2 />
        </Slide>

        <Slide isActive={currentSlide === 32}>
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

      <Footer onDisclaimerClick={() => setCurrentSlide(slides.length - 1)} />
    </div>
  );
}