"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { div } from "motion/react-client";

export const MuestraPages = ({
  texto,
  imagen,
  izquierda = false,
}: {
  texto: string;
  imagen: string;
  izquierda: boolean;
}) => {
  if (izquierda) {
    return (
      <div>
        <div className="flex border-b border-1 border-slate-800 shadow-slate-600 shadow-sm w-full mt-5"></div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-5">
          <p className="text-slate-200 text-lg mt-5 w-full md:w-1/2 md:ml-5 p-1 text-center">{texto}</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            // whileHover={{scale:1.5}}
          >
            <Image
              src={imagen}
              alt="lechuza"
              width={400}
              height={200}
              className="rounded-lg mt-5"
            />
          </motion.div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex border-b border-1 border-slate-800 shadow-slate-600 shadow-sm w-full mt-5"></div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            // whileHover={{scale:1.5}}
          >
            <Image
              src={imagen}
              alt="lechuza"
              width={400}
              height={200}
              className="rounded-lg mt-5"
            />
          </motion.div>
          <p className="text-slate-200 text-lg mt-5 w-full md:w-1/2 md:ml-5 p-1 text-center">{texto}</p>
        </div>
      </div>
    );
  }
};
export default MuestraPages;
