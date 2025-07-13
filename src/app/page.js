'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Flame,
  Code,
  Smartphone,
  Palette,
  Zap,
  Shield,
  Globe,
  Rocket,
  Users,
  Star,
  Check,
  ArrowRight,
  Monitor,
  Database,
  Cloud,
  Heart,
  Award,
  TrendingUp,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Play,
  ChevronDown,
  Target,
  Eye,
  Lightbulb,
  ArrowUpRight,
  CheckCircle,
  X,
  Sparkles,
  Timer,
  Headphones,
  Send
} from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
      <>
        {/* Hero Section with Advanced Design */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
            <div
                className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-4xl transition-all duration-500 ease-out"
                style={{
                  left: mousePosition.x / 10 - 192,
                  top: mousePosition.y / 10 - 192,
                }}
            ></div>
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary-500/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-primary-300 text-sm font-medium mb-6">

                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display leading-tight">
                    <span className="word-animate word-delay-1">Votre</span>{' '}
                    <span className="word-animate word-delay-2">Vision,</span>
                    <span className="block">
                    <span className="word-animate word-delay-3">Notre</span>{' '}
                    <span className="word-animate word-delay-4">Expertise</span>
          </span>
                </h1>

                <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up">
                  OmnyTech transforme vos idées en solutions digitales innovantes.
                  Développement web, applications mobiles et solutions sur mesure.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                  <button
                      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group relative inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Découvrir nos services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Nous contacter
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-sm text-neutral-400">Projets Réalisés</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-sm text-neutral-400">Clients Satisfaits</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-neutral-400">Support</div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative animate-fade-in-up lg:animate-fade-in-right">
                <div className="relative">
                  {/* Main Image Placeholder */}
                  <div className="relative w-full h-96 bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>

                    {/* Floating Icons */}
                    <div className="absolute top-6 left-6 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <Code className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <Smartphone className="w-6 h-6 text-secondary-400" />
                    </div>
                    <div className="absolute bottom-6 left-6 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <Database className="w-6 h-6 text-accent-400" />
                    </div>
                    <div className="absolute bottom-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <Cloud className="w-6 h-6 text-primary-400" />
                    </div>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto animate-float">
                          <Globe className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-white font-semibold text-lg">Solutions Digitales</div>
                        <div className="text-neutral-400 text-sm">Innovantes & Performantes</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center animate-pulse-glow">
                    <span className="text-white font-bold text-lg">+5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </section>

        {/* About Section */}
        <section id="apropos" className="py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                À Propos de Nous
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                <span className="word-animate word-delay-1">À</span>{' '}
                <span className="word-animate word-delay-2">Propos</span>{' '}
                <span className="word-animate word-delay-3">d'</span><span className="word-animate word-delay-4">OmnyTech</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Une équipe passionnée dédiée à l'excellence technologique
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-dark-700 to-dark-900 rounded-3xl border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mb-4 mx-auto">
                          <Award className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-white font-semibold text-xl mb-2">Excellence</div>
                        <div className="text-neutral-400">Notre engagement qualité</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center animate-pulse-glow">
                    <span className="text-white font-bold text-lg">+5</span>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right space-y-6">
                <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                      <Target className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4">Notre Mission</h3>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    Accompagner les entreprises dans leur transformation digitale en créant des solutions
                    sur mesure qui allient performance, design et innovation.
                  </p>
                </div>

                <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-secondary-500/30 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center group-hover:bg-secondary-500/30 transition-colors">
                      <Eye className="w-6 h-6 text-secondary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4">Notre Vision</h3>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    Devenir le partenaire de référence pour les entreprises souhaitant exceller
                    dans le monde numérique grâce à notre expertise technique et créative.
                  </p>
                </div>

                <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent-500/30 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center group-hover:bg-accent-500/30 transition-colors">
                      <Lightbulb className="w-6 h-6 text-accent-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4">Nos Valeurs</h3>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    Excellence, innovation, transparence et collaboration sont au cœur de notre approche
                    pour garantir la réussite de chaque projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Nos Services
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                <span className="word-animate word-delay-1">Nos</span>{' '}
                <span className="word-animate word-delay-2">Services</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Des solutions complètes pour répondre à tous vos besoins digitaux
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 - Création de site web */}
              <div className="group relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center group-hover:animate-pulse-glow">
                      <Monitor className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-ping"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    Création de Site Web
                  </h3>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Sites web modernes, responsives et optimisés SEO. De la vitrine e-commerce aux plateformes complexes.
                  </p>

                  <ul className="space-y-3 text-sm text-neutral-400 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary-400 mr-3" />
                      Design responsive et moderne
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary-400 mr-3" />
                      Optimisation SEO avancée
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary-400 mr-3" />
                      Performance et sécurité
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary-400 mr-3" />
                      CMS facile à utiliser
                    </li>
                  </ul>

                  <button
                      onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group w-full bg-gradient-primary text-white font-semibold py-3 px-6 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Service 2 - Développement Web sur Mesure */}
              <div className="group relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-secondary-500/30 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-2xl mx-auto flex items-center justify-center group-hover:animate-pulse-glow" style={{animationDelay: '1s'}}>
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    Développement Web sur Mesure
                  </h3>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Solutions web personnalisées adaptées à vos besoins spécifiques et processus métier.
                  </p>

                  <ul className="space-y-3 text-sm text-neutral-400 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary-400 mr-3" />
                      Applications web complexes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary-400 mr-3" />
                      Intégrations API avancées
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary-400 mr-3" />
                      Tableaux de bord sur mesure
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary-400 mr-3" />
                      Solutions e-commerce avancées
                    </li>
                  </ul>

                  <button
                      onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group w-full bg-gradient-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-glow-green hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Service 3 - Applications Mobiles */}
              <div className="group relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent-500/30 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl mx-auto flex items-center justify-center group-hover:animate-pulse-glow" style={{animationDelay: '2s'}}>
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    Applications Mobiles
                  </h3>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Applications mobiles natives et cross-platform pour iOS et Android, performantes et intuitives.
                  </p>

                  <ul className="space-y-3 text-sm text-neutral-400 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-400 mr-3" />
                      Applications natives iOS/Android
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-400 mr-3" />
                      Solutions cross-platform
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-400 mr-3" />
                      UX/UI optimisée mobile
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent-400 mr-3" />
                      Publication sur les stores
                    </li>
                  </ul>

                  <button
                      onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-semibold py-3 px-6 rounded-xl shadow-glow-yellow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 font-display">
                  <span className="word-animate word-delay-1">Technologies</span>{' '}
                  <span className="word-animate word-delay-2">Maîtrisées</span>
                </h3>
                <p className="text-lg text-neutral-300">
                  Nous utilisons les dernières technologies pour garantir des solutions performantes
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {[
                  { name: 'React', color: 'text-blue-400' },
                  { name: 'Next.js', color: 'text-white' },
                  { name: 'Angular', color: 'text-red-500' },
                  { name: 'Spring Boot', color: 'text-green-400' },
                  { name: 'Python', color: 'text-yellow-400' },
                  { name: 'Laravel', color: 'text-red-400' },
                  { name: 'Flutter', color: 'text-blue-500' },
                  { name: 'Kotlin', color: 'text-orange-400' }

                ].map((tech, index) => (
                    <div
                        key={tech.name}
                        className="group flex flex-col items-center p-6 bg-dark-700/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                        style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="w-12 h-12 mb-3 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                        <div className={`w-full h-full ${tech.color} flex items-center justify-center text-2xl font-bold`}>
                          {tech.name.charAt(0)}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">{tech.name}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Pricing Section - Nos Offres */}
        <section id="offres" className="pricing-section py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Nos Offres
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                <span className="word-animate word-delay-1">Tarifs</span>{' '}
                <span className="word-animate word-delay-2">Transparents</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto auto-animate">
                Choisissez l'offre qui correspond parfaitement à vos besoins et votre budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Package */}
              <div className="pricing-card card-animate card-delay-1 relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-primary-500/30 transition-all duration-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 auto-animate">Site Vitrine</h3>
                  <p className="text-neutral-400 mb-6 auto-animate">Parfait pour débuter votre présence en ligne</p>

                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-2">
                      15,000 <span className="text-lg font-normal text-neutral-400">MAD</span>
                    </div>
                    <div className="text-sm text-neutral-400">Projet complet</div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      Site responsive (mobile/tablet/desktop)
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      Jusqu'à 5 pages
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      Optimisation SEO de base
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      Formulaire de contact
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      Support 3 mois
                    </li>
                  </ul>

                  <button
                      onClick={() => {
                        localStorage.setItem('selectedPackage', 'Site Pro - 35,000 MAD');
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-gradient-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-glow-green hover:shadow-glow-lg transition-all duration-300"
                  >
                    Choisir cette offre
                  </button>
                </div>
              </div>

              {/* Professional Package - Popular */}
              <div className="pricing-card card-animate card-delay-2 relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-secondary-500/50 hover:border-secondary-500/70 transition-all duration-500">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-black-500 via-green-600 to-black-700 px-6 py-2 rounded-full text-white text-sm font-semibold flex items-center shadow-lg border border-green-400/30 backdrop-blur-sm">
                    <Flame className="w-4 h-4 mr-2 text-orange-300 drop-shadow-sm animate-pulse" />
                    Populaire
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 auto-animate">Site Pro</h3>
                  <p className="text-neutral-400 mb-6 auto-animate">Solution complète pour les entreprises</p>

                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-2">
                      35,000 <span className="text-lg font-normal text-neutral-400">MAD</span>
                    </div>
                    <div className="text-sm text-neutral-400">Projet complet</div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                      Site responsive avec animations
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                      Jusqu'à 15 pages
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                      Optimisation SEO avancée
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                      CMS personnalisé
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                      E-commerce (jusqu'à 50 produits)
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                      Intégrations tiers
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                      Hébergement 1 an inclus
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" />
                      Support 6 mois
                    </li>
                  </ul>

                  <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-gradient-primary text-white font-semibold py-3 px-6 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
                  >
                    Choisir cette offre
                  </button>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="pricing-card card-animate card-delay-3 relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent-500/30 transition-all duration-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 auto-animate">Solution Enterprise</h3>
                  <p className="text-neutral-400 mb-6 auto-animate">Sur mesure pour les grandes entreprises</p>

                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-2">
                      Sur <span className="text-lg font-normal text-neutral-400">Devis</span>
                    </div>
                    <div className="text-sm text-neutral-400">Selon vos besoins</div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      Application web complexe
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      Pages illimitées
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      Architecture sur mesure
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      API personnalisées
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      Tableau de bord avancé
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      Sécurité renforcée
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      Support prioritaire 24/7
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0" />
                      Formation équipe
                    </li>
                  </ul>

                  <button
                      onClick={() => {
                        localStorage.setItem('selectedPackage', 'Solution Enterprise - Sur Devis');
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-semibold py-3 px-6 rounded-xl shadow-glow-yellow hover:shadow-glow-lg transition-all duration-300"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <div className="bg-dark-700/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 auto-animate">Besoin d'une solution personnalisée ?</h3>
                <p className="text-neutral-300 mb-6 max-w-2xl mx-auto auto-animate">
                  Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques
                  et obtenir un devis personnalisé adapté à votre budget.
                </p>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Discutons de votre projet
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section py-20 bg-gradient-to-r from-primary-900/50 to-secondary-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 font-display">
                <span className="word-animate word-delay-1">Nos</span>{' '}
                <span className="word-animate word-delay-2">Résultats</span>{' '}
                <span className="word-animate word-delay-3">en</span>{' '}
                <span className="word-animate word-delay-4">Chiffres</span>
              </h3>

              <p className="text-xl text-neutral-300 auto-animate">
                La confiance de nos clients, notre plus belle récompense
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projets Réalisés', icon: Rocket, color: 'text-primary-400' },
                { number: '98%', label: 'Clients Satisfaits', icon: Heart, color: 'text-secondary-400' },
                { number: '24/7', label: 'Support Technique', icon: Headphones, color: 'text-accent-400' },
                { number: '5+', label: 'Années d\'Expérience', icon: Award, color: 'text-primary-400' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                    <div
                        key={stat.label}
                        className={`counter-animate counter-delay-${index + 1} text-center bg-dark-700/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10`}
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="text-4xl font-bold text-white mb-2 font-display">
                        <span className="counter-number" data-target={stat.number}>0</span>
                      </div>
                      <div className="text-neutral-300">{stat.label}</div>
                    </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* Contact Section */}

        <section id="contact" className="py-20 bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Prêt à Démarrer Votre <span className="text-primary-400 drop-shadow-[0_0_10px_rgba(14,165,233,0.5)] animate-pulse select-none">Projet</span> ?
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">



              {/* Nos réalisations */}
              <div className="animate-slide-in-left">
                <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 font-display">
                    Nos Projets Réalisés
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Systech Consulting */}
                    <div className="group relative bg-dark-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="/images/achievements/systech-consulting-website-development-casablanca-morocco.webp"
                            alt="Systech Consulting - Développement site web Casablanca"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-white mb-1">Systech Consulting</h4>
                        <p className="text-sm text-neutral-400">Site vitrine professionnel</p>
                        <a
                            href="https://systech-consulting.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm mt-2"
                        >
                          Voir le site
                        </a>
                      </div>
                    </div>

                    {/* IdasFish */}
                    <div className="group relative bg-dark-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-secondary-500/30 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="/images/achievements/idasfish-ecommerce-aquaculture-website-morocco.webp"
                            alt="IdasFish - E-commerce aquaculture Maroc"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-white mb-1">IdasFish</h4>
                        <p className="text-sm text-neutral-400">E-commerce aquaculture</p>
                        <a
                            href="https://idasfish.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-secondary-400 hover:text-secondary-300 text-sm mt-2"
                        >
                          Voir le site
                        </a>
                      </div>
                    </div>

                    {/* DouSun */}
                    <div className="group relative bg-dark-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-accent-500/30 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="/images/achievements/dousun-solar-energy-website-development-morocco.webp"
                            alt="DouSun - Site web énergie solaire Maroc"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-white mb-1">DouSun</h4>
                        <p className="text-sm text-neutral-400">Énergie solaire</p>
                        <a
                            href="https://dousun.ma/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-accent-400 hover:text-accent-300 text-sm mt-2"
                        >
                          Voir le site
                        </a>
                      </div>
                    </div>

                    {/* Zarine Accessoires */}
                    <div className="group relative bg-dark-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="/images/achievements/zarine-accessoires-ecommerce-fashion-website-morocco.webp"
                            alt="Zarine Accessoires - E-commerce mode Maroc"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-white mb-1">Zarine Accessoires</h4>
                        <p className="text-sm text-neutral-400">E-commerce mode</p>
                        <a
                            href="https://zarineaccessoires.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm mt-2"
                        >
                          Voir le site
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="font-semibold text-white mb-4">Plus de projets</h4>
                    <div className="flex space-x-4">
                      <a
                          href="https://hess.ma/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 p-3 bg-dark-800/50 rounded-lg border border-white/10 hover:border-secondary-500/30 transition-all duration-300"
                      >
                        <p className="font-medium text-white text-sm">HESS</p>
                        <p className="text-xs text-neutral-400">Services environnementaux</p>
                      </a>

                      <a
                          href="https://exxing.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 p-3 bg-dark-800/50 rounded-lg border border-white/10 hover:border-accent-500/30 transition-all duration-300"
                      >
                        <p className="font-medium text-white text-sm">Exxing</p>
                        <p className="text-xs text-neutral-400">Conseil & investissement</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}

              <div className="animate-slide-in-right">
                <form className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Nom complet *
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Téléphone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="+212 XXX-XXXXXX"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service souhaité *
                    </label>
                    <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-dark-800">Sélectionnez un service</option>
                      <option value="site-vitrine" className="bg-dark-800">Site Vitrine (15,000 MAD)</option>
                      <option value="site-pro" className="bg-dark-800">Site Pro (35,000 MAD)</option>
                      <option value="solution-enterprise" className="bg-dark-800">Solution Enterprise (Sur devis)</option>
                      <option value="application-mobile" className="bg-dark-800">Application mobile</option>
                      <option value="autre" className="bg-dark-800">Autre</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                      Budget estimé
                    </label>
                    <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-dark-800">Sélectionnez votre budget</option>
                      <option value="5k-15k" className="bg-dark-800">5,000 - 15,000 MAD</option>
                      <option value="15k-35k" className="bg-dark-800">15,000 - 35,000 MAD</option>
                      <option value="35k-75k" className="bg-dark-800">35,000 - 75,000 MAD</option>
                      <option value="75k+" className="bg-dark-800">75,000+ MAD</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                      Délai souhaité
                    </label>
                    <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-dark-800">Sélectionnez un délai</option>
                      <option value="urgent" className="bg-dark-800">Urgent (2-4 semaines)</option>
                      <option value="normal" className="bg-dark-800">Normal (1-2 mois)</option>
                      <option value="flexible" className="bg-dark-800">Flexible (2-3 mois)</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Décrivez votre projet en détail..."
                    ></textarea>
                  </div>

                  <button
                      type="submit"
                      className="group w-full bg-gradient-primary text-white font-semibold py-4 px-6 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </button>

                  <p className="text-sm text-neutral-400 mt-4 text-center">
                    * Champs obligatoires. Nous vous répondrons dans les 24h.
                  </p>
                </form>
              </div>
            </div>


            {/* FAQ Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 font-display auto-animate">
                  Questions Fréquentes
                </h3>
                <p className="text-lg text-neutral-300">
                  Trouvez rapidement les réponses à vos questions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    question: "Quel est le délai moyen pour un projet ?",
                    answer: "Le délai varie selon la complexité : 2-4 semaines pour un site vitrine, 1-2 mois pour un site pro, et 2-6 mois pour une solution enterprise."
                  },
                  {
                    question: "Proposez-vous la maintenance après livraison ?",
                    answer: "Oui, nous offrons différents plans de maintenance incluant mises à jour, sauvegardes, sécurité et support technique."
                  },
                  {
                    question: "Peut-on modifier le site après la livraison ?",
                    answer: "Absolument ! Tous nos sites incluent un CMS facile à utiliser. Nous proposons aussi des formations pour votre équipe."
                  },
                  {
                    question: "Les sites sont-ils optimisés pour mobile ?",
                    answer: "Tous nos sites sont responsive design et optimisés pour tous les appareils (mobile, tablette, desktop)."
                  }
                ].map((faq, index) => (
                    <div key={index} className="faq-item bg-dark-700/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                      <button
                          className="faq-question w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                          onClick={(e) => {
                            const faqItem = e.target.closest('.faq-item');
                            const answer = faqItem.querySelector('.faq-answer');
                            const icon = faqItem.querySelector('.faq-icon');

                            // Toggle the answer visibility
                            if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                              answer.style.maxHeight = '0px';
                              answer.style.opacity = '0';
                              icon.style.transform = 'rotate(0deg)';
                              faqItem.classList.remove('active');
                            } else {
                              // Close other open FAQs (optional - remove if you want multiple open)
                              document.querySelectorAll('.faq-item').forEach(item => {
                                if (item !== faqItem) {
                                  const otherAnswer = item.querySelector('.faq-answer');
                                  const otherIcon = item.querySelector('.faq-icon');
                                  otherAnswer.style.maxHeight = '0px';
                                  otherAnswer.style.opacity = '0';
                                  otherIcon.style.transform = 'rotate(0deg)';
                                  item.classList.remove('active');
                                }
                              });

                              // Open this FAQ
                              answer.style.maxHeight = answer.scrollHeight + 'px';
                              answer.style.opacity = '1';
                              icon.style.transform = 'rotate(180deg)';
                              faqItem.classList.add('active');
                            }
                          }}
                      >
                        <h4 className="text-lg font-semibold text-white pr-4">{faq.question}</h4>
                        <div className="faq-icon text-primary-400 transition-transform duration-300 flex-shrink-0">
                          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div
                          className="faq-answer overflow-hidden transition-all duration-300 ease-in-out"
                          style={{
                            maxHeight: '0px',
                            opacity: '0'
                          }}
                      >
                        <div className="p-6 pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
  );
}