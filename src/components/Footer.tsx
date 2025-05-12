"use client";

import React, { useState, useEffect } from "react";
import { Github, Instagram, Twitter, Facebook, PawPrint as PawIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

export type Section = "inicio" | "sobre" | "contacto" | "clientes";

interface FooterProps {
  currentSection?: Section;
  onNavigate?: (section: Section) => void;
}

interface Paw {
  id: number;
  top: number;
  left: number;
  color: string;
  opacity: number;
  delay: number;
}

// Mapeo de sección a ruta
const sectionHref: Record<Section, string> = {
  inicio: "/",
  sobre: "/sobre-nosotros",
  contacto: "/contacto",
  clientes: "/clientes-felices",
};

export default function Footer({ currentSection, onNavigate }: FooterProps) {
  const vividColors = [
    "#ff6b81",
    "#ff9f43",
    "#48dbfb",
    "#1dd1a1",
    "#f368e0",
  ];

  const [pawprints, setPawprints] = useState<Paw[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Generar huellas solo en el cliente
      const prints: Paw[] = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        color: vividColors[Math.floor(Math.random() * vividColors.length)],
        opacity: 0.1 + Math.random() * 0.2,
        delay: Math.random() * 10,
      }));
      setPawprints(prints);
    }
  }, []);

  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre", label: "Sobre nosotros" },
    { id: "contacto", label: "Contacto" },
    { id: "clientes", label: "Clientes felices" },
  ] as const;

  return (
    <footer className="bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 text-white py-16 px-6 relative z-10">
      <AnimatePresence>
        {pawprints.map((paw) => (
          <motion.div
            key={paw.id}
            className="absolute w-8 h-8"
            style={{
              top: `${paw.top}%`,
              left: `${paw.left}%`,
              color: paw.color,
              opacity: paw.opacity,
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: -20, opacity: paw.opacity }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: paw.delay,
              repeatType: "loop",
            }}
          >
            <PawIcon />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mb-6">
          {onNavigate ? (
            <button
              onClick={() => onNavigate("inicio")}
              aria-label="Ir al inicio"
              className="mx-auto"
            >
              <Image src="/logo.png" alt="Logo Mascoticas" width={150} height={50} />
            </button>
          ) : (
            <Link href="/">
              <Image src="/logo.png" alt="Logo Mascoticas" width={150} height={50} />
            </Link>
          )}
        </motion.div>

        <p className="text-lg text-zinc-300 mb-8">
          Encuentra a tu mejor amigo peludo. ¡Juntos hasta el fin!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              {links.map((item) => (
                <motion.li key={item.id} whileHover={{ x: 5 }}>
                  {onNavigate ? (
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`w-full text-left px-2 py-1 rounded-md transition ${
                        currentSection === item.id
                          ? "text-accent font-semibold"
                          : "text-zinc-400 hover:text-accent"
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={sectionHref[item.id]}
                      className={`block px-2 py-1 rounded-md transition ${
                        currentSection === item.id
                          ? "text-accent font-semibold"
                          : "text-zinc-400 hover:text-accent"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex justify-center gap-6 text-2xl text-zinc-400">
              {[
                { Icon: FaTiktok, url: "https://tiktok.com" },
                { Icon: Facebook, url: "https://facebook.com" },
              ].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition"
                >
                  <link.Icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-zinc-400 mb-2">Email: jeananderson2208@gmail.com</p>
            <p className="text-sm text-zinc-400">Tel: +57 316 316 9143</p>
          </div>
        </div>

        <div className="text-sm text-zinc-500 mt-6">
          <p>© 2025 Mascoticas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}