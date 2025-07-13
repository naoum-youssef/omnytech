/* eslint-disable react/no-unescaped-entities */
// (legal)/terms-of-service/page.js

import Link from 'next/link';
import { ArrowLeft, FileText, Scale, Briefcase, CheckCircle, Clock, Users, AlertTriangle, Code, Globe, Settings, Phone, Mail, MapPin, ExternalLink, Building2, CreditCard, Shield } from 'lucide-react';

export const metadata = {
    title: 'Conditions de service - OmnyTech',
    description: 'Conditions de service et cadre légal pour les services de développement web d\'OmnyTech',
    keywords: 'conditions service, développement web, auto entrepreneur, Marrakech, Maroc'
}

export default function TermsOfService() {
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
                        <FileText className="w-4 h-4 mr-2" />
                        Informations Légales
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                        Conditions de
                        <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                            Service
                        </span>
                    </h1>
                    <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Ces conditions régissent votre utilisation de nos services de développement web et établissent le cadre légal de notre relation d'affaires
                    </p>
                    <div className="flex items-center justify-center space-x-8 text-neutral-400 text-sm">
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-purple-400" />
                            Mise à jour : 17 janvier 2025
                        </div>
                        <div className="flex items-center">
                            <Scale className="w-4 h-4 mr-2 text-purple-400" />
                            Entrée en vigueur : 17 janvier 2025
                        </div>
                    </div>
                </div>

                {/* Service Provider Information */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">1.</span> Informations du Prestataire de Services
                        </div>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-neutral-300">
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <Users className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Nom commercial :</span>
                                    <span className="ml-2">Hassan El Berkaoui</span>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <FileText className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Statut :</span>
                                    <span className="ml-2">Auto Entrepreneur (Individuel) - Maroc</span>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <Scale className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
                                <div>
                                    <span className="text-white font-medium">Immatriculation :</span>
                                    <span className="ml-2">Inscrit sous les réglementations marocaines d'Auto Entrepreneur</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Email :</span>
                                    <span className="ml-2">fentronly@gmail.com</span>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-dark-700/50 rounded-xl border border-white/5">
                                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                                <div>
                                    <span className="text-white font-medium">Téléphone :</span>
                                    <span className="ml-2">+212 6 76 62 90 22</span>
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
                    <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                        <div className="flex items-start">
                            <CreditCard className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
                            <p className="text-purple-300 text-sm">
                                <span className="font-medium">Limite de chiffre d'affaires annuel :</span> 200 000 MAD pour les services (selon le statut Auto Entrepreneur)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Legal Framework */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Scale className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">2.</span> Cadre Légal
                        </div>
                    </h2>
                    <p className="text-neutral-300 mb-6">Ces conditions sont régies par :</p>
                    <div className="space-y-4">
                        {[
                            "Code de Commerce Marocain (Code de Commerce)",
                            "Réglementations marocaines d'Auto Entrepreneur",
                            "Code Civil Marocain pour les obligations contractuelles",
                            "Droit commercial international le cas échéant"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start p-4 bg-dark-700/30 rounded-xl border border-white/5 hover:border-secondary-500/20 transition-colors">
                                <CheckCircle className="w-5 h-5 text-secondary-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-300">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                        <div className="flex items-start">
                            <Scale className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
                            <p className="text-purple-300 text-sm">
                                <span className="font-medium">Juridiction :</span> Les tribunaux marocains ont compétence exclusive sur tout litige
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services Offered */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Code className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">3.</span> Services Proposés
                        </div>
                    </h2>
                    <p className="text-neutral-300 mb-6">En tant qu'auto entrepreneur, je fournis les services de développement web suivants :</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {[
                            { text: "Conception et développement de pages d'atterrissage", icon: Globe },
                            { text: "Création de sites web multi-pages", icon: Code },
                            { text: "Développement de plateformes SaaS", icon: Settings },
                            { text: "Développement d'applications web personnalisées", icon: Briefcase },
                            { text: "Maintenance et mises à jour de sites web", icon: Settings },
                            { text: "Services d'optimisation SEO", icon: Globe },
                            { text: "Optimisation des performances", icon: Settings }
                        ].map((service, index) => (
                            <div key={index} className="flex items-center p-4 bg-dark-700/30 rounded-xl border border-white/5 hover:border-accent-500/20 transition-colors">
                                <service.icon className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                                <span className="text-neutral-300">{service.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                        <h4 className="text-purple-400 font-medium mb-4 flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2" />
                            Limitations du Service (Statut Auto Entrepreneur)
                        </h4>
                        <div className="space-y-3">
                            {[
                                "Aucun employé ne peut être embauché sous ce statut",
                                "Les services sont fournis en tant que contractant individuel",
                                "Le chiffre d'affaires annuel ne peut pas dépasser 200 000 MAD pour les services",
                                "Ne peut pas s'engager dans des activités professionnelles réglementées nécessitant des licences spéciales"
                            ].map((limitation, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                                    <span className="text-purple-300 text-sm">{limitation}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Acceptance of Terms */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">4.</span> Acceptation des Conditions
                        </div>
                    </h2>
                    <p className="text-neutral-300 mb-6">En :</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {[
                            { text: "Utilisant notre site web ou nos services", icon: Globe },
                            { text: "Soumettant un formulaire de contact ou une demande de projet", icon: Mail },
                            { text: "Concluant un accord de service", icon: FileText },
                            { text: "Effectuant un paiement pour des services", icon: CreditCard }
                        ].map((action, index) => (
                            <div key={index} className="flex items-center p-4 bg-dark-700/30 rounded-xl border border-white/5 hover:border-purple-500/20 transition-colors">
                                <action.icon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                                <span className="text-neutral-300">{action.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                        <div className="flex items-start">
                            <Shield className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
                            <p className="text-purple-300 text-sm">
                                Vous reconnaissez avoir lu, compris et accepté d'être lié par ces conditions
                            </p>
                        </div>
                    </div>
                </div>

                {/* Project Process */}
                <div className="group bg-dark-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 mb-8 transition-all duration-500 hover:-translate-y-1">
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:animate-pulse">
                            <Settings className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-purple-400">5.</span> Processus et Délais de Projet
                        </div>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-dark-700/30 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-secondary-400 font-medium mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                5.1 Initiation du Projet
                            </h4>
                            <div className="space-y-3">
                                {[
                                    "Consultation initiale et collecte des exigences",
                                    "Définition de la portée du projet et accord écrit",
                                    "Établissement du calendrier de paiement",
                                    "Confirmation de la chronologie"
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-secondary-400 rounded-full mr-3 mt-2"></div>
                                        <span className="text-neutral-300 text-sm">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-dark-700/30 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-secondary-400 font-medium mb-4 flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                5.2 Délais Standards
                            </h4>
                            <div className="space-y-3">
                                {[
                                    "Page d'atterrissage : 1 semaine",
                                    "Site web multi-pages : 3 semaines",
                                    "Plateforme SaaS : 2 mois",
                                    "Projets personnalisés : Selon accord écrit"
                                ].map((timeline, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 mt-2"></div>
                                        <span className="text-neutral-300 text-sm">{timeline}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-dark-700/30 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-secondary-400 font-medium mb-4 flex items-center">
                                <CheckCircle className="w-5 h-5 mr-2" />
                                5.3 Responsabilités du Client
                            </h4>
                            <div className="space-y-3">
                                {[
                                    "Fournir le contenu et les matériaux nécessaires rapidement",
                                    "Répondre aux communications dans les délais convenus",
                                    "Fournir des commentaires pendant les périodes de révision",
                                    "Effectuer les paiements selon le calendrier convenu"
                                ].map((responsibility, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                                        <span className="text-neutral-300 text-sm">{responsibility}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Informations de Contact</h2>
                        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                            Pour toute question concernant ces conditions ou nos services, veuillez nous contacter
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/20">
                            <h3 className="text-white font-medium mb-4 flex items-center justify-center">
                                <Building2 className="w-5 h-5 mr-2" />
                                Hassan El Berkaoui
                            </h3>
                            <p className="text-purple-100 text-sm mb-4">Auto Entrepreneur - Services de Développement Web</p>
                            <div className="space-y-3 text-purple-100 text-sm">
                                <div className="flex items-center justify-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    fentronly@gmail.com
                                </div>
                                <div className="flex items-center justify-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    +212 6 76 62 90 22
                                </div>
                                <div className="flex items-center justify-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    WhatsApp: +212 6 76 62 90 22
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