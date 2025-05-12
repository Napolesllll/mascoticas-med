"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Paw {
  id: number;
  top: number;
  left: number;
  rotate: number;
  y: number;
  x: number;
  duration: number;
}

export default function SobreNosotros() {
  const [pawprints, setPawprints] = useState<Paw[]>([]);

  useEffect(() => {
    // Generar huellas decorativas solo en el cliente
    const generatedPawprints = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotate: Math.random() * 360,
      y: Math.random() * 20 - 10,
      x: Math.random() * 20 - 10,
      duration: 5 + Math.random() * 10,
    }));
    setPawprints(generatedPawprints);
  }, []);

  return (
    <section className="relative mt-20 w-full min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white py-20 px-4">
      {/* Fondo decorativo de huellitas 🐾 */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {pawprints.map((paw) => (
          <motion.div
            key={paw.id}
            className="absolute text-white text-4xl"
            style={{
              top: `${paw.top}%`,
              left: `${paw.left}%`,
              rotate: `${paw.rotate}deg`,
            }}
            animate={{
              y: [0, paw.y],
              x: [0, paw.x],
            }}
            transition={{
              duration: paw.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Título */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-red-500">Sobre</span> Nosotros
        </motion.h1>

        {/* Descripción */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-zinc-300 mb-6">
            En Mascoticas nos apasiona ayudar a las personas a encontrar a su mejor amigo peludo.
            Nuestra misión es conectar a las familias con cachorros de razas puras, ofreciéndoles
            un proceso de adopción transparente y lleno de amor.
          </p>
          <p className="text-lg text-zinc-300">
            Con años de experiencia en el sector, nos aseguramos de que cada cachorro sea cuidado
            con el máximo respeto y atención antes de ser entregado a su nueva familia.
          </p>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src="/about-us-image.jpg"
            alt="Sobre Nosotros"
            width={500}
            height={300}
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}