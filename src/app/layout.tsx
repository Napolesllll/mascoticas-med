import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientRoot from "./ClientRoot";

const inter = Inter({ subsets: ["latin"] });

// Variables de configuración (reemplazar con valores reales)
const SITE_URL = "https://mascoticastudominio.com"; // Cambiar por tu dominio
const GA_ID = "G-XXXXXXXXXX"; // Cambiar por tu ID de Google Analytics
const VERIFICATION_CODE = ""; // Agregar código de verificación de Google Search Console

export const metadata: Metadata = {
  title: {
    default:
      "Mascoticas Medellín - Venta de Cachorros de Raza Pura | Criadero Certificado",
    template: "%s | Mascoticas Medellín",
  },
  description:
    "🐕 Venta de cachorros de raza pura en Medellín y Antioquia. Golden Retriever, Bulldog Francés, Pastor Alemán con pedigree certificado. ✅ Garantía sanitaria completa y entrega responsable.",
  keywords: [
    // Palabras clave principales
    "cachorros Medellín",
    "venta perros raza pura",
    "criadero Medellín",
    "cachorros pedigree certificado",
    // Razas específicas
    "golden retriever Medellín",
    "bulldog francés cachorros",
    "pastor alemán Colombia",
    // SEO local
    "mascotas Bello Antioquia",
    "criadero certificado Colombia",
    "cachorros vacunados Medellín",
    "garantía sanitaria mascotas",
  ].join(", "),
  authors: [{ name: "Mascoticas Medellín", url: SITE_URL }],
  creator: "Mascoticas Medellín - Criadero Certificado",
  publisher: "Mascoticas Medellín",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Mascoticas Medellín",
    title:
      "Mascoticas Medellín - Cachorros de Raza Pura con Pedigree Certificado",
    description:
      "Los mejores cachorros de raza pura en Medellín y Antioquia. Criadero certificado con garantía sanitaria completa, pedigree internacional y entrega responsable. ¡Conoce a tu nuevo mejor amigo!",
    // Descomentar cuando tengas la imagen
    // images: [
    //   {
    //     url: `${SITE_URL}/og-image.jpg`,
    //     width: 1200,
    //     height: 630,
    //     alt: "Mascoticas Medellín - Cachorros de Raza Pura",
    //     type: "image/jpeg",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MascoticanMedellin", // Cambiar por tu usuario real
    creator: "@MascoticanMedellin",
    title: "Mascoticas Medellín - Cachorros de Raza Pura",
    description:
      "Criadero certificado de cachorros de raza pura en Medellín con pedigree y garantía sanitaria completa. Golden Retriever, Bulldog Francés y más.",
    // images: [`${SITE_URL}/og-image.jpg`],
  },
  verification: {
    // Agregar cuando tengas el código de Google Search Console
    google: VERIFICATION_CODE || undefined,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Mascotas y Animales",
};

// Schema.org - Datos estructurados mejorados para SEO local
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  "@id": `${SITE_URL}/#organization`,
  name: "Mascoticas Medellín",
  alternateName: "Mascoticas",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mascoticas.png`,
  description:
    "Criadero especializado en la venta de cachorros de raza pura con pedigree certificado en Medellín, Colombia. Garantía sanitaria completa y entrega responsable.",

  // Información de contacto y ubicación
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tu dirección específica", // Actualizar
    addressLocality: "Bello",
    addressRegion: "Antioquia",
    postalCode: "051053",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.3378", // Coordenadas de Bello, Antioquia
    longitude: "-75.5547",
  },

  // Información comercial
  telephone: "+57-300-123-4567", // Actualizar con número real
  email: "info@mascoticastmedellin.com", // Actualizar
  priceRange: "$500.000 - $3.000.000",
  currenciesAccepted: "COP",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "PSE"],

  // Horarios de atención
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],

  // Área de servicio
  areaServed: [
    {
      "@type": "City",
      name: "Medellín",
      containedInPlace: {
        "@type": "State",
        name: "Antioquia",
      },
    },
    {
      "@type": "City",
      name: "Bello",
      containedInPlace: {
        "@type": "State",
        name: "Antioquia",
      },
    },
  ],

  // Catálogo de productos
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cachorros de Raza Pura",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Golden Retriever",
          description:
            "Cachorros Golden Retriever con pedigree certificado, vacunas completas y garantía sanitaria",
        },
        price: "1500000",
        priceCurrency: "COP",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Bulldog Francés",
          description:
            "Cachorros Bulldog Francés de líneas importadas con pedigree internacional",
        },
        price: "2500000",
        priceCurrency: "COP",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Pastor Alemán",
          description:
            "Cachorros Pastor Alemán de alta calidad genética con pedigree certificado",
        },
        price: "1200000",
        priceCurrency: "COP",
      },
    ],
  },

  // Redes sociales
  sameAs: [
    // Descomentar y actualizar con tus redes reales
    // "https://www.facebook.com/MascoticanMedellin",
    // "https://www.instagram.com/mascoticastmedellin",
    // "https://wa.me/573001234567"
  ],
};

// Schema para el sitio web
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Mascoticas Medellín",
  description:
    "Sitio web oficial de Mascoticas Medellín - Criadero de cachorros de raza pura",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/buscar?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  ],
};

// Combinar schemas
const jsonLdSchema = {
  "@graph": [organizationSchema, websiteSchema],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO">
      <head>
        {/* DNS prefetch para optimización de rendimiento */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preconnect para recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon y iconos */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Verificación de Google Search Console */}
        {VERIFICATION_CODE && (
          <meta name="google-site-verification" content={VERIFICATION_CODE} />
        )}

        {/* Meta tags adicionales para SEO local */}
        <meta name="geo.region" content="CO-ANT" />
        <meta name="geo.placename" content="Medellín, Bello" />
        <meta name="geo.position" content="6.3378;-75.5547" />
        <meta name="ICBM" content="6.3378, -75.5547" />
        <meta name="language" content="es-CO" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        {/* Optimización para dispositivos móviles */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#dc2626" />
        <meta name="color-scheme" content="light dark" />

        {/* Datos estructurados - Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_title: 'Mascoticas Medellín',
                    page_location: window.location.href,
                    custom_map: {
                      'breed_view': 'raza_vista',
                      'contact_whatsapp': 'contacto_whatsapp',
                      'modal_open': 'modal_abierto'
                    }
                  });
                  
                  // Eventos personalizados para seguimiento
                  function trackBreedView(breed) {
                    gtag('event', 'breed_view', {
                      breed_name: breed,
                      event_category: 'engagement',
                      event_label: breed
                    });
                  }
                  
                  function trackWhatsAppClick() {
                    gtag('event', 'whatsapp_click', {
                      event_category: 'contact',
                      event_label: 'whatsapp_button'
                    });
                  }
                  
                  // Hacer funciones disponibles globalmente
                  window.trackBreedView = trackBreedView;
                  window.trackWhatsAppClick = trackWhatsAppClick;
                `,
              }}
            />
          </>
        )}

        {/* Preload de recursos críticos cuando estén disponibles */}
        {/* <link rel="preload" as="image" href="/hero-cachorro.webp" /> */}

        {/* Open Graph adicional */}
        <meta property="og:site_name" content="Mascoticas Medellín" />
        <meta property="og:locale" content="es_CO" />
        <meta property="fb:app_id" content="TU_FB_APP_ID" />

        {/* Twitter adicional */}
        <meta
          name="twitter:domain"
          content={SITE_URL.replace("https://", "")}
        />

        {/* Para WhatsApp sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen antialiased`}
      >
        {/* Componente principal */}
        <ClientRoot>{children}</ClientRoot>

        {/* Schema adicional para breadcrumbs (cuando sea necesario) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: SITE_URL,
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
