
import Image from "next/image";
import Link from "next/link";
import Card from "./componets/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">


      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full  after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert-0 rounded-3xl"
          src="/diarmodev_logo5.png"
          alt="Next.js Logo"
          width={230}
          height={60}
          priority
        />

      </div>

      <div className="flex flex-col mt-12">
        <p className="flex max-w-xl text-xl">
          Mi nombre es Diego Morales. Soy ingeniero electrónico y un apasionado por el desarrollo de soluciones web integrales para toda clase de problematicas.
        </p>
        <p className="flex max-w-xl text-xl"  >
          Me enfoco particularmente en el Stack NextJS-FastAPI-MongoDB
        </p>
      </div>
      <div className="flex flex-row space-x-10 mt-10">
        <Link
          className=" flex border-2 items-center border-slate-800 hover:shadow-lg  hover:shadow-slate-700 bg-black p-3 rounded-md text-slate-400 font-semibold text-xl"
          href="https://www.linkedin.com/in/diego-morales-96417220/"
          target="_blank"
        >

          <span className="[&>svg]:h-5 [&>svg]:w-5 m-1 border-2 border-slate-400 p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512">

              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </span>
          LinkedIn


        </Link>


        <Link
          className=" flex border-2 items-center border-slate-800 hover:shadow-lg  hover:shadow-slate-700 bg-black p-3 rounded-md text-slate-400 font-semibold text-xl"
          href="/CV_DiegoMorales.pdf"
          target="_blank"
        >
          <span className="[&>svg]:h-5 [&>svg]:w-5 m-1 border-2 border-slate-400 p-1 rounded-md bg-slate-500">
            <Image
              src="/curriculum.svg"
              alt="CV"
              width={20}
              height={20}
            />
          </span>


          CV


        </Link>


        <Link
          className=" flex border-2 items-center border-slate-800 hover:shadow-lg  hover:shadow-slate-700 bg-black p-3 rounded-md text-slate-400 font-semibold text-xl"
          href="https://github.com/dieguitonqn/"
          target="_blank"
        >

          <span className="[&>svg]:h-5 [&>svg]:w-5 m-1 border-2 border-slate-400 p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512">

              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </span>

          Github

        </Link>
      </div>


      <div className="mt-20 font-semibold text-4xl">
        Proyectos
      </div>
      <div className="flex ml-0 border-b border-gray-500 pb-2 w-full">Full Stack</div>
      
      <div className="flex flex-wrap md:items-start items-center ">
      <Link href="/proyectos/mackyna"
          className="hover:shadow-xl hover:shadow-slate-700 rounded-sm">
          <Card
            titulo="Mackyna"
            source="/mackyna.png"
            alt="Mackyna"
            text="Sistema de gestión para un gimnasio de la región. Se encarga de gestionar alumnos, turnos, planillas y pagos. Realizado enteramente con Nextjs."
            nextjs tailwind 
          />
        </Link>
      
      
        <Link href="/proyectos/lechuza"
          className="hover:shadow-xl hover:shadow-slate-700 rounded-sm">
          <Card
            titulo="Lechuza"
            source="/lechuza.png"
            alt="lechuza"
            text="Sistema de gestion documental para el EPEN. Gestiona toda la documentación y la trazabilidad de las obras del EPEN. Hecho enteramente con PHP, CSS, JS y MariDB. No se utilizó ningún framework."
            php js mariadb bootstrap css

          />
        </Link>

        <Link href="/proyectos/lechuipe"
          className="hover:shadow-xl hover:shadow-slate-700 rounded-sm">
          <Card
            titulo="Lechuipe"
            source="/lechuipe.png"
            alt="lechuza"
            text="Sistema de gestion de información de red privada. Realizado enteramente con PHP, CSS, JS y MariDB. No se utilizó ningún framework."
            php js mariadb bootstrap css
          />
        </Link>
        <Link href="/proyectos/lechucao"
          className="hover:shadow-xl hover:shadow-slate-700 rounded-sm">
          <Card
            titulo="LechuCAO"
            source="/lechucao.png"
            alt="lechuza"
            text="Sistema de gestión documental Conforma a obra (CAO). Realizado con NextJS para el frontEnd y Fastapi para el BackEnd. Como base de datos se usó MongoDB"
            fastapi nextjs mongodb tailwind

          />
        </Link>

        
        
      </div>
      <div className="flex ml-0 border-b border-gray-500 pb-2 w-full mt-10">Front End</div>
      <div className="flex flex-wrap md:items-start items-center ">
      <Link href="/proyectos/mildestinos"
          className="hover:shadow-xl hover:shadow-slate-700 rounded-sm">
          <Card
            titulo="Mil Destinos"
            source="/mildestinos.png"
            alt="Mil Destinos"
            text="Página web de una agencia de viajes de la Patagonia. Realizado enteramente con Nextjs."
            nextjs tailwind 
          />
        </Link>
        <Link href="/proyectos/hexa"
          className="hover:shadow-xl hover:shadow-slate-700 rounded-sm">
          <Card
            titulo="Hexa Automation SRL"
            source="/hexaautomation.png"
            alt="Hexa Autmoation SRL"
            text="Página web de una empresa de servicios de tecnología de Oil&Gas de la Patagonia. Realizado enteramente con Nextjs."
            nextjs tailwind 
          />
        </Link>
        <Link href="/proyectos/bicharraco"
          className="hover:shadow-xl hover:shadow-slate-700 rounded-sm">
          <Card
            titulo="Bicharraco Films"
            source="/bicharraco.png"
            alt="lechuza"
            text="Página web de una productora audiovisual de la Patagonia. Realizado enteramente con PHP, CSS y MariDB. No se utilizó ningún framework."
            php bootstrap css 
          />
        </Link>
      </div>

    </main>
  );
}
