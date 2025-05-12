// src/app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Verificar que las messages estén correctamente formateadas
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ reply: '¡Ups! No se enviaron mensajes válidos.' }, { status: 400 });
  }

  const lastMessage = messages[messages.length - 1];
  if (lastMessage.role !== 'user') {
    return NextResponse.json({ reply: '¡Lo siento! Solo puedo responder a lo que me diga el usuario.' }, { status: 400 });
  }

  try {
    // Aquí puedes integrar OpenAI o el modelo de chat que estés usando.
    // Para OpenAI, por ejemplo, algo como:
    // const response = await fetch('https://api.openai.com/v1/chat/completions', { ... });
    
    // Si no estás usando OpenAI, podemos simular la respuesta con un mensaje simple:
    const reply = generateBotResponse(lastMessage.content); // Función que genera respuesta

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('Error al generar respuesta del chat:', error);
    return NextResponse.json({ reply: '¡Ups! Algo salió mal, por favor intenta de nuevo.' }, { status: 500 });
  }
}

function generateBotResponse(userMessage: string): string {
  // Aquí puedes implementar un sistema básico de respuestas o llamar a un modelo como GPT
  // Respuestas simples como ejemplo
  if (userMessage.toLowerCase().includes('hola')) {
    return '¡Hola! ¿Cómo estás? 🐾';
  }
  if (userMessage.toLowerCase().includes('rutina')) {
    return 'Aquí tienes una rutina recomendada para tu perrito. 🐕';
  }
  return 'Max no entendió bien. 🐶'; // Respuesta predeterminada
}
