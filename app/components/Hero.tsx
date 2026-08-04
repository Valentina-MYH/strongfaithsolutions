"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      
      {/* Imagen con movimiento */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{
          backgroundImage: "url('/header.jpg')",
        }}
      />

      {/* Capa oscura para texto */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Texto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          StrongFaith Solutions
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl drop-shadow-lg">
         Gestión de relaciones superficiarias y coordinación territorial para proyectos de infraestructura energética de alta complejidad
        </p>
      </div>
    </section>
  );
}
