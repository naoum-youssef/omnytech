import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, FileText, Globe, Users, AlertTriangle, CheckCircle, Phone, Mail, MapPin, ExternalLink, Clock, Scale } from 'lucide-react';

export const metadata = {
    title: 'Politique de confidentialité - OmnyTech',
    description: 'Politique de confidentialité et protection des données d\'OmnyTech',
    keywords: 'politique confidentialité, protection données, RGPD, OmnyTech, Marrakech'
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-dark-900 pt-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
                <div className="absolute inset-0 bg-noise opacity-[0.01]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Back to Home Button */}
                <div className="mb-8 animate-fade-in-up">
                    <Link
                        href="/"
                        className="group inline-flex items-center px-6 py-3 bg-gradient-secondary text-white font-medium rounded-xl shadow-glow-green hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Retour à l'accueil
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                        <Shield className="w-4 h-4 mr-2" />
                        Informations Légales
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                        Politique de
                        <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                            Confidentialité
                        </span>
                    </h1>
                    <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Votre vie privée est importante pour nous. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles en conformité avec le droit marocain
                    </p>
                    <div className="flex items-center justify-center space-x-8 text-neutral-400 text-sm">
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-purple-400" />
                            Mise à jour : 15 Mars 2025
                        </div>
                        <div className="flex items-center">
                            <Scale className="w-4 h-4 mr-2 text-purple-400" />
                            Entrée en vigueur : 15 Mars 2025
                        </div>
                    </div>
                </div>

                {/* Data Controller Information */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">1.</span> Informations du Responsable de Traitement
                        </div>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-neutral-300">
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <Users className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Nom :</span>
                                    <span className="ml-2">Youssef Naoum & Mouad Ouammou</span>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <FileText className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Statut :</span>
                                    <span className="ml-2">Auto Entrepreneurs (Individuel)</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Email :</span>
                                    <span className="ml-2">contact@omnytech.com</span>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Téléphone :</span>
                                    <span className="ml-2">+212 6 94 13 80 93</span>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Localisation :</span>
                                    <span className="ml-2">Marrakech, Maroc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Basis */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Scale className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">2.</span> Base Légale
                        </div>
                    </h2>
                    <p className="text-neutral-300 mb-6">Cette politique de confidentialité est établie en conformité avec :</p>
                    <div className="space-y-4">
                        {[
                            "Loi marocaine n° 09-08 sur la protection des personnes physiques à l'égard du traitement des données à caractère personnel",
                            "Décret n° 2-09-165 portant application de la Loi sur la Protection des Données",
                            "Règlements de la Commission Nationale de Protection des Données Personnelles (CNDP)"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start p-4 bg-dark-700/30 rounded-xl border border-white/5 hover:border-purple-500/20 transition-colors">
                                <CheckCircle className="w-5 h-5 text-secondary-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Information We Collect */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Database className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">3.</span> Informations que Nous Collectons
                        </div>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-dark-700/30 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-secondary-400 font-medium mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                3.1 Informations que Vous Fournissez
                            </h4>
                            <div className="space-y-3">
                                {[
                                    "Nom et adresse e-mail (formulaires de contact)",
                                    "Détails du projet et exigences",
                                    "Préférences de communication",
                                    "Toute information supplémentaire que vous choisissez de partager"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center text-neutral-300 text-sm">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-dark-700/30 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-secondary-400 font-medium mb-4 flex items-center">
                                <Eye className="w-5 h-5 mr-2" />
                                3.2 Informations Collectées Automatiquement
                            </h4>
                            <div className="space-y-3">
                                {[
                                    "Adresse IP et localisation générale",
                                    "Type et version de navigateur",
                                    "Informations sur l'appareil",
                                    "Analyses d'utilisation du site web (via TikTok Pixel)",
                                    "Cookies et technologies similaires"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center text-neutral-300 text-sm">
                                        <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How We Use Information */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Globe className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">4.</span> Comment Nous Utilisons Vos Informations
                        </div>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Répondre aux demandes et fournir les services demandés",
                            "Communiquer sur les projets et les livrables",
                            "Envoyer des factures et traiter les paiements",
                            "Améliorer notre site web et nos services",
                            "Se conformer aux obligations légales",
                            "Analyser les performances du site web et le comportement des utilisateurs"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center p-4 bg-dark-700/30 rounded-xl border border-white/5 hover:border-accent-500/20 transition-colors">
                                <CheckCircle className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                                <span className="text-neutral-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cookies */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Database className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">5.</span> Cookies et Suivi
                        </div>
                    </h2>
                    <p className="text-neutral-300 mb-6">Notre site web utilise des cookies et des technologies similaires, notamment :</p>
                    <div className="space-y-4 mb-6">
                        {[
                            { title: "Cookies Essentiels", desc: "Requis pour la fonctionnalité du site web", icon: Lock },
                            { title: "Cookies d'Analyse", desc: "TikTok Pixel pour l'analyse commerciale et la mesure des performances", icon: Eye },
                            { title: "Cookies Fonctionnels", desc: "Se souvenir de vos préférences", icon: Users }
                        ].map((cookie, index) => (
                            <div key={index} className="flex items-start p-4 bg-dark-700/30 rounded-xl border border-white/5">
                                <cookie.icon className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="font-medium text-white">{cookie.title} :</span>
                                    <span className="ml-2 text-neutral-300">{cookie.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                        <div className="flex items-start">
                            <AlertTriangle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                            <p className="text-purple-300 text-sm">
                                En utilisant notre site web, vous consentez à l'utilisation des cookies comme décrit. Vous pouvez gérer les préférences de cookies via les paramètres de votre navigateur
                            </p>
                        </div>
                    </div>
                </div>

                {/* Data Sharing */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">6.</span> Partage et Divulgation de Données
                        </div>
                    </h2>
                    <p className="text-neutral-300 mb-6">Nous ne vendons, n'échangeons ni ne louons vos informations personnelles. Nous pouvons partager des informations uniquement dans ces circonstances limitées :</p>
                    <div className="space-y-4">
                        {[
                            "Avec des prestataires de services de confiance (hébergement, services de messagerie) sous accords de confidentialité",
                            "Lorsque requis par la loi marocaine ou processus juridique",
                            "Pour protéger nos droits, notre propriété ou notre sécurité",
                            "Avec votre consentement explicite"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start p-4 bg-dark-700/30 rounded-xl border border-white/5 hover:border-error-500/20 transition-colors">
                                <AlertTriangle className="w-5 h-5 text-error-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Informations de Contact</h2>
                        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                            Pour toute question sur cette politique de confidentialité ou nos pratiques de données, veuillez nous contacter
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/20">
                            <h3 className="text-white font-medium mb-4 flex items-center justify-center">
                                <Users className="w-5 h-5 mr-2" />
                                Omny Tech
                            </h3>
                            <div className="space-y-3 text-purple-100 text-sm">
                                <div className="flex items-center justify-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    contact@omnytech.com
                                </div>
                                <div className="flex items-center justify-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    +212 6 94 13 80 93
                                </div>
                                <div className="flex items-center justify-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Marrakech, Maroc
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Home Button - Bottom */}
                <div className="mt-16 text-center animate-fade-in-up">
                    <Link
                        href="/"
                        className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                        <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                        Retour à l'accueil
                        <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="w-4 h-4" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}