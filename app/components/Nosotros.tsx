"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
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
          src="/nosotros.jpg"
          alt="Sobre Nosotros"
          fill
          className="object-cover brightness-50"
        />
      </motion.div>

      {/* Texto animado */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-gray-200 space-y-6"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Sobre Nosotros
        </h2>

        <p  className="text-2xl md:text-2xl sm:text-xl text-base leading-relaxed font-light">
          Somos una empresa especializada en la gestión de relaciones entre superficiarios propietarios de campos y empresas operadoras, para proyectos de infraestructura energética de alta complejidad.
        </p>

        <p  className="text-2xl md:text-2xl sm:text-xl text-base leading-relaxed font-light">
          Nuestro objetivo es facilitar el desarrollo de obras estratégicas mediando de forma transparente y eficiente.
        </p>

        <p  className="text-2xl md:text-2xl sm:text-xl text-base leading-relaxed font-light">
          Contamos con un equipo comprometido con la comunicación, la organización y el seguimiento de cada etapa del proceso, asegurando que todas las partes involucradas reciban información clara, respuestas oportunas y un acompañamiento permanente.
        </p>

        <p  className="text-2xl md:text-2xl sm:text-xl text-base leading-relaxed font-light">
          Trabajamos bajo principios de integridad, respeto y responsabilidad, contribuyendo al desarrollo de proyectos que impulsan el crecimiento del sector energético argentino.
        </p>
      </motion.div>
    </section>
  );
}
