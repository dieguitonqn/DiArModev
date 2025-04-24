// components/Navbar.js
'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SlMenu } from "react-icons/sl";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 bg-gray-950 p-4 shadow-slate-800 shadow-lg border-4 border-black border-b-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-shrink-0 items-center">
                        <Image
                            className='mx-4'
                            src="/diarmodevlogotrans.png"
                            alt='Diarmo dev logo'
                            width={50}
                            height={50}
                        />
                        <Link href={"/"}
                            className="text-white font-bold text-xl">
                            DiArMo dev
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href={"/"}
                                    className="text-white hover:text-gray-300">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href={"/aboutMe"}
                                    className="text-white hover:text-gray-300">
                                    Acerca de mi
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none">
                            <SlMenu className='h-8 w-10' />
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-4 w-full flex justify-end">
                        <ul className="space-y-2 text-center">
                            <li>
                                <Link href={"/"}
                                    className="block text-white hover:text-gray-300 p-1 hover:shadow-lg shadow-sm shadow-slate-400 border-b border-gray-500 rounded">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href={"/aboutMe"}
                                    className="block text-white hover:text-gray-300 p-1 hover:shadow-lg shadow-sm shadow-slate-400 border-b border-gray-500 rounded">
                                    Acerca de mi
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
