// src/components/FloatingThoughts.tsx
'use client';
import { useEffect, useState } from 'react';

const pensamientos = [
  '¿Será hora del paseo? 🦴',
  'Extraño a mi humano 💛',
  '¿Dónde está mi pelota? 🎾',
  'Necesito un snack 🐾',
  'Dormir también es productividad 😴',
  '¡Quiero jugar en el parque! 🌳',
  'Una caricia sería genial ahora 🐕'
];

interface Thought {
  id: number;
  text: string;
  top: string;
  left: string;
}

export default function FloatingThoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newThought: Thought = {
        id: Date.now(),
        text: pensamientos[Math.floor(Math.random() * pensamientos.length)],
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      };
      setThoughts(prev => [...prev, newThought]);
      setTimeout(() => {
        setThoughts(prev => prev.filter(t => t.id !== newThought.id));
      }, 6000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
      {thoughts.map(thought => (
        <div
          key={thought.id}
          className="absolute bg-white/80 text-black text-sm rounded-full px-4 py-2 shadow-lg animate-fade-in-up"
          style={{ top: thought.top, left: thought.left }}
        >
          {thought.text}
        </div>
      ))}
    </div>
  );
}
