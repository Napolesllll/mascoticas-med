"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Contactanos = () => {
  return (
    <section className="relative  mt-20  w-full min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white py-20 px-4">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white text-4xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`
            }}
            animate={{ 
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-500">Contáct</span>anos
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="text-red-500 text-2xl mt-1">📍</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ubicación</h3>
                <p className="text-zinc-300">Av. Mascotas Felices 123, Ciudad Canina</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-red-500 text-2xl mt-1">📞</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Teléfonos</h3>
                <p className="text-zinc-300">+57 316 316 9143</p>
                <p className="text-zinc-300">+57 322 932 2621</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-red-500 text-2xl mt-1">✉️</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-zinc-300">jeananderson2208@gmail.com</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                {[ 'tiktok'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="bg-zinc-800 hover:bg-zinc-700 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Image
                      src={`/icons/${social}.svg`}
                      alt={social}
                      width={24}
                      height={24}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
