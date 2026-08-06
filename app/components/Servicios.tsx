"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Servicios() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const servicios = [
    {
      img: "/servicio1.jpg",
      titulo: "Asesoramiento técnico",
      texto:
        "Asistencia técnica en exploración, explotación, extracción y transporte de hidrocarburos, minería y energías renovables.",
    },
    {
      img: "/servicio2.jpg",
      titulo: "Gestión territorial",
      texto:
        "Gestión de servidumbres, mediación territorial, informes de uso y ocupación, indemnizaciones y recomposición de daños.",
    },
    {
      img: "/servicio3.jpg",
      titulo: "Prevención de conflictos",
      texto:
        "Mediación técnica, arbitraje, negociación ambiental y facilitación de mesas de diálogo entre empresas y otros sectores de la comunidad.",
    },
    {
      img: "/servicio4.jpg",
      titulo: "Operaciones sísmicas",
      texto:
        "Asistencia en campañas sísmicas 2D, 3D y microsísmicas, monitoreo territorial y resolución de contingencias.",
    },
    {
      img: "/servicio5.JPG",
      titulo: "Supervisión de obras",
      texto:
        "Supervisión técnica, seguridad e higiene, protección ambiental, calidad de ejecución y cumplimiento operativo.",
    },
    {
      img: "/servicio6.jpg",
      titulo: "Gestión ambiental",
      texto:
        "Estudios ambientales, auditorías, consultoría especializada, peritajes y programas de monitoreo.",
    },
    {
      img: "/servicio7.jpg",
      titulo: "Capacitación técnica",
      texto:
        "Programas de capacitación en gestión de calidad, gestión ambiental, RSE y seminarios técnicos.",
    },
    {
      img: "/servicio8.jpg",
      titulo: "Estudios geotécnicos",
      texto:
        "Evaluaciones geotécnicas y estudios de estabilidad de taludes para proyectos de infraestructura.",
    },
  ];

  return (
    <section
      id="servicios"
      className="relative w-full py-24 px-6 text-center overflow-hidden"
    >
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-16"
      >
        Nuestros servicios
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-7xl mx-auto">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          >
            {/* IMAGEN */}
            <div className="w-full h-64 overflow-hidden">
              <Image
                src={servicio.img}
                alt={servicio.titulo}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* TÍTULO */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-4">
              <h3 className="text-xl font-bold text-white">
                {servicio.titulo}
              </h3>
            </div>

            {/* TEXTO — hover en desktop / tap en móvil */}
            <div
              className={`
                absolute inset-0 bg-black/70 flex items-center justify-center p-6 text-sm text-gray-200 leading-relaxed
                transition-opacity duration-500
                ${activeIndex === index ? "opacity-100" : "opacity-0"}
                group-hover:opacity-100
              `}
            >
              {servicio.texto}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
