'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Star, Facebook, Linkedin, Twitter, Instagram, Phone, Mail, MapPin, Send, Globe } from 'lucide-react';

// Navigation Component with Purple Theme
function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['accueil', 'apropos', 'services', 'offres', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-gradient-to-r from-dark-900/95 via-purple-900/90 to-dark-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10'
                : 'bg-transparent'
        }`}>
            {/* Purple glow effect when scrolled */}
            {isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-purple-500/10 to-purple-600/5 pointer-events-none"></div>
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo with Purple Theme */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-purple-500/25">
                            <span className="text-white font-bold text-lg">O</span>
                        </div>
                        <span className="text-xl font-bold font-display text-white">
                            OmnyTech
                        </span>
                    </div>

                    {/* Desktop Navigation with Purple Theme */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {[
                                { id: 'accueil', label: 'Accueil' },
                                { id: 'apropos', label: 'À Propos' },
                                { id: 'services', label: 'Services' },
                                { id: 'offres', label: 'Nos Offres', highlight: true },
                                { id: 'contact', label: 'Contact' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'bg-purple-500/20 text-purple-400 shadow-2xl shadow-purple-500/25 border border-purple-500/30'
                                            : 'text-neutral-300 hover:text-white hover:bg-purple-500/10 hover:border-purple-500/20'
                                    } ${item.highlight ? 'border border-accent-500/30 bg-accent-500/5' : 'border border-transparent'}`}
                                >
                                    {item.highlight && (
                                        <Star className="w-4 h-4 inline mr-2 text-accent-400" />
                                    )}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button with Purple Theme */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with Purple Theme */}
            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-r from-dark-900/98 via-purple-900/95 to-dark-900/98 backdrop-blur-xl border-b border-purple-500/20 animate-fade-in-down">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-purple-500/10 to-purple-600/5 pointer-events-none"></div>
                    <div className="relative z-10 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {[
                            { id: 'accueil', label: 'Accueil' },
                            { id: 'apropos', label: 'À Propos' },
                            { id: 'services', label: 'Services' },
                            { id: 'offres', label: 'Nos Offres', highlight: true },
                            { id: 'contact', label: 'Contact' }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center w-full text-left px-3 py-3 rounded-xl text-base font-medium transition-all duration-300 border ${
                                    activeSection === item.id
                                        ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                                        : 'text-neutral-300 hover:bg-purple-500/10 hover:text-white border-transparent hover:border-purple-500/20'
                                } ${item.highlight ? 'border-accent-500/30 bg-accent-500/5' : ''}`}
                            >
                                {item.highlight && (
                                    <Star className="w-4 h-4 mr-2 text-accent-400" />
                                )}
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

// Footer Component with Purple Theme
function Footer() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative bg-gradient-to-r from-dark-950 via-purple-950/50 to-dark-950 border-t border-purple-500/20 text-white py-16 overflow-hidden">
            {/* Purple Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
                <div className="noise-overlay"></div>
            </div>

            {/* Purple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-purple-500/10 to-purple-600/5 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info with Purple Theme */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mr-4 shadow-xl shadow-purple-500/25">
                                <span className="text-white font-bold text-xl">O</span>
                            </div>
                            <span className="text-2xl font-bold font-display text-white">
                                OmnyTech
                            </span>
                        </div>
                        <p className="text-neutral-300 mb-8 max-w-md leading-relaxed">
                            Votre partenaire de confiance pour la transformation digitale.
                            Nous créons des solutions web et mobiles innovantes qui propulsent votre entreprise vers l'avenir.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, name: 'Facebook', color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20' },
                                { Icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-600', bg: 'hover:bg-blue-600/20' },
                                { Icon: Twitter, name: 'Twitter', color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/20' },
                                { Icon: Instagram, name: 'Instagram', color: 'hover:text-pink-400', bg: 'hover:bg-pink-500/20' }
                            ].map(({ Icon, name, color, bg }) => (
                                <a
                                    key={name}
                                    href="#"
                                    className={`w-12 h-12 bg-white/5 ${bg} rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-neutral-400 ${color} border border-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25`}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links with Purple Theme */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 font-display text-white flex items-center">
                            <div className="w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center mr-2">
                                <Globe className="w-4 h-4 text-purple-400" />
                            </div>
                            Liens Rapides
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Accueil', id: 'accueil' },
                                { label: 'À Propos', id: 'apropos' },
                                { label: 'Services', id: 'services' },
                                { label: 'Nos Offres', id: 'offres' },
                                { label: 'Contact', id: 'contact' }
                            ].map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-neutral-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
                                    >
                                        <span className="group-hover:mr-2 transition-all duration-300 text-purple-500">→</span>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info & Newsletter with Purple Theme */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 font-display text-white flex items-center">
                            <div className="w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center mr-2">
                                <Mail className="w-4 h-4 text-purple-400" />
                            </div>
                            Contact
                        </h3>
                        <ul className="space-y-3 text-neutral-300 mb-8">
                            <li className="flex items-center p-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mr-3">
                                    <Phone className="text-primary-400 w-4 h-4" />
                                </div>
                                <span className="text-sm">+212 6 94 13 80 93</span>
                            </li>
                            <li className="flex items-center p-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                                <div className="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center mr-3">
                                    <Mail className="text-secondary-400 w-4 h-4" />
                                </div>
                                <span className="text-sm">contact@omnytech.com</span>
                            </li>
                            <li className="flex items-center p-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center mr-3">
                                    <MapPin className="text-accent-400 w-4 h-4" />
                                </div>
                                <span className="text-sm">Marrakech, Maroc</span>
                            </li>
                        </ul>

                        {/* Newsletter with Purple Theme */}
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4 backdrop-blur-sm">
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                                <Send className="w-4 h-4 mr-2 text-purple-400" />
                                Newsletter
                            </h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="flex-1 px-3 py-2 bg-dark-800/50 border border-white/10 rounded-l-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all duration-300"
                                />
                                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-r-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom with Purple Theme */}
                <div className="border-t border-purple-500/20 mt-12 pt-8 bg-purple-500/5 rounded-2xl backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-neutral-400 text-sm flex items-center">
                            <span className="text-purple-400 mr-2">©</span>
                            2025 OmnyTech. Tous droits réservés.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link
                                href="/privacy-policy"
                                className="text-neutral-400 hover:text-purple-400 text-sm transition-colors duration-300 hover:underline decoration-purple-500"
                            >
                                Politique de confidentialité
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-neutral-400 hover:text-purple-400 text-sm transition-colors duration-300 hover:underline decoration-purple-500"
                            >
                                Conditions de service
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>
        </footer>
    );
}

export default function ClientLayout({ children }) {
    return (
        <div className="min-h-screen bg-dark-900">
            <Navigation />
            <main className="relative">
                {children}
            </main>
            <Footer />
        </div>
    );
}