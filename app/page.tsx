import Hero from "./components/Hero";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <Inicio />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  );
}
