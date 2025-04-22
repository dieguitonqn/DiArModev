import React from "react";
import Image from "next/image";
import MuestraPages from "@/app/componets/muestraPages";

const Mackyna = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-slate-900 ">
      <h1 className="text-4xl text-slate-200 mt-5">Mackyna</h1>
      <div className="flex flex-col items-center justify-center mt-5 w-full md:w-3/4">
        <p className="text-slate-200 text-lg mt-5 max-w-3/4    ">
          Sistema de gestión integral del gimnasio Mackyna. Gestiona toda la
          información de los alumnos, turnos, planillas de entrenamientos y
          pagos(proximamente). Posee una interfaz amigable y fácil de usar, lo
          que permite a los usuarios navegar por la aplicación de forma
          intuitiva.
        </p>
        <br />

        <p>
          La aplicación cuenta con dos portales principales. Uno es el{" "}
          <strong>portal de alumnos</strong>, donde los alumnos pueden ver sus
          entrenamientos, turnos, mediciones personales y sus pagos. El otro es
          el <strong>portal de Profesores</strong>, donde los profesores pueden
          gestionar las planillas de entrenamiento de los alumnos, así como sus
          turnos y pagos.
        </p>
        <br />

        <p>
          La aplicación está diseñada para ser altamente escalable y flexible,
          lo que significa que puede adaptarse a las necesidades cambiantes del
          gimnasio.
        </p>
        <br />

        <Image
          src="/Mackyna/mackyna.png"
          width={1080}
          height={800}
          alt="Mackyna landing"
          className="rounded-lg w-dull md:w-1/2"
        />
      </div>
      <MuestraPages
        texto='El portal de alumnos, donde pueden ver sus entrenamientos, turnos, mediciones personales y sus pagos en forma de tarjetas o  "cards" para que sea visiblemente sensillo y fácil de acceder.'
        imagen="/Mackyna/portalAlumnos.png"
        izquierda={true}
      />
      <MuestraPages
      texto="En la sección de rutinas deentrenamientos, los alumnos pueden ver sus distintas rutinas de entrenamiento conforme pasa el tiempo. Además, pueden ingresar y ver su rutina específica."
        imagen="/Mackyna/rutinas.png"
        izquierda={false}
      />
          <MuestraPages
        texto="En la sección de mediciones, los alumnos pueden ver sus mediciones personales y su evolución a lo largo del tiempo. Además, pueden ingresar nuevas mediciones y ver su progreso."
        imagen="/Mackyna/medicionesCorporales.png"
        izquierda={true}
      />
      <MuestraPages
      texto="En la sección de turnos, los alumnos pueden ver sus turnos y gestionarlo(reservar nuevos turnos y/o cancelarlos). Además, pueden ver los turnos disponibles y la capacidad del gimansio en ese horario particular."
        imagen="/Mackyna/Turnos.png"
        izquierda={false}
      />
        <MuestraPages
            texto="El portal de profesores(En construcción), donde pueden gestionar las planillas de entrenamiento de los alumnos,los ejercicios del gimansio los pagos y los turnos de los alumnos."
            imagen="/Mackyna/portalProfes.png"
            izquierda={true}
            />
        <MuestraPages
        texto="En la sección de alumnos, los preofesores pueden ver todos los alumnos y gestionar sus rutinas de entrenamiento. Además, pueden ver la evolución de los alumnos y su progreso. 
        Pueden gestionar sus contraseñas, disponibilidad de horarios según su pago mensual y deshabilitar al usuario moroso."
        imagen="/Mackyna/listaAlumnos.png"
        izquierda={false}
      />
      <MuestraPages
      texto="En la sección de ejercicios, los profesores pueden ver, agregar y/o editar todos los ejercicios del gimnasio. Basados en este listado, los profesores pueden crear las rutinas de entrenamiento de los alumnos."
        imagen="/Mackyna/listaEjercicios.png"
        izquierda={true}
      />
        <MuestraPages
        texto="El sistema posee un novedoso método de colores para visualizar las reservas de los turnos de los alumnos. Los profesores, pueden ver de forma global, clara y rápida, la disponibilidad
        del gimansio y la cantidad de alumnos que hay en cada turno, así como también saber qué alumnos están en cada turno."
        imagen="/Mackyna/reservas.png"
        izquierda={false}
      />
      <MuestraPages
      texto="Finalmente, el sistema cuenta con una herramienta para realizar las rutinas de entrenamiento de los alumnos. Los profesores pueden crear, editar y eliminar las rutinas de entrenamiento de los alumnos. Además, pueden ver la evolución de los alumnos y su progreso."
        imagen="/Mackyna/nuevaRutina.png"
        izquierda={true}
      />
    </div>
  );
};

export default Mackyna;
