"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  smallBreeds,
  mediumBreeds,
  largeBreeds,
  type Breed,
} from "@/data/breeds";
import Image from "next/image";
import Link from "next/link";
import { PawPrint, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import React from "react";

// Lazy loading del modal y swiper solo cuando se necesiten
const LazyModal = lazy(() => import("@/components/BreedModal"));

const getBreedsByCategory = (category: string): Breed[] => {
  switch (category) {
    case "pequenas":
      return smallBreeds;
    case "medianas":
      return mediumBreeds;
    case "grandes":
      return largeBreeds;
    default:
      return [];
  }
};

const vividColors = ["#ff6b81", "#ff9f43", "#48dbfb", "#1dd1a1", "#f368e0"];

// Componente de huellitas optimizado con memo
const FloatingPaws = React.memo(() => (
  <div className="absolute inset-0 -z-10 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <PawPrint
        key={i}
        className="absolute w-6 h-6 animate-[floatUp_14s_ease-in-out_infinite]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          color: vividColors[Math.floor(Math.random() * vividColors.length)],
          opacity: 0.2 + Math.random() * 0.3,
          animationDelay: `${Math.random() * 10}s`,
        }}
      />
    ))}
  </div>
));

FloatingPaws.displayName = "FloatingPaws";

// Componente de tarjeta de raza optimizado
const BreedCard = React.memo(
  ({
    breed,
    onOpenModal,
  }: {
    breed: Breed;
    onOpenModal: (breed: Breed) => void;
  }) => (
    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all hover:scale-[1.03] group">
      <div className="relative w-full h-80 overflow-hidden bg-white/5">
        <Image
          src={breed.image}
          alt={breed.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
      </div>

      <div className="p-6 text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">
          {breed.name.split(" ")[0]}
        </h2>
        <p className="text-sm text-zinc-300 line-clamp-3">
          {breed.description.split(" ").slice(0, 5).join(" ")}...
        </p>
        <button
          onClick={() => onOpenModal(breed)}
          className="mt-4 inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/20 transition duration-300"
        >
          Ver más
        </button>
      </div>
    </div>
  )
);

BreedCard.displayName = "BreedCard";

export default function RazaPage() {
  const { categoria } = useParams() as { categoria: string };
  const router = useRouter();
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = getBreedsByCategory(categoria);
    if (data.length === 0) {
      router.push("/not-found");
    } else {
      setBreeds(data);
    }
  }, [categoria, router]);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.display = isModalOpen ? "none" : "block";
    }

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      if (footer) footer.style.display = "block";
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (breed: Breed) => {
    setSelectedBreed(breed);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBreed(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Nav
        currentSection="inicio"
        onNavigate={(section) => console.log(`Navegando a ${section}`)}
        isModalOpen={isModalOpen}
      />

      <section className="relative pt-28 px-4 pb-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden min-h-screen z-10">
        <FloatingPaws />

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 capitalize text-white tracking-wider">
          🐾 Razas {categoria}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
          {breeds.map((breed) => (
            <BreedCard key={breed.name} breed={breed} onOpenModal={openModal} />
          ))}
        </div>

        {/* Modal con lazy loading */}
        {isModalOpen && selectedBreed && (
          <Suspense
            fallback={
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
                <div className="bg-zinc-800 rounded-xl p-8 max-w-md mx-4">
                  <div className="animate-pulse text-white text-center">
                    Cargando...
                  </div>
                </div>
              </div>
            }
          >
            <LazyModal breed={selectedBreed} onClose={closeModal} />
          </Suspense>
        )}

        {/* Botón flotante de regreso */}
        {!isModalOpen && (
          <div className="fixed top-6 left-6 z-50 mt-35 flex flex-col items-center gap-2 group">
            <Link href="/" title="Volver al inicio">
              <button
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 animate-in fade-in"
                aria-label="Volver al inicio"
              >
                <PawPrint className="w-6 h-6 animate-bounce group-hover:animate-none" />
                <ArrowLeft className="w-5 h-5 mt-2 text-white animate-in fade-in delay-100 animate-bounce group-hover:animate-none" />
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
