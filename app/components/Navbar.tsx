"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = ["inicio", "servicios", "nosotros", "contacto"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActive(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `hover:text-gray-300 transition-colors ${
      active === id ? "text-green-300 font-semibold" : "text-white"
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold text-white">
          StrongFaith
        </Link>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex gap-8 font-medium`}
        >
          <Link href="#inicio" className={linkClass("inicio")}>
            Inicio
          </Link>
      
          <Link href="#nosotros" className={linkClass("nosotros")}>
            Sobre nosotros
          </Link>
          <Link href="#servicios" className={linkClass("servicios")}>
            Servicios
          </Link>
          <Link href="#contacto" className={linkClass("contacto")}>
            Contacto
          </Link>
        </div>

         
        <div className="hidden md:block">
          <a
            href="https://wa.me/XXXXXXXXXX"
            className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            WhatsApp
          </a>
        
        </div>
      </div>
    </nav>
  );
}
