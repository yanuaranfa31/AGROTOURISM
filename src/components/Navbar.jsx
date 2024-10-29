import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`border-b shadow-sm py-4 transition duration-500 px-4 sticky top-0 w-full z-20 sm:px-6 lg:block hidden ${
            isScrolled ? 'backdrop-blur-md bg-white/20' : 'bg-transparent'
        }`}>
            {/* <Link to="/">
                <img src={logo} alt="Logo" className="flex group items-center mr-3" />
            </Link> */}

            <ul className="flex group items-center mr-3">
                <li>
                    <Link to="/" className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">Beranda</Link>
                </li>
                <li>
                    <Link to="/destinasi-wisata" className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">Destinasi Wisata</Link>
                </li>
                <li>
                    <Link to="/panduan-booking" className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">Panduan Booking</Link>
                </li>
                <li>
                    <Link to="/cek-kuota" className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">Cek Kuota</Link>
                </li>
                <li>
                    <Link to="/penginapan" className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">Penginapan</Link>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
