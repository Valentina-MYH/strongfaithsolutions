export default function Footer() {
  return (
    <>
      {/* Línea divisoria arriba del footer */}
      <div className="w-full border-t border-gray-700 mt-20"></div>

      <footer className="w-full bg-black/80 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Título */}
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            Strong Faith
          </h3>

          {/* Descripción */}
          <p className="text-gray-400 text-xs leading-relaxed max-w-2xl mx-auto">
            Gestión de relaciones superficiarias y coordinación territorial para proyectos de infraestructura energética de alta complejidad.
          </p>

          {/* Email visible */}
          <p className="text-gray-400 text-xs mt-4">
            <span className="font-semibold text-white">Email:</span>{" "}
            admin@strongfaithsolutions.com
          </p>

          {/* Navegación */}
          <div className="mt-8">
            <ul className="flex flex-col md:flex-row justify-center gap-4 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Íconos */}
          <div className="flex justify-center gap-6 mt-8">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.9c0-1.9-.1-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:admin@strongfaithsolutions.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 13.5L0 6V4l12 7.5L24 4v2zM0 8l12 7.5L24 8v12H0z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/XXXXXXXXXX"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 2.1.63 4.05 1.72 5.67L2 22l4.42-1.66A10.02 10.02 0 0 0 12.04 22C17.58 22 22 17.5 22 12.04 22 6.5 17.58 2 12.04 2zm5.9 14.48c-.25.7-1.45 1.37-2.02 1.45-.53.08-1.2.11-3.97-.82-3.34-1.1-5.5-4.77-5.67-4.99-.16-.22-1.35-1.8-1.35-3.44 0-1.64.85-2.45 1.15-2.78.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.2.01.47-.08.74.57.25.6.85 2.06.93 2.21.08.15.13.33.03.53-.1.2-.15.33-.3.52-.15.2-.32.44-.45.6-.15.15-.3.32-.13.63.16.32.72 1.18 1.54 1.91 1.06.94 1.95 1.23 2.27 1.38.33.15.52.13.72-.08.2-.22.83-.97 1.05-1.3.22-.33.44-.27.74-.16.3.11 1.9.9 2.23 1.06.33.16.55.24.63.38.08.14.08.8-.17 1.5z"/>
              </svg>
            </a>

          </div>

          {/* Línea inferior */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} Strong Faith — Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
