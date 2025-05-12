"use client";

import React, { useState, lazy, Suspense } from "react";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

const HomeHero = lazy(() => import("@/components/HomeHero"));
const SectionDivider = lazy(() => import("@/components/UI/SectionDivider"));
const SobreNosotros = lazy(() => import("@/components/SobreNosotros"));
const BreedSections = lazy(() => import("@/components/BreedSections"));
const Contactanos = lazy(() => import("@/components/Contactanos"));
const ClientesFelices = lazy(() => import("@/components/ClientesFelices"));

export default function Home() {
  // Usa typeof Section si Section es un valor
  const [currentSection, setCurrentSection] = useState<"inicio" | "sobre" | "contacto" | "clientes">("inicio");

  const renderSection = () => {
    switch (currentSection) {
      case "inicio":
        return (
          <section id="inicio">
            <HomeHero />
            <SectionDivider />
            <section id="razas">
              <BreedSections />
            </section>
          </section>
        );
      case "sobre":
        return (
          <section id="sobre">
            <SobreNosotros />
          </section>
        );
      case "contacto":
        return (
          <section id="contacto">
            <Contactanos />
          </section>
        );
      case "clientes":
        return (
          <section id="clientes">
            <ClientesFelices />
          </section>
        );
      default:
        return (
          <section id="inicio">
            <HomeHero />
            <SectionDivider />
            <section id="razas">
              <BreedSections />
            </section>
          </section>
        );
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen">
      <header>
        <Navbar
          currentSection={currentSection}
          onNavigate={setCurrentSection}
          isModalOpen={false}
        />
      </header>

      <Suspense fallback={<div className="text-center py-10">Cargando sección...</div>}>
        {renderSection()}
      </Suspense>

      <Footer
        currentSection={currentSection}
        onNavigate={setCurrentSection}
      />
    </main>
  );
}