import { FileText, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface DocumentationArticles3Props {
    highlightedSourceId?: string | null;
}

export function DocumentationArticles3({ highlightedSourceId }: DocumentationArticles3Props) {
    const articles = [
        {
            titre: "Objets connectés et santé",
            auteur: "Debet, Anne",
            annee: "2017",
            description: "Analyse juridique et éthique des objets connectés dans le domaine de la santé.",
            lien: "https://droit.cairn.info/revue-journal-du-droit-de-la-sante-et-de-l-assurance-maladie-2017-1-page-34"
        },
        {
            titre: "E-santé, télésanté, santé 2.0 : de quoi parle-t-on ?",
            auteur: "Bourdel, Louise, et Linda Cambon",
            annee: "2019",
            description: "Dossier ADSP : Analyse de l'e-santé comme levier pour l'amélioration du système de santé.",
            lien: "https://www.hcsp.fr/explore.cgi/avisrapportsdomaine?clefr=748"
        },
        {
            titre: "Women and eHealth: From potential to practice",
            auteur: "Thouvenot, Véronique-Inès",
            annee: "2014",
            description: "Perspectives sur l'équité d'accès aux soins et le rôle de la télémédecine.",
            lien: "https://www.millennia2025.org/femmes_et_esante.html"
        }
    ];

    return (
        <div className="h-full w-full bg-gradient-to-br from-red-50 via-white to-red-50 overflow-y-auto flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-center mb-8">
                    <FileText className="text-red-600 mr-4" size={48} />
                    <h1 className="text-gray-900 text-4xl font-bold">Articles Scientifiques (Suite)</h1>
                </div>

                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                    Publications académiques et articles de recherche consultés pour cette étude.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: highlightedSourceId && article.auteur.includes(highlightedSourceId) ? 1.05 : 1,
                                borderColor: highlightedSourceId && article.auteur.includes(highlightedSourceId) ? "#ef4444" : "#fecaca"
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 bg-white border-2 rounded-2xl transition-all ${highlightedSourceId && article.auteur.includes(highlightedSourceId) ? 'shadow-2xl ring-4 ring-red-100 z-10' : 'hover:border-red-400 hover:shadow-xl'}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-red-100 rounded-lg">
                                    <FileText className="text-red-600" size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-semibold">
                                            Article
                                        </span>
                                        <span className="text-xs text-gray-500">{article.annee}</span>
                                    </div>
                                    <h3 className="text-gray-900 mb-2 font-semibold">{article.titre}</h3>
                                    <p className="text-sm text-gray-500 mb-2 text-red-600 font-medium">{article.auteur}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
                                    <a href={article.lien} target="_blank" rel="noopener noreferrer" className="text-red-600 text-sm font-semibold mt-2 flex items-center">
                                        Lire l'article <ExternalLink className="ml-1" size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
