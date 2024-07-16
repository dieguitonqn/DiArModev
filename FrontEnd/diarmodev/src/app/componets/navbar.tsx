// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link href={"#"}
                            className="text-white font-bold text-xl">
                            Next.js Tailwind Navbar
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
