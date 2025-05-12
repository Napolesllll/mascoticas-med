"use client";

import { useEffect, useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Nav from "@/components/Nav"; // Importa el componente Nav

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

const vividColors = [
  "#ff6b81",
  "#ff9f43",
  "#48dbfb",
  "#1dd1a1",
  "#f368e0",
];

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
    // Oculta el Footer cuando el modal está abierto
    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.display = isModalOpen ? "none" : "block";
    }

    // Evita que otros elementos interfieran visualmente
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      if (footer) footer.style.display = "block"; // Asegura que el Footer se muestre al salir
      document.body.style.overflow = "auto"; // Restaura el scroll
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
      {/* Componente Nav con la prop isModalOpen */}
      <Nav
        currentSection="inicio"
        onNavigate={(section) => console.log(`Navegando a ${section}`)}
        isModalOpen={isModalOpen}
      />

      <section className="relative pt-28 px-4 pb-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden min-h-screen z-10">

        {/* Huellitas flotantes mágicas */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[...Array(30)].map((_, i) => (
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

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 capitalize text-white tracking-wider">
          🐾 Razas {categoria}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
          {breeds.map((breed) => (
            <div
              key={breed.name}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all hover:scale-[1.03] group"
            >
              <div className="relative w-full h-80 overflow-hidden bg-white/5">
                <Image
                  src={breed.image}
                  alt={breed.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              <div className="p-6 text-center space-y-2">
                <h2 className="text-2xl font-bold text-white">
                  {breed.name.split(' ')[0]}
                </h2>
                <p className="text-sm text-zinc-300 line-clamp-3">
                  {breed.description.split(' ').slice(0, 5).join(' ')}...
                </p>
                <button
                  onClick={() => openModal(breed)}
                  className="mt-4 inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/20 transition duration-300"
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal responsive */}
        {isModalOpen && selectedBreed && (
          <div className="fixed inset-0 bg-black/50 flex mt-20 items-center justify-center z-[1000] backdrop-blur-sm">
            <div className="bg-zinc-800 rounded-xl p-4 md:p-8 max-w-4xl w-full mx-4 relative flex flex-col md:flex-row gap-4 md:gap-6 border-2 border-white/10 backdrop-blur-xl">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-xl md:text-2xl hover:text-amber-400 transition-colors z-10"
              >
                ✕
              </button>
              
              <div className="w-full md:w-1/2">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000 }}
                  className="h-64 md:h-96 shadow-xl rounded-xl overflow-hidden"
                >
                  {selectedBreed.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full bg-white/5">
                        <Image
                          src={image}
                          alt={`${selectedBreed.name} - ${index + 1}`}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                    {selectedBreed.name}
                    <PawPrint className="ml-3 inline-block w-6 h-6 md:w-8 md:h-8 text-amber-400" />
                  </h2>
                  <div className="mb-4 md:mb-6">
                    <p className="text-base md:text-lg text-zinc-300 leading-relaxed overflow-y-auto max-h-32 md:max-h-48 pr-2 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800">
                      {selectedBreed.description}
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 p-3 md:p-4 rounded-xl border border-amber-400/20 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xs md:text-sm text-amber-400">♂</span>
                        <p className="text-lg md:text-xl font-semibold text-amber-400">
                          Macho
                        </p>
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-white">
                      {selectedBreed.desde} ${selectedBreed.precio?.macho?.toLocaleString() } 
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xs md:text-sm text-rose-400">♀</span>
                        <p className="text-lg md:text-xl font-semibold text-rose-400">
                          Hembra
                        </p>
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-white">
                      {selectedBreed.desde} ${selectedBreed.precio?.hembra?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-zinc-400 text-center mt-2">
                    * Cuando en la precio dice a partir de, significa que el precio puede variar dependiendo de la calidad del cachorro y su pedigree.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botón flotante de regreso (oculto durante modal) */}
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