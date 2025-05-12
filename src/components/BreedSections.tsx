"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import Link from "next/link";

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

const BreedSections = () => {
  return (
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
    </section>
  );
};

export default BreedSections;
