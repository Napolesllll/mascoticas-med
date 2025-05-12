"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ClientesFelices = () => {
  const testimonios = [
    {
      id: 1,
      nombre: "María González",
      mascota: "Max - Golden Retriever",
      comentario: "¡Increíble experiencia! Max llegó sano y feliz. El proceso fue muy profesional.",
      foto: "/cliente1.jpg"
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      mascota: "Luna - Bulldog Francés",
      comentario: "Luna es la alegría de nuestro hogar. Gracias por tanta dedicación.",
      foto: "/cliente2.jpg"
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      mascota: "Rocky - Pastor Alemán",
      comentario: "El acompañamiento post-adopción fue excepcional. 100% recomendados.",
      foto: "/cliente3.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="relative w-full bg-gradient-to-br  mt-20 from-zinc-900 via-black to-zinc-950 text-white py-16 md:py-20 px-4">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white text-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-10">
            Nuestros <span className="text-red-500">Clientes Felices</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Las experiencias de familias que han encontrado a su compañero perfecto con nosotros
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 mx-4 md:mx-0 overflow-hidden"
        >
          <div className="relative h-[400px] transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {sliderImages.map((item, index) => (
              <div 
                key={item}
                className="w-full absolute top-0 h-full flex items-center justify-center"
                style={{ left: `${index * 100}%` }}
              >
                <div className="relative w-full h-full max-w-4xl">
                  <Image
                    src={`/clientes-felices/carousel${item}.jpg`}
                    alt={`Mascota feliz ${item}`}
                    fill
                    className="object-scale-down rounded-xl"
                    sizes="(max-width: 768px) 100vw, 75vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700 hover:border-red-500/30 transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red-500">
                  <Image
                    src={testimonio.foto}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{testimonio.nombre}</h3>
                  <p className="text-red-400 text-sm">{testimonio.mascota}</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">"{testimonio.comentario}"</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default ClientesFelices;