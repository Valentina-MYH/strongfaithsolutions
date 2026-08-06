"use client";

import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative w-full py-40 md:py-40 sm:py-24 py-16 px-6 text-center overflow-hidden"
    >
      {/* Fondo negro con bolitas animadas */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 animate-particles opacity-30"></div>
      </div>

      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto text-gray-300 space-y-10 sm:space-y-8 space-y-6"
      >
        {/* Título igual al de “Nosotros” */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Bienvenido a Strong Faith
        
        </h1>
      <p></p>
        {/* Párrafo principal */}
        <p className="text-2xl md:text-2xl sm:text-xl text-base leading-relaxed font-light">
          Somos una empresa especializada en la gestión de relaciones con
          superficiarios para proyectos de infraestructura energética de gran
          escala. Somos el vínculo entre las empresas desarrolladoras y
          los propietarios o poseedores de los terrenos involucrados,
          garantizando una comunicación clara, profesional y eficiente durante
          todas las etapas del proyecto.
        </p>

        {/* Segundo párrafo */}
        <p className="text-2xl md:text-2xl sm:text-xl text-base leading-relaxed font-light">
          Nuestro trabajo consiste en coordinar el contacto con cada
          superficiario, brindar información, atender consultas, facilitar el
          diálogo y acompañar cada gestión con responsabilidad, transparencia y
          respeto. Actualmente participamos en uno de los proyectos de
          infraestructura energética más importantes de Argentina, colaborando
          con la convivencia de la ganadería, agricultura y la industria
          hidrocarburífera, aportando organización, confianza y soluciones que
          permiten el desarrollo de la obra de manera ordenada y profesional.
        </p>

        {/* Último párrafo */}
        <p className="text-2xl md:text-2xl sm:text-xl text-base leading-relaxed font-light">
          Creemos que una comunicación efectiva y el respeto por todas las
          partes involucradas son la base para el éxito de cualquier proyecto.
        </p>
      </motion.div>
    </section>
  );
}
