// components/OptimizedImage.tsx
import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  breedName?: string;
  onLoad?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  breedName,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generar alt text más descriptivo para SEO
  const optimizedAlt = breedName
    ? `${breedName} - ${alt} - Mascoticas Medellín criadero certificado`
    : `${alt} - Mascoticas Medellín cachorros de raza pura`;

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500">Imagen no disponible</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
        />
      )}
      <Image
        src={src}
        alt={optimizedAlt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        quality={85}
      />
    </div>
  );
};
