"use client";

import Image from "next/image";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative w-full min-h-[100vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Imagen de fondo con movimiento tipo navbar */}
      <div className="absolute inset-0 w-full h-full animate-zoomFloat">
        <Image
          src="/nosotros.jpg"
          alt="Sobre Nosotros"
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Texto encima */}
      <div className="relative z-10 max-w-2xl px-6 text-gray-200 space-y-6 animate-fadeUp">
        <h2 className="text-4xl font-bold text-white mb-4">
          Sobre Nosotros
        </h2>

        <p className="text-lg leading-relaxed">
          Somos una empresa especializada en la gestión de relaciones superficiarias para proyectos de infraestructura energética de alta complejidad.
        </p>

        <p className="text-lg leading-relaxed">
          Nuestro objetivo es facilitar el desarrollo de obras estratégicas mediante una gestión territorial profesional, transparente y eficiente, actuando como nexo entre las empresas desarrolladoras y los superficiarios.
        </p>

        <p className="text-lg leading-relaxed">
          Contamos con un equipo comprometido con la comunicación, la organización y el seguimiento de cada etapa del proceso, asegurando que todas las partes involucradas reciban información clara, respuestas oportunas y un acompañamiento permanente.
        </p>

        <p className="text-lg leading-relaxed">
          Trabajamos bajo principios de integridad, respeto y responsabilidad, contribuyendo al desarrollo de proyectos que impulsan el crecimiento del sector energético argentino.
        </p>
      </div>
    </section>
  );
}
