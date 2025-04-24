import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import Link from "next/link";

export interface ButtonRedesProps {
    
    link: string;
    text: string;
    github:boolean;
    linkedin:boolean;
    instagram:boolean;
    mail:boolean;
}

export const ButtonRedes = ({link,text,github, linkedin, instagram, mail }:ButtonRedesProps ) => {
    return(
        <div>
        <Link
          className=" flex border-2 items-center border-slate-800 hover:shadow-lg  hover:shadow-slate-700 bg-black p-3 rounded-md text-slate-400 font-semibold text-xl"
          href={link}
          target="_blank"
        >
            <div className='m-1 border border-slate-400 p-1 rounded-md'>
              {github && (
                <FaGithub className='h-5 w-5'/>
            )}
            {linkedin && (
                <FaLinkedin className='h-5 w-5' />
            )}
            {instagram && (
                <FaInstagram className='h-5 w-5'/>
            )}  
            {mail &&
                <RiMailSendLine className='h-5 w-5'/>
            }
            </div>
            



          {text}


        </Link>
        </div>
    )
}