'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


function AboutMe() {
  return (
    <div className='flex flex-col justify-center text-justify h-full gap-8 text-xl w-full p-2 md:w-3/4 mx-auto'>
      <Image
        src='/yo.jpeg'
        alt='Diego Morales'
        width={300}
        height={300}
        className='rounded-full mx-auto'
        priority
      />

      <h1>¡Hola 😀 ! Soy Diego Morales. Alguna vez te preguntaste...</h1>
      <motion.div className='text-justify italic justify-center w-5/6 md:w-1/2 mx-auto'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
      ¿Qué pasa cuando la lógica implacable de la ingeniería se encuentra con 
      la creatividad sin límites del desarrollo web? 🤔
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
      La respuesta es que obtenés un enfoque diferente, una manera 
      de construir sitios y aplicaciones que no solo funcionan, sino que están diseñados con 
      una comprensión profunda de los sistemas para hacerlos sencillos y completamente funcionales.
      </motion.p>
      <motion.p
        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
        
        transition={{ duration: 0.8, delay: 0.4 }}
      >
      Mi formación como ingeniero electrónico me enseñó a abordar los problemas con lógica, 
      estructura y atención al detalle. Ahora, aplico esa misma metodología rigurosa al 
      desarrollo web, creando soluciones robustas y eficientes.
      </motion.p>
      <motion.p
        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
        
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Mis comienzos como técnico en electrónica me brindaron una sólida base en la comprensión de
        circuitos y sistemas, lo que me permite abordar los desafíos de desarrollo con un criterio técnico.
        Descubrí mi pasión por la programación (en ese entonces Visual Basic y Assembler 😨) mientras trabajaba en proyectos de automatización y control.
      </motion.p>
      <motion.p
        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
        
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Luego en mi paso por la Universad Nacional del Comahue, hallé mi primer trabajo como becario en el laboratorio
        de mecánica, el en Grupo de Mecánica de Fractura (GMF), donde me sumergí en el mundo de la investigación y la innovación.
        Allí, aprendí a aplicar mis conocimientos técnicos a problemas del mundo real, desarrollando un enfoque analítico y metódico para resolver desafíos cada vez más complejos.
        Al mismo tiempo, tuve un gran tutor, el Dr. Juan Perez Ipiña quién no solo me enseñó sobre cómo aplicar mis conocimientos electrónicos a la ingeniería mecánica, sino que también 
        me enseñó y mostró la forma de ser líder de proyecto teniendo personal a cargo, y cómo ser un buen compañero de trabajo.
        Aquí fue donde realmente comprendí la importancia de la colaboración y el trabajo en equipo, habilidades que considero fundamentales en el desarrollo web.
        Comencé mi trabajo final de carrera teniendo como base el trabajo de investigación que había realizado en el GMF, teniendo que implementar varios lenguajes de programación, todos orientados 
        a los microcontroladores y Matlab para el procesamiento de datos.
      </motion.p>
      <motion.p
        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
        
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Luego de varios años de trabajo en el área de investigación y desarrollo, decidí dar un giro a mi carrera y me sumergí en el mundo de la ingeniería de proyectos para Transporte Eléctrico. Aquí es dónde
        desarollé mis habilidades de gestión de proyectos y aprendí a coordinar equipos multidisciplinarios para llevar a cabo proyectos complejos como lo son Estaciones Transformadoras de Alta Tensión.
      </motion.p>
      <motion.p
        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
        
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Luego de muchos años, llevado por la curiosidad y las ganas de aprender desarrollo web (cosa que había dejado de lado por mucho tiempo), decidí comenzar con un curso básico de desarrollo web de la Fundación Telefónica.
        Este fue el puntapié inicial para comenzar mi carrera como desarrollador web. Desde entonces, he estado aprendiendo y creciendo en este campo, explorando nuevas tecnologías y herramientas para mejorar mis habilidades.
        Me apasiona la idea de crear experiencias web únicas y funcionales, y disfruto del proceso de diseño y desarrollo tanto como del resultado final.
      </motion.p>
      <motion.p
        whileInView={{ opacity: [0, 1], x: [-50, 0] }}
        
        transition={{ duration: 0.8, delay: 0.4 }}
      >Asi nació....</motion.p>
      <Image
        src='/diarmodev_logo5.png'
        alt='Diarmo dev logo'
        width={300}
        height={300}
        className=' mx-auto'
        priority
      />
    </div>
  )
}

export default AboutMe
