'use client';
import { useEffect } from 'react';


export default function ScrollAnimations() {
    useEffect(() => {
        const initializeAnimations = () => {
            console.log('Initializing animations...');

            // Check if device is mobile
            const isMobile = window.innerWidth <= 768;

            // Auto-split text function
            const autoAnimateElements = document.querySelectorAll('.auto-animate');
            autoAnimateElements.forEach(element => {
                const words = element.textContent.split(' ');
                element.innerHTML = words.map((word, index) =>
                    `<span class="word-animate word-delay-${index + 1}">${word}</span>`
                ).join(' ');
            });

            // Counter animation function
            const animateCounters = () => {
                const counters = document.querySelectorAll('.counter-number');
                counters.forEach(counter => {
                    const target = counter.getAttribute('data-target');
                    const isPercentage = target.includes('%');
                    const isPlus = target.includes('+');
                    const isSlash = target.includes('/');

                    let finalNumber;
                    if (isPercentage) {
                        finalNumber = parseInt(target.replace('%', ''));
                    } else if (isPlus) {
                        finalNumber = parseInt(target.replace('+', ''));
                    } else if (isSlash) {
                        counter.textContent = target; // For "24/7", just display as is
                        return;
                    } else {
                        finalNumber = parseInt(target);
                    }

                    let currentNumber = 0;
                    const increment = finalNumber / 60; // 60 frames for smooth animation
                    const duration = 2000; // 2 seconds
                    const frameTime = duration / 60;

                    const updateCounter = () => {
                        currentNumber += increment;
                        if (currentNumber >= finalNumber) {
                            currentNumber = finalNumber;
                            if (isPercentage) {
                                counter.textContent = finalNumber + '%';
                            } else if (isPlus) {
                                counter.textContent = finalNumber + '+';
                            } else {
                                counter.textContent = finalNumber;
                            }
                        } else {
                            const displayNumber = Math.floor(currentNumber);
                            if (isPercentage) {
                                counter.textContent = displayNumber + '%';
                            } else if (isPlus) {
                                counter.textContent = displayNumber + '+';
                            } else {
                                counter.textContent = displayNumber;
                            }
                            setTimeout(updateCounter, frameTime);
                        }
                    };

                    updateCounter();
                });
            };

            // Mobile/Desktop specific code
            if (isMobile) {
                const allCards = document.querySelectorAll('.card-animate');
                allCards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'none';
                });

                const pricingCards = document.querySelectorAll('.pricing-card');
                pricingCards.forEach(card => {
                    card.addEventListener('click', () => {
                        pricingCards.forEach(c => c.classList.remove('selected'));
                        card.classList.add('selected');
                    });
                });
            }

            // Card selection for desktop
            const pricingCards = document.querySelectorAll('.pricing-card');
            const selectCard = (selectedCard) => {
                pricingCards.forEach(c => {
                    c.classList.remove('selected');
                    c.classList.remove('scale-105');
                });
                selectedCard.classList.add('selected');
                selectedCard.classList.add('scale-105');
            };

            const resetCards = () => {
                pricingCards.forEach(c => {
                    c.classList.remove('selected');
                    c.classList.remove('scale-105');
                });
            };

            if (!isMobile) {
                pricingCards.forEach(card => {
                    card.addEventListener('mouseenter', () => selectCard(card));
                    const cardGrid = card.closest('.grid');
                    if (cardGrid) {
                        cardGrid.addEventListener('mouseleave', resetCards);
                    }
                });
            }

            // Intersection Observer
            const observerOptions = {
                threshold: 0.2,
                rootMargin: '0px 0px -10% 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('Element intersecting:', entry.target);

                        // Animate words
                        const animatedWords = entry.target.querySelectorAll('.word-animate');
                        animatedWords.forEach(word => {
                            word.classList.add('animate-start');
                        });

                        // Animate cards
                        const animatedCards = entry.target.querySelectorAll('.card-animate');
                        animatedCards.forEach(card => {
                            card.classList.add('animate-start');
                        });

                        // Animate counters
                        const animatedCounters = entry.target.querySelectorAll('.counter-animate');
                        if (animatedCounters.length > 0) {
                            animatedCounters.forEach(counter => {
                                counter.classList.add('animate-start');
                            });
                            // Start counter animation after a short delay
                            setTimeout(animateCounters, 500);
                        }
                    }
                });
            }, observerOptions);

            // Observe sections
            const sections = document.querySelectorAll('h1, h2, h3, p, .pricing-section, .stats-section');
            sections.forEach(section => {
                if (section.querySelector('.word-animate') ||
                    section.querySelector('.card-animate') ||
                    section.querySelector('.counter-animate') ||
                    section.classList.contains('auto-animate') ||
                    section.classList.contains('pricing-section') ||
                    section.classList.contains('stats-section')) {
                    observer.observe(section);
                }
            });

            return () => {
                observer.disconnect();
            };
        };

        const timer = setTimeout(initializeAnimations, 100);
        return () => clearTimeout(timer);
    }, []);

    return null;
}




{/* Navigation From Legal Pages */}



const Navigation = () => {
    const router = useRouter();

    const handleNavigation = (sectionId) => {
        // Check if we're on homepage
        if (window.location.pathname !== '/') {
            // Navigate to homepage with hash
            router.push(`/#${sectionId}`);
        } else {
            // Scroll to section on current page
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <button onClick={() => handleNavigation('accueil')}>Accueil</button>
            <button onClick={() => handleNavigation('apropos')}>À Propos</button>
            <button onClick={() => handleNavigation('services')}>Services</button>
            <button onClick={() => handleNavigation('offres')}>Nos Offres</button>
            <button onClick={() => handleNavigation('contact')}>Contact</button>
        </nav>
    );
};











