import Navbar from "../components/Navbar";
import GuaJepang from "../asset/GuaJepang.jpg";
import GurunTeh from "../asset/GurunTeh.jpg";
import PuncakSakub from "../asset/PuncakSakub.jpg";
import Kaligua from "../asset/Kaligua.jpg";

import Teh from "../asset/Teh.jpg"; // Import gambar untuk background
import { Link } from 'react-router-dom';

import React from "react";
import DestinasiWisata from "./DestinasiWisata";
import PanduanBooking from "./PanduanBooking";
import Footer from "../components/Footer";

export default function Beranda() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${Teh})`, // Menggunakan gambar sebagai background
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                }}
            >
                <div className="w-full h-screen flex flex-col justify-center items-start text-left text-white px-4 sm:pl-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-poppins">
                        Menghadirkan Eksplorasi Alam <br /> dan Budaya dalam Satu Platform
                    </h1>
                    
                    <div className="mt-10 flex items-center space-x-4">
                        <button className="bg-black text-white px-4 py-2 rounded-full font-semibold flex items-center hover:bg-gray-800">
                            Booking Now
                            <span className="ml-2 text-xl">→</span>
                        </button>
                        <a href="#" className="underline text-black hover:text-gray-600">Explore More</a>
                    </div>
                </div>
            </div>

            {/* Border Section */}
{/*             <div className="border-t-4 border-white my-4"></div>
 */}
            {/* Section pertama di bawah background */}
                <section>
                    <DestinasiWisata />
                </section>

                <section>
                    <PanduanBooking />
                </section>

                <section>
                    <Footer />
                </section>
        </div>
    );
}