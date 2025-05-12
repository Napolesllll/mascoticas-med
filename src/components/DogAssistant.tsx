'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FaTimes } from 'react-icons/fa';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type MessageRole = 'user' | 'assistant';
interface ChatMessage {
  role: MessageRole;
  content: string;
}

export default function DogAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);
  const [breedRequested, setBreedRequested] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialBotMessage: ChatMessage = {
    role: 'assistant',
    content: '¡Guau! 🐶 Soy Max, tu asistente canino. ¿Preparado para mejorar la vida de tu mejor amigo?'
  };

  useEffect(() => {
    // Cargar la animación de Lottie solo en el cliente
    const loadAnimation = async () => {
      const data = await import('../../public/animations/dog.json');
      setAnimationData(data.default ?? data);
    };
    loadAnimation();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const askBreed = () => {
    const breedMessage: ChatMessage = {
      role: 'assistant',
      content: `🐾 **Selecciona el tamaño de tu perro**:

1️⃣ Raza pequeña
2️⃣ Raza mediana
3️⃣ Raza grande`
    };
    setMessages([initialBotMessage, breedMessage]);
    setBreedRequested(true);
  };

  const getDietByBreed = (option: string): string => {
    switch (option) {
      case '1':
        return `🐶 **Dieta para raza pequeña**\n\n🍽️ **Comidas al día**: 3 tomas de 30-50g de pienso de alta calidad.\n🥕 **Snacks**: Golosinas bajas en calorías.\n\n🍎 **Alimentos humanos seguros**:\n- Zanahoria cruda rallada 🥕\n- Manzana (sin semillas) 🍏\n- Yogur natural sin azúcar 🥛\n\n⚠️ **Cómo ofrecerlos**: Sirve pequeñas porciones y observa su tolerancia.\n\n🩺 Siempre ajusta la dieta con tu veterinario.`;
      case '2':
        return `🐕 **Dieta para raza mediana**\n\n🍽️ **Comidas al día**: 2 tomas de 100-150g de pienso premium.\n🥕 **Snacks**: Frutas seguras y verduras.\n\n🍎 **Alimentos humanos seguros**:\n- Zanahoria en palitos 🥕\n- Manzana sin semillas 🍏\n- Pechuga de pollo cocida sin sal 🍗\n\n⚠️ **Cómo ofrecerlos**: Cocina sin condimentos y córtalos en trozos pequeños.\n\n🩺 Consulta siempre a tu veterinario antes de introducir nuevos alimentos.`;
      case '3':
        return `🦮 **Dieta para raza grande**\n\n🍽️ **Comidas al día**: 2 tomas de 200-300g de pienso de alta gama.\n🥕 **Snacks**: Suplementos recomendados por el veterinario.\n\n🍎 **Alimentos humanos seguros**:\n- Calabaza cocida 🎃\n- Pechuga de pavo sin piel 🍖\n- Batata al horno en cubos 🍠\n\n⚠️ **Cómo ofrecerlos**: Introduce gradualmente y vigila signos digestivos.\n\n🩺 Ajusta siempre con tu veterinario de confianza.`;
      default:
        return 'Por favor ingresa 1️⃣, 2️⃣ o 3️⃣ para seleccionar el tamaño de raza.';
    }
  };

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    const trimmed = inputMessage.trim();
    const userMessage: ChatMessage = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');

    if (breedRequested) {
      const responseContent = getDietByBreed(trimmed);
      const assistantMessage: ChatMessage = { role: 'assistant', content: responseContent };
      setMessages(prev => [...prev, assistantMessage]);
      setBreedRequested(false);
      return;
    }

    setIsTyping(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      if (!response.ok) throw new Error('Error en la respuesta de la API');

      const { reply } = await response.json();
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: typeof reply === 'string' ? reply : 'Max no entendió bien. 🐶'
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '¡Ups! Algo salió mal. ¿Intentas de nuevo? 🐾'
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-7 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            askBreed();
          }}
          className="bg-amber-500 p-4 rounded-full shadow-xl hover:bg-amber-600 transition-all hover:scale-110 animate-bounce"
          aria-label="Abrir chat con Max"
        >
          <div className="w-16 h-16">
            {animationData && <Lottie animationData={animationData} loop autoplay />}
          </div>
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-black rounded-xl shadow-2xl border border-amber-200">
          <div className="bg-amber-500 p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                {animationData && <Lottie animationData={animationData} loop autoplay />}
              </div>
              <h2 className="text-white font-bold">Max - Asistente Canino</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-amber-200 transition-colors"
              aria-label="Cerrar chat"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 bg-amber-50">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-2xl max-w-[85%] text-sm ${
                  msg.role === 'user' ? 'bg-amber-600 text-white' : 'bg-black text-amber-100 border border-amber-200'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center text-amber-700 text-sm">
                <div className="animate-pulse">Max está escribiendo...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-amber-100 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Escribe a Max..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-black"
                aria-label="Escribe tu mensaje"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors text-sm disabled:opacity-50"
                disabled={isTyping || !inputMessage.trim()}
              >
                Enviar
              </button>  
            </div>
          </div>
        </div>
      )}
    </div>
  );
}