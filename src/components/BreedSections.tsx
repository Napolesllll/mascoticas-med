"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, X, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const cardVariants = {
  hover: {
    scale: 1.05,
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const BreedCard = ({
  href,
  imgSrc,
  title,
  description,
}: {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover="hover"
      variants={cardVariants}
      className="rounded-2xl overflow-hidden shadow-lg bg-zinc-800 text-white cursor-pointer"
    >
      <Link href={href}>
        <div className="relative h-72 w-full">
          <Image src={imgSrc} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6 text-center">
          <PawPrint className="mx-auto mb-2 text-white" size={32} />
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-zinc-300">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const ClientesModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, sliderImages.length]);

  const testimonios = [
    {
      id: 1,
      nombre: "María González",
      mascota: "Max - Golden Retriever",
      comentario:
        "¡Increíble experiencia! Max llegó sano y feliz. El proceso fue muy profesional.",
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      mascota: "Luna - Bulldog Francés",
      comentario:
        "Luna es la alegría de nuestro hogar. Gracias por tanta dedicación.",
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      mascota: "Rocky - Pastor Alemán",
      comentario:
        "El acompañamiento post-adopción fue excepcional. 100% recomendados.",
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón de cerrar */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-20 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors shadow-lg"
          >
            <X size={20} />
          </button>

          {/* Corazones flotantes de fondo */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-500 text-2xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                }}
              >
                ❤️
              </motion.div>
            ))}
          </div>

          <div className="p-8 text-white relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros{" "}
                <span className="text-red-500">Clientes Satisfechos</span>
              </h2>
              <p className="text-zinc-300">
                Familias felices que han encontrado a su compañero perfecto
              </p>
            </div>

            {/* Slider de imágenes */}
            <div className="mb-8 overflow-hidden rounded-xl">
              <div
                className="relative h-[300px] md:h-[400px] transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {sliderImages.map((item, index) => (
                  <div
                    key={item}
                    className="w-full absolute top-0 h-full flex items-center justify-center"
                    style={{ left: `${index * 100}%` }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={`/clientes-felices/carousel${item}.jpg`}
                        alt={`Cliente feliz ${item}`}
                        fill
                        className="object-scale-down rounded-xl"
                        sizes="(max-width: 768px) 100vw, 75vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de progreso */}
            <div className="flex justify-center mb-8 space-x-2">
              {sliderImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-red-500" : "bg-zinc-600"
                  }`}
                />
              ))}
            </div>

            {/* Testimonios */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonios.map((testimonio, index) => (
                <motion.div
                  key={testimonio.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700"
                >
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-red-400">
                      {testimonio.nombre}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {testimonio.mascota}
                    </p>
                  </div>
                  <p className="text-zinc-300 italic text-sm">
                    "{testimonio.comentario}"
                  </p>
                  <div className="flex mt-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BreedSections = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-b from-black to-zinc-900 py-20 px-6">
        <h2 className="text-4xl md:text-5xl text-white font-bold text-center mb-12">
          Explora por Tamaño
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BreedCard
            href="/razas/pequenas"
            imgSrc="/razas paqueñas/IMG-20250422-WA0128.jpg"
            title="Razas Pequeñas"
            description="Perfectas para espacios pequeños y llenas de ternura."
          />
          <BreedCard
            href="/razas/medianas"
            imgSrc="/razas-medianas/IMG-20250423-WA0015.jpg"
            title="Razas Medianas"
            description="Equilibradas y versátiles, ideales para la familia."
          />
          <BreedCard
            href="/razas/grandes"
            imgSrc="/grande.jpg"
            title="Razas Grandes"
            description="Majestuosas, protectoras y llenas de energía."
          />
        </div>

        {/* Botón de Clientes Satisfechos */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3 group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="group-hover:animate-pulse" size={24} />
            <span className="text-lg">Clientes Satisfechos</span>
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🐕
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* Modal */}
      <ClientesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BreedSections;
