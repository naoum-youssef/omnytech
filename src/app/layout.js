import { Inter, Poppins } from 'next/font/google';
import ClientLayout from './ClientLayout';
import './globals.css';
import ScrollAnimations from "@/app/_components/ScrollAnimations";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata = {
    title: 'OmnyTech - Solutions Digitales, Web & Mobile au Maroc',
    description: 'OmnyTech, votre partenaire de confiance pour la création de sites web, le développement web sur mesure et les applications mobiles. Expertise technique et innovation au service de votre entreprise.',
    keywords: 'développement web, création site web, application mobile, développement sur mesure, agence web Maroc, OmnyTech',
    authors: [{ name: 'OmnyTech' }],
    creator: 'OmnyTech',
    publisher: 'OmnyTech',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://omnytech.com'),
    alternates: {
        canonical: '/',
        languages: {
            'fr-MA': '/',
            'fr': '/',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://omnytech.com',
        title: 'OmnyTech - Agence de Développement Web & Mobile au Maroc',
        description: 'OmnyTech, votre partenaire de confiance pour la création de sites web, le développement web sur mesure et les applications mobiles.',
        siteName: 'OmnyTech',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'OmnyTech - Agence de Développement Web & Mobile',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'OmnyTech - Agence de Développement Web & Mobile au Maroc',
        description: 'Votre partenaire de confiance pour la création de sites web, le développement web sur mesure et les applications mobiles.',
        images: ['/images/og-image.jpg'],
        creator: '@omnytech',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#0ea5e9" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#0ea5e9" />
            <meta name="msapplication-config" content="/browserconfig.xml" />

            {/* Preload critical resources */}
            <link rel="preload" href="/images/hero-bg.svg" as="image" />
            <link rel="preload" href="/images/web-development.svg" as="image" />
            <link rel="preload" href="/images/mobile-app.svg" as="image" />
            <link rel="preload" href="/images/custom-development.svg" as="image" />

            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "OmnyTech",
                        "url": "https://omnytech.com",
                        "logo": "https://omnytech.com/images/logo.svg",
                        "description": "Agence de développement web et mobile au Maroc",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "MA",
                            "addressLocality": "Casablanca"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+212-XXX-XXXXXX",
                            "contactType": "Customer Service",
                            "availableLanguage": ["French", "Arabic"]
                        },
                        "sameAs": [
                            "https://www.facebook.com/omnytech",
                            "https://www.linkedin.com/company/omnytech",
                            "https://twitter.com/omnytech"
                        ],
                        "service": [
                            {
                                "@type": "Service",
                                "name": "Création de site web",
                                "description": "Développement de sites web modernes et responsives"
                            },
                            {
                                "@type": "Service",
                                "name": "Développement Web sur Mesure",
                                "description": "Solutions web personnalisées selon vos besoins"
                            },
                            {
                                "@type": "Service",
                                "name": "Développement d'Applications Mobiles",
                                "description": "Applications mobiles natives et cross-platform"
                            }
                        ]
                    })
                }}
            />

            {/* Google Analytics */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
                }}
            />
        </head>
        <body className={`${inter.className} antialiased`}>
        <ScrollAnimations/>
        <ClientLayout>
            {children}
        </ClientLayout>
        </body>
        </html>
    );
}