"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeHero = () => {
  const [pawprints, setPawprints] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
    }>
  >([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      idCounter.current += 1;
      const newPaw = {
        id: idCounter.current,
        x: Math.random() * 100, // Generar posición aleatoria
        y: Math.random() * 100,
        size: 20 + Math.random() * 30, // Tamaño aleatorio
        delay: Math.random() * 2, // Retraso aleatorio
      };

      setPawprints((prev) => [...prev.slice(-15), newPaw]);

      // Eliminar la huellita después de cierto tiempo
      setTimeout(() => {
        setPawprints((prev) => prev.filter((p) => p.id !== newPaw.id));
      }, 4000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-black via-pink-50 to-red-100 text-black overflow-hidden flex flex-col justify-center items-center px-4">
      {/* Fondo con huellitas animadas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {pawprints.map((paw) => (
          <motion.div
            key={paw.id}
            className="absolute text-black"
            style={{
              left: `${paw.x}%`,
              top: `${paw.y}%`,
              fontSize: `${paw.size}px`,
              pointerEvents: "none",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.7, 0], y: [10, 0, -10] }}
            transition={{ duration: 3, delay: paw.delay }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Título */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Bienvenido a <span className="text-red-500">Mascoticas</span>
        </motion.h1>

        {/* Logo animado */}
        <motion.div
          className="mb-6"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        >
          <Image
            src="/LOGO.png"
            alt="Logo Mascoticas"
            width={200}
            height={200}
            className="object-contain rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Descripción */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-xl px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Encuentra cachorros de razas puras y dale una nueva alegría a tu hogar.
        </motion.p>
      </div>

      {/* Nube decorativa */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-20 bg-gray-300/40 blur-2xl rounded-full z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default HomeHero;