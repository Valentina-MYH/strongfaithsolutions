"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Counter({ from = 0, to = 100, duration = 1 }) {
  const [value, setValue] = useState(from);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      value: to,
      transition: { duration, ease: "easeOut" },
    });
  }, [controls, to, duration]);

  return (
    <motion.span
      animate={controls}
      onUpdate={(latest) => setValue(Math.floor(latest.value))}
    >
      {value}
    </motion.span>
  );
}

export default function Estadisticas() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-4xl font-bold">Estadísticas</h2>
        <p className="text-gray-400 text-sm mt-2">
          Datos clave de nuestra experiencia territorial y operativa
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">

        {/* 500 km supervisados */}
        <div>
          <h3 className="text-4xl font-bold">
            +<Counter from={0} to={500} duration={1.5} /> km
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Tierras supervisadas<br />
            <span className="text-xs">(Oleoductos, gasoductos, líneas de sísmica)</span>
          </p>
        </div>

        {/* 80 superficiarios */}
        <div>
          <h3 className="text-4xl font-bold">
            <Counter from={0} to={80} duration={1.2} />
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Superficiarios gestionados
          </p>
        </div>

        {/* 110 reuniones técnicas */}
        <div>
          <h3 className="text-4xl font-bold">
            +<Counter from={0} to={110} duration={1.3} />
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Reuniones técnicas coordinadas
          </p>
        </div>

        {/* 0 incidentes legales */}
        <div>
          <h3 className="text-4xl font-bold">
            <Counter from={0} to={0} duration={0.5} />
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Incidentes legales en mediaciones
          </p>
        </div>

        {/* 99% aceptación territorial */}
        <div>
          <h3 className="text-4xl font-bold">
            <Counter from={0} to={99} duration={1.4} />%
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Aceptación en gestiones territoriales
          </p>
        </div>

      </div>
    </section>
  );
}
