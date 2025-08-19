// components/SEO/LocalBusinessSchema.tsx
interface LocalBusinessProps {
  name?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export const LocalBusinessSchema: React.FC<LocalBusinessProps> = ({
  name = "Mascoticas Bucaramanga Medellin",
  address = "Bello, Bucaramanga, Antioquia, Colombia",
  phone = "+57 316 3169143",
  email = "info@mascoticastmedellin.com",
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: name,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      postalCode: "051053",
      addressCountry: "CO",
    },
    telephone: phone,
    email: email,
    url: "https://mascoticastmedellin.com",
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "$",
    servesCuisine: "Pet Store Services",
    hasMap: "https://goo.gl/maps/tu-ubicacion",
    sameAs: [
      "https://www.facebook.com/mascoticastmedellin",
      "https://www.instagram.com/mascoticastmedellin",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
