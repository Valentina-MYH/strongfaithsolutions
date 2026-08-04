export default function Servicios() {
  return (
    <section
      id="servicios"
      className="max-w-6xl mx-auto py-24 px-6 pt-32"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Nuestros Servicios
      </h2>

      <div className="grid md:grid-cols-2 gap-10 text-white">

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Gestión de Relaciones Superficiarias
          </h3>
          <p className="text-gray-300">
            Coordinamos el vínculo entre las empresas y los superficiarios, promoviendo una comunicación fluida, profesional y basada en el respeto mutuo.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Contacto y Coordinación Territorial
          </h3>
          <p className="text-gray-300">
            Organizamos el contacto inicial, el seguimiento y la coordinación de reuniones, visitas y gestiones necesarias para el avance del proyecto.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Comunicación Institucional
          </h3>
          <p className="text-gray-300">
            Brindamos información clara y precisa a los superficiarios, respondiendo consultas y facilitando el diálogo durante todas las etapas de la obra.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Seguimiento de Gestiones
          </h3>
          <p className="text-gray-300">
            Realizamos un monitoreo continuo de cada caso, manteniendo registros actualizados y garantizando la trazabilidad de las acciones realizadas.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4">
            Apoyo Operativo para Proyectos Energéticos
          </h3>
          <p className="text-gray-300">
            Acompañamos a empresas del sector de hidrocarburos en la planificación y ejecución de proyectos de infraestructura, aportando organización, eficiencia y gestión profesional del territorio.
          </p>
        </div>

      </div>
    </section>
  );
}
