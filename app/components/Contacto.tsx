"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative w-full py-20 px-6 text-center overflow-hidden"
    >
      {/* Imagen de fondo animada */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/contacto.jpg"
          alt="Contacto Strong Faith"
          fill
          className="object-cover brightness-50"
        />
      </motion.div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-gray-200 space-y-6"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Contacto
        </h2>

        <p className="text-lg font-semibold leading-relaxed">
          Estamos preparados para acompañar proyectos energéticos que requieren una mediación territorial profesional, organizada y eficiente.
        </p>

        <p className="text-lg font-semibold leading-relaxed">
          Si desea conocer más sobre nuestros servicios o establecer una alianza estratégica, nuestro equipo está disponible para brindarle asesoramiento y responder sus consultas.
        </p>

        <p className="text-white font-bold text-xl leading-relaxed">
          Trabajemos juntos para impulsar el desarrollo de proyectos con diálogo, confianza y profesionalismo.
        </p>

        <a
          href="https://wa.me/XXXXXXXXXX"
          className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
