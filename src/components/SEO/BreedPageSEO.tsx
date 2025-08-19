// components/SEO/BreedPageSEO.tsx
import { Metadata } from "next";

interface BreedSEOProps {
  breedName: string;
  category: string;
  price?: {
    macho?: number;
    hembra?: number;
  };
  description?: string;
}

export const generateBreedMetadata = ({
  breedName,
  category,
  price,
  description,
}: BreedSEOProps): Metadata => {
  const categoryText =
    {
      pequenas: "pequeñas",
      medianas: "medianas",
      grandes: "grandes",
    }[category] || category;

  return {
    title: `${breedName} en Medellín - Cachorros de Raza ${categoryText} | Mascoticas`,
    description: `🐕 Cachorros ${breedName} disponibles en Medellín. Raza ${categoryText} con pedigree certificado. ${
      description ? description.slice(0, 100) : "Garantía sanitaria completa"
    }. ✅ Entrega responsable.`,
    keywords: `${breedName} Medellín, cachorros ${breedName}, ${breedName} raza ${categoryText}, venta ${breedName} Colombia, ${breedName} pedigree certificado`,
    openGraph: {
      title: `${breedName} - Cachorros de Raza Pura en Medellín`,
      description: `Hermosos cachorros ${breedName} disponibles. Pedigree certificado, vacunas completas. Precio desde ${
        price?.macho?.toLocaleString() || "Consultar"
      }.`,
      url: `/razas/${category}/${breedName.toLowerCase().replace(/\s+/g, "-")}`,
    },
  };
};
