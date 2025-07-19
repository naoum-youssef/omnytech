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
  Send,
  CreditCard
} from 'lucide-react';





{/* Contact form events */}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Contact Form State Management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Contact Form Event Handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Nouvelle demande de contact de ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  // Mouse Position Tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  {/* */}


  return (
      <>
        {/* Hero Section with Purple Theme */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-20">
          {/* Dynamic Background with Purple Theme */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
            <div
                className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-4xl transition-all duration-500 ease-out"
                style={{
                  left: mousePosition.x / 10 - 192,
                  top: mousePosition.y / 10 - 192,
                }}
            ></div>
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Solutions Digitales Innovantes
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display leading-tight">
                  <span className="word-animate word-delay-1">Votre</span>{' '}
                  <span className="word-animate word-delay-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Vision,</span>
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
                      className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  >
                    <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Découvrir nos services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Nous contacter
                  </button>
                </div>

                {/* Stats with Purple Theme */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                  {[
                    { number: '50+', label: 'Projets Réalisés', icon: Rocket },
                    { number: '98%', label: 'Clients Satisfaits', icon: Heart },
                    { number: '24/7', label: 'Support', icon: Headphones }
                  ].map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                        <div key={stat.label} className="text-center lg:text-left">
                          <div className="flex items-center justify-center lg:justify-start mb-2">
                            <div className="w-8 h-8 bg-purple-500/20 rounded-xl flex items-center justify-center mr-2">
                              <IconComponent className="w-4 h-4 text-purple-400" />
                            </div>
                            <div className="text-3xl font-bold text-white">{stat.number}</div>
                          </div>
                          <div className="text-sm text-neutral-400">{stat.label}</div>
                        </div>
                    );
                  })}
                </div>
              </div>

              {/* Visual with Purple Theme */}
              <div className="relative animate-fade-in-up lg:animate-fade-in-right">
                <div className="relative">
                  {/* Main Image Container with Purple Accents */}
                  <div className="relative w-full h-96 bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-secondary-500/20"></div>

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
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-float group-hover:animate-pulse">
                          <Globe className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-white font-semibold text-lg">Solutions Digitales</div>
                        <div className="text-neutral-400 text-sm">Innovantes & Performantes</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements with Purple Theme */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center animate-pulse-glow border-4 border-white/20">
                    <span className="text-white font-bold text-lg">5+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center hover:border-purple-400 transition-colors">
              <ChevronDown className="w-6 h-6 text-white/60" />
            </div>
          </div>
        </section>

        {/* About Section with Purple Theme */}
        <section id="apropos" className="py-20 bg-dark-800 relative overflow-hidden">
          {/* Purple Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
            <div className="absolute inset-0 bg-noise opacity-[0.01]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                À Propos de Nous
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                <span className="word-animate word-delay-1">À</span>{' '}
                <span className="word-animate word-delay-2">Propos</span>{' '}
                <span className="word-animate word-delay-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">d'OmnyTech</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Une équipe passionnée dédiée à l'excellence technologique
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-dark-700 to-dark-900 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-secondary-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center mb-4 mx-auto">
                          <Award className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-white font-semibold text-xl mb-2">Excellence</div>
                        <div className="text-neutral-400">Notre engagement qualité</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center animate-pulse-glow border-4 border-white/20">
                    <span className="text-white font-bold text-lg">5+</span>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right space-y-6">
                <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4">Notre Mission</h3>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    Accompagner les entreprises dans leur transformation digitale en créant des solutions
                    sur mesure qui allient performance, design et innovation.
                  </p>
                </div>

                <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
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

                <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
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

        {/* Services Section with Purple Theme */}
        <section id="services" className="py-20 bg-dark-900 relative overflow-hidden">
          {/* Purple Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary-500/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
            <div className="absolute inset-0 bg-noise opacity-[0.01]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Nos Services
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                <span className="word-animate word-delay-1">Nos</span>{' '}
                <span className="word-animate word-delay-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Des solutions complètes pour répondre à tous vos besoins digitaux
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 - Purple Theme */}
              <div className="group relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl mx-auto flex items-center justify-center group-hover:animate-pulse-glow">
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
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                      Design responsive et moderne
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                      Optimisation SEO avancée
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                      Performance et sécurité
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                      CMS facile à utiliser
                    </li>
                  </ul>

                  <button
                      onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
                  >
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Service 2 */}
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

              {/* Service 3 */}
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

            {/* Technologies Section with Purple Theme */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 font-display">
                  <span className="word-animate word-delay-1">Technologies</span>{' '}
                  <span className="word-animate word-delay-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Maîtrisées</span>
                </h3>
                <p className="text-lg text-neutral-300">
                  Nous utilisons les dernières technologies pour garantir des solutions performantes
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {[
                  { name: 'React.js', color: 'text-blue-400' },
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
                        className="group flex flex-col items-center p-6 bg-dark-700/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
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

        {/* Pricing Section with Purple Theme */}
        <section id="offres" className="pricing-section py-20 bg-dark-800 relative overflow-hidden">
          {/* Purple Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
            <div className="absolute inset-0 bg-noise opacity-[0.01]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Nos Offres
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                <span className="word-animate word-delay-1">Tarifs</span>{' '}
                <span className="word-animate word-delay-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Transparents</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto auto-animate">
                Choisissez l'offre qui correspond parfaitement à vos besoins et votre budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Landing Page Package */}
              <div className="pricing-card card-animate card-delay-1 relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-1 rounded-full text-white text-xs font-semibold">
                    POPULAR
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Landing Page</h3>
                  <p className="text-neutral-400 mb-6">Perfect for getting started</p>

                  <div className="mb-8">
                    <div className="text-lg text-neutral-400 line-through mb-1">
                      4,643 MAD
                    </div>
                    <div className="inline-flex items-center bg-purple-500/20 px-3 py-1 rounded-full mb-3">
                      <span className="text-purple-400 text-sm font-semibold">30% OFF</span>
                    </div>
                    <div className="text-4xl font-bold text-neutral-300-400 mb-2">
                      3,250 MAD
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      Custom Design
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      Mobile Responsive
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      Contact Forms
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      SEO Optimized
                    </li>
                  </ul>

                  <button
                      onClick={() => window.open('https://wa.me/212694138093?text=Bonjour, je suis intéressé par l\'offre Landing Page (3,250 MAD). Pouvez-vous me donner plus d\'informations?', '_blank')}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Choisir cette offre
                  </button>
                </div>
              </div>

              {/* Website Package - Best Value */}
              <div className="pricing-card card-animate card-delay-2 relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-secondary-500/50 hover:border-secondary-500/70 transition-all duration-500">
                {/* Best Value Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1 rounded-full text-white text-xs font-semibold">
                    BEST VALUE
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">                    <Rocket className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Website</h3>
                  <p className="text-neutral-400 mb-6">Best value choice</p>

                  <div className="mb-8">
                    <div className="text-lg text-neutral-400 line-through mb-1">
                      8,186 MAD
                    </div>
                    <div className="inline-flex items-center bg-purple-500/20 px-3 py-1 rounded-full mb-3">
                      <span className="text-purple-400 text-sm font-semibold">30% OFF</span>
                    </div>
                    <div className="text-4xl font-bold text-neutral-300-400 mb-2">
                      5,730 MAD
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      Multi-page Site
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      CMS Integration
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      E-commerce Ready
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      adminDashboard
                    </li>
                  </ul>

                  <button
                      onClick={() => window.open('https://wa.me/212694138093?text=Bonjour, je suis intéressé par l\'offre Website (5,730 MAD). Pouvez-vous me donner plus d\'informations?', '_blank')}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Choisir cette offre
                  </button>
                </div>
              </div>

              {/* SaaS Platform Package - New */}
              <div className="pricing-card card-animate card-delay-3 relative bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent-500/30 transition-all duration-500">
                {/* New Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-1 rounded-full text-white text-xs font-semibold">
                    NEW
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">                    <Award className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">SaaS Platform</h3>
                  <p className="text-neutral-400 mb-6">For complex requirements</p>

                  <div className="mb-8">
                    <div className="text-lg text-neutral-400 line-through mb-1">
                      45,714 MAD
                    </div>
                    <div className="inline-flex items-center bg-purple-500/20 px-3 py-1 rounded-full mb-3">
                      <span className="text-purple-400 text-sm font-semibold">30% OFF</span>
                    </div>
                    <div className="text-4xl font-bold text-neutral-300-400 mb-2">
                      32,000 MAD
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      100% Custom
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      Payment System
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      User Dashboard
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      Full Deployment
                    </li>
                  </ul>

                  <button
                      onClick={() => window.open('https://wa.me/212694138093?text=Bonjour, je suis intéressé par l\'offre SaaS Platform (32,000 MAD). Pouvez-vous me donner plus d\'informations?', '_blank')}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Choisir cette offre
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info with Purple Theme */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 auto-animate">Besoin d'une solution personnalisée ?</h3>
                <p className="text-neutral-300 mb-6 max-w-2xl mx-auto auto-animate">
                  Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques
                  et obtenir un devis personnalisé adapté à votre budget.
                </p>
                <button
                    onClick={() => window.open('https://wa.me/212694138093?text=Bonjour, j,ai un Besoin d,une solution personnalisée\'informations?', '_blank')}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Discutons de votre projet
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Purple Theme */}
        <section className="stats-section py-20 bg-gradient-to-r from-purple-900/50 to-primary-900/50 backdrop-blur-sm relative overflow-hidden">
          {/* Purple Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 font-display">
                <span className="word-animate word-delay-1">Nos</span>{' '}
                <span className="word-animate word-delay-2">Résultats</span>{' '}
                <span className="word-animate word-delay-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">en</span>{' '}
                <span className="word-animate word-delay-4">Chiffres</span>
              </h3>

              <p className="text-xl text-neutral-300 auto-animate">
                La confiance de nos clients, notre plus belle récompense
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projets Réalisés', icon: Rocket, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                { number: '98%', label: 'Clients Satisfaits', icon: Heart, color: 'text-secondary-400', bg: 'bg-secondary-500/10' },
                { number: '24/7', label: 'Support Technique', icon: Headphones, color: 'text-accent-400', bg: 'bg-accent-500/10' },
                { number: '5+', label: 'Années d\'Expérience', icon: Award, color: 'text-purple-400', bg: 'bg-purple-500/10' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                    <div
                        key={stat.label}
                        className={`counter-animate counter-delay-${index + 1} text-center ${stat.bg} backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1`}
                    >
                      <div className={`w-16 h-16 ${stat.bg} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
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

        {/* Contact Section with Purple Theme */}
        <section id="contact" className="py-20 bg-dark-900 relative overflow-hidden">
          {/* Purple Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
            <div className="absolute inset-0 bg-noise opacity-[0.01]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Prêt à Démarrer Votre <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse select-none">Projet</span> ?
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Nos réalisations avec Purple Theme */}
              <div className="animate-slide-in-left">
                <div className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-white mb-6 font-display">
                    Nos Projets Réalisés
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Systech Consulting */}
                    <div className="group relative bg-dark-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300">
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
                            className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm mt-2"
                        >
                          Voir le site
                        </a>
                      </div>
                    </div>

                    {/* Vip Marrakech Trips */}
                    <div className="group relative bg-dark-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-secondary-500/30 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="/images/achievements/marrakech-luxury-travel-experiences-vip-tours-morocco.webp"
                            alt="VIP Marrakech Trips - Luxury Travel Experiences Morocco"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-white mb-1">VIP Marrakech Trips</h4>
                        <p className="text-sm text-neutral-400">VIP Marrakech Trips - Travel Booking Platform Morocco</p>
                        <a
                            href="https://www.vipmarrakechtrips.com/"
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

                    {/* Red City Balloons */}
                    <div className="group relative bg-dark-800/50 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                            src="/images/achievements/marrakech-sunrise-balloon-flights-atlas-mountains-morocco.webp"
                            alt="Red City Balloons - Hot Air Balloon Flights Marrakech Morocco"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-white mb-1">Red City Balloons</h4>
                        <p className="text-sm text-neutral-400">Red City Balloons - Balloon Flight Booking Platform Morocco</p>
                        <a
                            href="https://www.redcityballoons.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm mt-2"
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



              {/* Contact Form with Purple Theme */}
              <div className="animate-slide-in-right">
                <form onSubmit={handleSubmit} className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
                  {/* Status Messages */}
                  {status === 'success' && (
                      <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center text-green-300">
                        <CheckCircle className="w-5 h-5 mr-3" />
                        Message envoyé avec succès! Nous vous répondrons dans les 24h.
                      </div>
                  )}

                  {status === 'error' && (
                      <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center text-red-300">
                        <X className="w-5 h-5 mr-3" />
                        Erreur lors de l'envoi. Veuillez réessayer.
                      </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Nom complet *
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-dark-800">Sélectionnez un service</option>
                      <option value="site-vitrine" className="bg-dark-800">Landing Page (3,250 MAD)</option>
                      <option value="site-pro" className="bg-dark-800">Website Pro (5,730 MAD)</option>
                      <option value="sas-platform" className="bg-dark-800">SaaS Platform (32,000 MAD)</option>
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
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-dark-800">Sélectionnez votre budget</option>
                      <option value="5k-15k" className="bg-dark-800">3,250 - 5,730 MAD</option>
                      <option value="15k-35k" className="bg-dark-800">5,730 - 32,000 MAD</option>
                      <option value="35k-75k" className="bg-dark-800">+ 32,000 MAD</option>
                      <option value="75k+" className="bg-dark-800">Autre</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                      Délai souhaité
                    </label>
                    <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Décrivez votre projet en détail..."
                    />
                  </div>

                  <button
                      type="submit"
                      disabled={loading}
                      className="group w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Envoi en cours...
                        </>
                    ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Envoyer le message
                        </>
                    )}
                  </button>

                  <p className="text-sm text-neutral-400 mt-4 text-center">
                    * Champs obligatoires. Nous vous répondrons dans les 24h.
                  </p>
                </form>
              </div>
            </div>


            {/* How we work */}

            <section className="py-20 bg-dark-900 relative overflow-hidden">
              {/* Purple Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
                <div className="absolute inset-0 bg-noise opacity-[0.01]"></div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 text-purple-400 text-sm mb-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Comment Ça Marche
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 font-display">
                    Processus{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Simple</span>,{' '}
                    Résultats{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Garantis</span>
                  </h3>

                  <p className="text-xl text-neutral-300">
                    De l'idée au lancement en 4 étapes simples. Pas de confusion, pas de retards, que des résultats.
                  </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Phone,
                      title: "Appel Stratégique",
                      description: "Nous organisons un appel pour discuter de votre vision, objectifs et exigences en détail",
                      color: 'text-secondary-400',
                      bg: 'bg-secondary-500/10'
                    },

                    {
                      icon: CreditCard,
                      title: "Choisir et Payer",
                      description: "Sélectionnez votre forfait et sécurisez le paiement pour débloquer immédiatement votre créneau de projet",
                      color: 'text-purple-400',
                      bg: 'bg-purple-500/10'
                    },

                    {
                      icon: Zap,
                      title: "Je Construis",
                      description: "Mises à jour quotidiennes sur les progrès pendant que je conçois et développe votre solution personnalisée",
                      color: 'text-accent-400',
                      bg: 'bg-accent-500/10'
                    },
                    {
                      icon: Rocket,
                      title: "Lancement",
                      description: "Votre projet est mis en ligne exactement comme promis, entièrement testé et optimisé",
                      color: 'text-purple-400',
                      bg: 'bg-purple-500/10'
                    }
                  ].map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                        <div
                            key={index}
                            className="text-center bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 relative shadow-xl"
                        >
                          {/* Connector Line */}
                          {index < 3 && (
                              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-purple-500/20 transform -translate-y-1/2 z-0"></div>
                          )}

                          {/* Icon */}
                          <div className="w-16 h-16 bg-purple-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center relative z-10 shadow-lg">
                            <IconComponent className="w-8 h-8 text-purple-400" />
                          </div>

                          {/* Content */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2 font-display">{step.title}</h4>
                            <p className="text-neutral-300 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                    );
                  })}
                </div>

                {/* Additional info section */}
                <div className="mt-16 text-center">
                  <div className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">
                      Prêt à commencer ?
                    </h3>
                    <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                      Rejoignez plus de 50 clients satisfaits qui ont fait confiance à notre processus éprouvé
                      pour transformer leurs idées en succès digitaux.
                    </p>
                    <button
                        onClick={() => window.open('https://wa.me/212694138093?text=Bonjour, je voudrais en savoir plus sur votre processus de développement.', '_blank')}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Démarrer mon projet
                    </button>
                  </div>
                </div>
              </div>
            </section>



            {/* FAQ Section with Purple Theme */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4 font-display auto-animate">
                  Questions <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Fréquentes</span>
                </h3>
                <p className="text-lg text-neutral-300">
                  Trouvez rapidement les réponses à vos questions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    question: "Quel est le délai moyen pour un projet ?",
                    answer: "Le délai varie selon la complexité : 1 semaine pour une landing page, 3 semaines pour un site web professionnel, et 2 mois pour une plateforme SaaS."
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
                    <div key={index} className="faq-item bg-dark-700/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/20 transition-all duration-300 overflow-hidden">
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
                        <div className="faq-icon text-purple-400 transition-transform duration-300 flex-shrink-0">
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

        {/* Floating Action Button with Purple Theme */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-full shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:animate-bounce" />
          </button>
        </div>

        {/* Scroll to Top Button with Purple Theme */}
        <div className="fixed bottom-8 left-8 z-50">
          <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group w-12 h-12 bg-dark-800/80 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <ChevronDown className="w-5 h-5 text-white rotate-180 group-hover:animate-bounce" />
          </button>
        </div>
      </>
  );
}