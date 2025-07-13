'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Star, Facebook, Linkedin, Twitter, Instagram, Phone, Mail, MapPin, Send } from 'lucide-react';

// Navigation Component
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
            isScrolled ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-lg">O</span>
                        </div>
                        <span className="text-xl font-bold font-display text-white">
  OmnyTech
</span>
                    </div>

                    {/* Desktop Navigation */}
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
                                            ? 'bg-primary-500/20 text-primary-400 shadow-glow'
                                            : 'text-neutral-300 hover:text-white hover:bg-white/5'
                                    } ${item.highlight ? 'border border-accent-500/30' : ''}`}
                                >
                                    {item.highlight && (
                                        <Star className="w-4 h-4 inline mr-2 text-accent-400" />
                                    )}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
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

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-white/10 animate-fade-in-down">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                                className={`flex items-center w-full text-left px-3 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'bg-primary-500/20 text-primary-400'
                                        : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                                } ${item.highlight ? 'border border-accent-500/30' : ''}`}
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

// Footer Component
function Footer() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-dark-950 border-t border-white/10 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-xl">O</span>
                            </div>
                            <span className="text-2xl font-bold font-display text-white animate-bounce-in">
  OmnyTech
</span>
                        </div>
                        <p className="text-neutral-300 mb-8 max-w-md leading-relaxed">
                            Votre partenaire de confiance pour la transformation digitale.
                            Nous créons des solutions web et mobiles innovantes qui propulsent votre entreprise vers l'avenir.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, name: 'Facebook', color: 'hover:text-blue-400' },
                                { Icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-600' },
                                { Icon: Twitter, name: 'Twitter', color: 'hover:text-blue-400' },
                                { Icon: Instagram, name: 'Instagram', color: 'hover:text-pink-400' }
                            ].map(({ Icon, name, color }) => (
                                <a
                                    key={name}
                                    href="#"
                                    className={`w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-neutral-400 ${color}`}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 font-display text-white">Liens Rapides</h3>
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
                                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-flex items-center group"
                                    >
                                        <span className="group-hover:mr-2 transition-all duration-300">→</span>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info & Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 font-display text-white">Contact</h3>
                        <ul className="space-y-3 text-neutral-300 mb-8">
                            <li className="flex items-center">
                                <Phone className="mr-3 text-primary-400 w-5 h-5" />
                                +212 XXX-XXXXXX
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 text-secondary-400 w-5 h-5" />
                                contact@omnytech.com
                            </li>
                            <li className="flex items-center">
                                <MapPin className="mr-3 text-accent-400 w-5 h-5" />
                                Casablanca, Maroc
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div>
                            <h4 className="font-semibold text-white mb-3">Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="flex-1 px-3 py-2 bg-dark-800/50 border border-white/10 rounded-l-xl text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                                />
                                <button className="px-4 py-2 bg-gradient-primary text-white rounded-r-xl hover:shadow-glow transition-all duration-300 flex items-center justify-center">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-neutral-400 text-sm">
                            © 2025 OmnyTech. Tous droits réservés.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link
                                href="/privacy-policy"
                                className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-300"
                            >
                                Politique de confidentialité
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-300"
                            >
                                Conditions de service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function ClientLayout({ children }) {
    return (
        <div className="min-h-screen bg-dark-900">
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}