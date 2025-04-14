"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function lechuza() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-slate-900 ">
      <h1 className="text-4xl text-slate-200">Lechuza</h1>
      <div className="flex flex-col items-center justify-center mt-5 w-full md:w-3/4">
        <p className="text-slate-200 text-lg mt-5 max-w-3/4    ">
          Sistema de gestión documental para el EPEN. Gestiona toda la
          documentación y la trazabilidad de las obras del EPEN. Posee una
          interfaz amigable y fácil de usar, lo que permite a los usuarios
          navegar por la aplicación sin complicaciones. Además, cuenta con un
          sistema de búsqueda avanzado que permite a los usuarios encontrar
          rápidamente la información que necesitan. La aplicación está diseñada
          para ser altamente escalable y flexible, lo que significa que puede
          adaptarse a las necesidades cambiantes de la organización.
        </p>
        <Image
          src="/lechuza.png"
          width={1080}
          height={800}
          alt="lechuza"
          className="rounded-lg w-dull md:w-1/2"
        />
        <div className="flex flex-col md:flex-row items-center justify-center mt-5">
          <p>
            Posee un buscardor interactivo como página principal, lo que genera
            una rápida busqueda y localización de la documentación requerida.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            // whileHover={{scale:1.5}}
          >
            <Image
              src="/lechuzaMain.png"
              alt="lechuza"
              width={1080}
              height={800}
              className="rounded-lg mt-5"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
