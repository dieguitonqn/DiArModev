// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
                                <Link href={"#"}
                                    className="text-white hover:text-gray-300">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}
                                    className="text-white hover:text-gray-300">
                                    Acerca de
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}
                                    className="text-white hover:text-gray-300">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
