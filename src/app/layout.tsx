// filepath: c:\Users\Usuario_02\Desktop\Proyectos importantes\mi-asistente-canino\src\app\layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientRoot from "./ClientRoot"; // Asegúrate de que este componente sea un cliente

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mascoticas Medellín",
  description: "Cuidado profesional para tu mejor amigo peludo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Mejora de rendimiento: precarga de Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        /> 
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className + " flex flex-col min-h-screen"}>
        {/* Asegúrate de que ClientRoot sea un componente cliente */}
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}