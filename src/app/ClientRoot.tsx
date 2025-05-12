"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import DogAssistant from "@/components/DogAssistant";
import FloatingThoughts from "@/components/FloatingThoughts";
import WhatsappButton from "@/components/WhatsappButton";
import { Section } from "@/components/Footer";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  // Estado para la sección actual
  const [currentSection, setCurrentSection] = useState<Section>("inicio");

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Barra de navegación */}
      <Nav
        currentSection={currentSection}
        onNavigate={handleNavigate}
        isModalOpen={false} // Pasar un valor fijo si no se utiliza
      />

      {/* Contenido principal */}
      <main className="flex-grow">{children}</main>

      {/* Herramientas flotantes */}
      <div
        role="complementary"
        className="fixed bottom-6 right-6 flex items-center gap-6 z-50"
      >
        <WhatsappButton />
        <FloatingThoughts />
        <div className="ml-4">
          <DogAssistant />
        </div>
      </div>
    </div>
  );
}