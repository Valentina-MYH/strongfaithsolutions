"use client";

import Image from "next/image";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative w-full min-h-[100vh] flex items-center justify-center text-center overflow-hidden pt-32"
    >
      {/* Imagen de fondo con movimiento tipo navbar */}
      <div className="absolute inset-0 w-full h-full animate-zoomFloat">
        <Image
          src="/Contacto.jpg"   // <-- tu imagen de fondo
          alt="Contacto Strong Faith"
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Texto encima */}
      <div className="relative z-10 max-w-2xl px-6 text-gray-200 space-y-6 animate-fadeUp">
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Contacto
        </h2>

        <p className="text-lg font-semibold leading-relaxed">
          Estamos preparados para acompañar proyectos energéticos que requieren una gestión territorial profesional, organizada y eficiente.
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
      </div>
    </section>
  );
}
