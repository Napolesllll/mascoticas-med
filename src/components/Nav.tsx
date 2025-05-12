"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Section = "inicio" | "sobre" | "contacto" | "clientes";

interface Paw {
  id: number;
  top: number;
  left: number;
  size: number;
  rotation: number;
}

const Nav = ({
  currentSection,
  onNavigate,
  isModalOpen,
}: {
  currentSection: Section;
  onNavigate: (section: Section) => void;
  isModalOpen: boolean; // Nueva prop para saber si el modal está abierto
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pawprints, setPawprints] = useState<Paw[]>([]);
  const [pawprintsMobile, setPawprintsMobile] = useState<Paw[]>([]);

  useEffect(() => {
    // Generar huellas decorativas solo en el cliente
    const generatePawprints = (num: number) =>
      Array.from({ length: num }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 20 + Math.random() * 20,
        rotation: Math.random() * 360,
      }));

    setPawprints(generatePawprints(15));
    setPawprintsMobile(generatePawprints(10));
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className={`bg-black text-white fixed top-0 left-0 w-full shadow-md transition-all ${
        isModalOpen ? "z-10" : "z-50"
      }`} // Ajuste dinámico del z-index
      aria-label="Navegación principal"
    >
      {/* Huellitas escritorio */}
      <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
        {pawprints.map((paw) => (
          <motion.div
            key={paw.id}
            className="absolute opacity-10"
            style={{
              top: `${paw.top}%`,
              left: `${paw.left}%`,
              fontSize: `${paw.size}px`,
              transform: `rotate(${paw.rotation}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <button onClick={() => onNavigate("inicio")} aria-label="Ir al inicio">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            >
              <Image src="/LOGO.png" alt="Logo Mascoticas" width={150} height={50} />
            </motion.div>
          </button>
        </div>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex space-x-6">
          {[
            { id: "inicio", label: "Inicio" },
            { id: "sobre", label: "Sobre Nosotros" },
            { id: "contacto", label: "Contáctanos" },
            { id: "clientes", label: "Clientes Felices" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id as Section)}
                className={`hover:bg-red-600 px-4 py-2 rounded-md transition-colors ${
                  currentSection === item.id ? "bg-red-600" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa - móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú móvil"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil centrado */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black bg-opacity-60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menú centrado */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="fixed inset-0 flex items-center justify-center z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-72 bg-black text-white p-6 rounded-xl shadow-lg">
                {/* Botón cerrar */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 text-white text-2xl"
                  aria-label="Cerrar menú"
                >
                  ✕
                </button>

                {/* Huellitas */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  {pawprintsMobile.map((paw) => (
                    <motion.div
                      key={`mobile-${paw.id}`}
                      className="absolute text-white"
                      style={{
                        top: `${paw.top}%`,
                        left: `${paw.left}%`,
                        fontSize: `${paw.size}px`,
                        transform: `rotate(${paw.rotation}deg)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.1, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      🐾
                    </motion.div>
                  ))}
                </div>

                {/* Links */}
                <ul className="relative z-10 flex flex-col items-center gap-6 mt-4">
                  {[
                    { id: "inicio", label: "Inicio" },
                    { id: "sobre", label: "Sobre Nosotros" },
                    { id: "contacto", label: "Contáctanos" },
                    { id: "clientes", label: "Clientes Felices" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          onNavigate(item.id as Section);
                          setIsMenuOpen(false);
                        }}
                        className={`py-2 px-4 w-full text-center rounded-md font-semibold ${
                          currentSection === item.id
                            ? "bg-red-600 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;