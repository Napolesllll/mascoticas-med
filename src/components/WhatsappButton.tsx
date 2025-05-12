"use client";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/573163169143?text=¡Hola!%20Estoy%20interesado%20en%20un%20cachorrito%20de%20raza"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-33 z-50 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-4 md:p-5 rounded-full shadow-xl transition-transform duration-300 ease-in-out hover:scale-110 animate-in fade-in"
      aria-label="Chatea con nosotros en WhatsApp"
    >
      {/* Ícono oficial de WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-8 h-8 sm:w-7 sm:h-7"
      >
        <path d="M16 .063C7.168.063.063 7.166.063 16c0 2.813.729 5.563 2.125 7.969L.25 31.75l7.938-1.938A15.847 15.847 0 0016 31.938C24.834 31.938 31.938 24.832 31.938 16S24.834.063 16 .063zm0 2c7.731 0 14 6.269 14 14s-6.269 14-14 14a13.83 13.83 0 01-7.188-2.063l-.5-.313-4.688 1.125 1.156-4.563-.313-.5A13.898 13.898 0 012 16c0-7.731 6.269-14 14-14zm-3.875 6a2.148 2.148 0 00-1.625.75c-.5.625-.875 1.75-.5 3.188.375 1.438 1.313 3.25 2.688 4.625 1.375 1.375 3.188 2.313 4.625 2.688 1.438.375 2.563 0 3.188-.5a2.148 2.148 0 00.75-1.625c0-.25-.063-.438-.125-.563-.063-.125-.25-.188-.438-.25l-2.563-.813c-.125-.063-.25-.063-.375 0-.125.063-.25.188-.313.313l-.5.688a.493.493 0 01-.438.188c-.125 0-.375-.063-.75-.188a6.727 6.727 0 01-3.188-3.188c-.125-.375-.188-.625-.188-.75a.493.493 0 01.188-.438l.688-.5c.125-.063.25-.188.313-.313.063-.125.063-.25 0-.375l-.813-2.563c-.063-.188-.125-.375-.25-.438-.125-.063-.313-.125-.563-.125z" />
      </svg>
    </a>
  );
}
