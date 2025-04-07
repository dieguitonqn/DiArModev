import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardDetail } from "@/app/componets/cardDetail";
import { GaleriaImagenes } from "@/app/componets/galeria";

function Hexa() {
  const imagenes = [
    {
      src: "/hexaautomation2.png",
      alt: "Hexa Automation SRL",
    },
    {
      src: "/hexaautomation.png",
      alt: "Hexa Automation SRL",
    },
    {
      src: "/hexaautomation3.png",
      alt: "Hexa Automation SRL",
    },
    {
      src: "/hexaautomation4.png",
      alt: "Hexa Automation SRL",
    },
    {
      src: "/hexaautomation5.png",
      alt: "Hexa Automation SRL",
    },
    {
      src: "/hexaautomation6.png",
      alt: "Hexa Automation SRL",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center max-w-3/4 mx-auto p-4">
      <div className="text-2xl">Hexa Automation SRL</div>
      <div className="p-6  w-full md:w-[75%] mx-auto justify-center">
        <br />
        <br />
        La página de Hexa Automation SRL fue realizada enteramente con Nextjs y
        Tailwind. Se trata de una página web para una empresa de servicios de
        tecnología de Oil&Gas de la Patagonia.
        <br />
        <br />
        {/* <CardDetail
          source="/hexaautomation2.png"
          alt="Hexa Automation SRL"
          text="Landing de Hexa Automation SRL"
        /> */}
        <GaleriaImagenes
          imagenes={imagenes}
          slidesPerView={3}
        />
        <br />
      </div>
      <div className="p-6  w-full md:w-[75%] mx-auto justify-center">        
        La página incluye un diseño responsivo y moderno, con un enfoque en la
        usabilidad y la accesibilidad. Se utilizó Nextjs para el desarrollo del
        front-end, lo que permite una carga rápida y eficiente de las páginas.
        Además, se implementaron diversas funcionalidades interactivas
        utilizando Tailwind CSS, lo que mejora la experiencia del usuario.
        <br />
        <br />
        La página incluye secciones como &quot;Servicios&quot;, &quot;Proyectos&quot;, &quot;Contacto&quot;,
        &quot;Galería&quot;, &quot;Casos de éxito&quot; y &quot;Sobre nosotros&quot;, lo que permite a los
        usuarios conocer más sobre la empresa y sus servicios. También se
        implementaron formularios de contacto y secciones de testimonios para
        mejorar la interacción con los usuarios.
        <br />
        <br />
      </div>
      <div>
        <Link
          href="https://hexa-automation.com.ar/"
          target="_blank"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all duration-300"
        >
          Visitar Página
        </Link>
      </div>
    </div>
  );
}

export default Hexa;
