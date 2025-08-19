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
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
    }>
  >([]);
  const idCounter = useRef(0);
  const heartCounter = useRef(0);

  // Efecto para las huellas de patas
  useEffect(() => {
    const interval = setInterval(() => {
      idCounter.current += 1;
      const newPaw = {
        id: idCounter.current,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        delay: Math.random() * 2,
      };

      setPawprints((prev) => [...prev.slice(-15), newPaw]);

      setTimeout(() => {
        setPawprints((prev) => prev.filter((p) => p.id !== newPaw.id));
      }, 4000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Efecto para los corazones flotantes
  useEffect(() => {
    const createHeart = () => {
      heartCounter.current += 1;
      return {
        id: heartCounter.current,
        x: Math.random() * 100,
        y: 110,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.7 + 0.3,
      };
    };

    // Inicializar corazones
    const initialHearts = Array.from({ length: 15 }, () => createHeart());
    setHearts(initialHearts);

    // Animación continua
    const interval = setInterval(() => {
      setHearts((prev) => {
        // Mover corazones hacia arriba
        const movedHearts = prev
          .map((heart) => ({
            ...heart,
            y: heart.y - 1,
            opacity: heart.opacity - 0.005,
          }))
          .filter((heart) => heart.y > -10 && heart.opacity > 0.1);

        // Añadir nuevo corazón periódicamente
        if (Math.random() > 0.7) {
          return [...movedHearts, createHeart()];
        }

        return movedHearts;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white overflow-hidden flex flex-col justify-center items-center px-4"
      aria-label="Bienvenida a Mascoticas"
    >
      {/* Efecto de chispas rojas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Corazones flotantes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={`heart-${heart.id}`}
            className="absolute text-red-400"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              fontSize: `${heart.size}px`,
              opacity: heart.opacity,
              filter: `blur(${heart.size / 30}px)`,
              pointerEvents: "none",
            }}
          >
            ❤
          </motion.div>
        ))}
      </div>

      {/* Fondo con huellitas animadas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {pawprints.map((paw) => (
          <motion.div
            key={paw.id}
            className="absolute text-white/30"
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
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Título principal */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-white">Bienvenido a </span>
          <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]">
            Mascoticas
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-6 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Donde los <span className="text-red-300">mejores amigos</span> te
          esperan
        </motion.h2>

        {/* Logo animado con borde rojo */}
        <motion.div
          className="mb-6 relative"
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <div className="absolute inset-0 rounded-xl bg-red-500 blur-xl opacity-50 animate-pulse" />
          <Image
            src="/LOGO.png"
            alt="Mascoticas - Especialistas en adopción de mascotas"
            width={200}
            height={200}
            className="object-contain rounded-xl relative z-10 border-2 border-red-500 shadow-lg shadow-red-900/50"
            priority
          />
        </motion.div>

        {/* Descripción con efecto de máquina de escribir */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl px-4 mb-4 border-l-4 border-red-500 pl-4 py-2 bg-black/20"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            Encuentra cachorros de razas puras y dale una nueva alegría a tu
            hogar.
          </motion.p>
        </motion.div>

        {/* Decoración inferior */}
        <motion.div
          className="flex space-x-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-red-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Efecto de neblina roja en la parte inferior */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-red-900/80 to-transparent z-5"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Efecto de destellos laterales */}
      <motion.div
        className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-red-600 blur-[100px] opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-red-600 blur-[100px] opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default HomeHero;
