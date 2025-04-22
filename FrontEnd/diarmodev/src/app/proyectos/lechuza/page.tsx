import React from "react";
import Image from "next/image";
import MuestraPages from "@/app/componets/muestraPages";

export default function lechuza() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-slate-900 ">
      <h1 className="text-4xl text-slate-200 mt-5">Lechuza</h1>
      <div className="flex flex-col items-center justify-center mt-5 w-full md:w-3/4">
        <p className="text-slate-200 text-lg mt-5 max-w-3/4    ">
          Sistema de gestión documental para el EPEN. Gestiona toda la
          documentación y la trazabilidad de las obras del EPEN. Posee una
          interfaz amigable y fácil de usar, lo que permite a los usuarios
          navegar por la aplicación de forma intuitiva. Además, cuenta con un
          sistema de búsqueda avanzado que permite a los usuarios encontrar
          rápidamente la información que necesitan. 

        </p>
        <p>
        La aplicación está diseñada
          para ser altamente escalable y flexible, lo que significa que puede
          adaptarse a las necesidades cambiantes de la organización.
        </p>
        <Image
          src="/lechuza/lechuza.webp"
          width={1080}
          height={800}
          alt="lechuza"
          className="rounded-lg w-dull md:w-1/2"
        />
        <MuestraPages
        texto="Posee un buscador interactivo como página principal, lo que genera una rápida busqueda y localización de la documentación requerida."
        imagen="/lechuza/lechuzaMain.png"
        izquierda={true}
        />
       

        <MuestraPages
        texto="Cuenta con un listado de documentos interactivo para cada obra, donde se pueden visualizar todos los documentos relacionados a la obra y su trazabilidad."
        imagen="/lechuza/lechuzaListado.png"
        izquierda={false}
        />
        <MuestraPages
        texto="Posee un sistema de gestión de usuarios, donde se pueden crear, editar y eliminar usuarios, así como asignarles roles y permisos."
        imagen="/lechuza/lechuzaUsuarios.png"
        izquierda={true}
        />
        <MuestraPages
        texto="Posee un sistema de gestión de obras, donde se pueden crear, editar y eliminar obras, así como asignarles documentos y usuarios."
        imagen="/lechuza/lechuzaEmpresas.png"
        izquierda={false}
        />
        <MuestraPages
        texto="Posee un sistema de ingreso de documentos simple y rápido. Además, posee un aviso por correo a todos los usuarios que estén suscriptos."
        imagen="/lechuza/lechuzaIngreso.png"
        izquierda={true}
        />
        <MuestraPages
        texto="Posee un sistema para corrección de documentos, donde se califican documentos y se agrega un informe de ingeniería."
        imagen="/lechuza/lechuzaCorreccion.png"
        izquierda={false}
        />
        <MuestraPages
        texto="Posee un sistema de gestión de correos, en el cual se pueden suscribir y configurar los correos a los cuales se envían las notificaciones."
        imagen="/lechuza/lechuzaMails.png"
        izquierda={true}
        />
        <MuestraPages
        texto="Finalmente, posee una ayuda online interactiva con enlaces directos desde cada punto de la página, lo que permite al usuario navegar por la aplicación sin complicaciones."
        imagen="/lechuza/lechuzaHelp.png"
        izquierda={false}
        />
      </div>
    </div>
  );
}
