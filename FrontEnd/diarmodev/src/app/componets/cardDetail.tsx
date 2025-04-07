import React from "react";
import Image from "next/image";

interface Props {
  source: string;
  alt: string;
  text: string;
}

export const CardDetail = ({source, alt, text}:Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-80 justify-center items-center flex flex-col m-4">
        

        <Image src={source} alt={alt} width={500} height={500} />
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
};
