import Navbar from "../components/Navbar";
import GuaJepang from "../asset/GuaJepang.jpg"
import GurunTeh from "../asset/GurunTeh.jpg";
import PuncakSakub from "../asset/PuncakSakub.jpg";
import Kaligua from "../asset/Kaligua.jpg";
import PanduanBooking from "../asset/PanduanBooking.jpg"
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import React from "react";

export default function Beranda() {
    return (
        <div className="font-poppins w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
                <div className="flex flex-col justify-center">

                    <section>
                        <p style={{ fontSize: '40px' }} className="font-semibold">AGRO WISATA KALIGUA</p>
                        <div className="p-1 mt-2">
                            <h1 className="text-base md:text-lg text-justify">
                                Agro wisata Kaligua adalah destinasi wisata berbasis pertanian yang 
                                terletak di daerah perbukitan, menawarkan pengalaman rekreasi sekaligus 
                                edukasi seputar perkebunan teh dan agroekosistem. Pengunjung dapat menikmati 
                                keindahan alam, tur perkebunan, serta aktivitas menarik seperti memetik teh, 
                                menikmati udara segar, dan mengeksplorasi berbagai produk pertanian lokal. 
                                Agrowisata Kaligua didirikan pada masa kolonial Belanda pada awal abad ke-20 
                                sebagai perkebunan teh oleh Perusahaan Perkebunan Hindia Belanda. Setelah
                                kemerdekaan, perkebunan ini diambil alih oleh pemerintah Indonesia dan dikelola
                                oleh PTPN IX. Berada di dataran tinggi yang subur, Kaligua berkembang menjadi
                                destinasi wisata edukatif, mengajak pengunjung mengenal sejarah dan proses produksi teh.
                            </h1>
                        </div>
                    </section>

                    <section className="mt-16 text-center">
                        <h2 style={{ fontSize: '40px' }} className="font-semibold text-lg">DESTINASI</h2>
                    </section>

                    <section className="mt-16 overflow-x-auto">
                        <div className="flex space-x-20 overflow-x-auto whitespace-nowrap ">

                    {/* Section Wisata */}
                            <div className="border relative w-100 h-80 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={GuaJepang} alt="Gua Jepang" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2">
                                        <span className="text-white">Gua Jepang</span>
                                    </div>
                            </div>

                            <div className="border relative w-100 h-80 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={GurunTeh} alt="Gurun Teh" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-2">
                                        <span className="text-white">Gurun Teh</span>
                                </div>
                            </div>

                            <div className="border relative w-100 h-80 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={PuncakSakub} alt="Puncak Sakub" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-2">
                                        <span className="text-white">Puncak Sakub</span>
                                </div>
                            </div>
                            
                            <div className="border relative w-100 h-80 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={Kaligua} alt="Kaligua" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-2">
                                        <span className="text-white">Kaligua</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section Panduan Booking*/}
                    <section>
                        <div className="p-1 mt-10 flex items-start">
                            <img style={{ width: '25%', height: 'auto' }} 
                                src={PanduanBooking} alt="Panduan Booking" className="mr-4"/>
        
                        <div className="flex flex-col">
                            <p className="text-[30px] font-semibold">Panduan Booking</p>
                            <h1 className="text-base md:text-lg">
                            Lihat tata cara untuk booking selanjutnya 
                            </h1>
                            <Link to="/panduan-booking" style={{ width: 'fit-content' }} className="mt-1 px-4 py-2 bg-blue-500 text-white rounded-md w-22 justify-center">
                                LIHAT PANDUAN
                            </Link>
                            </div>
                        </div>
                    </section>

                    <section>
                        <p style={{ fontSize: '40px' }} className="font-semibold">About Website</p>
                        <div className="p-1 mt-2">
                            <h1 className="text-base md:text-lg text-justify">
                                Agro wisata Kaligua adalah destinasi wisata berbasis pertanian yang 
                                terletak di daerah perbukitan, menawarkan pengalaman rekreasi sekaligus 
                                edukasi seputar perkebunan teh dan agroekosistem. Pengunjung dapat menikmati 
                                keindahan alam, tur perkebunan, serta aktivitas menarik seperti memetik teh, 
                                menikmati udara segar, dan mengeksplorasi berbagai produk pertanian lokal. 
                                Agrowisata Kaligua didirikan pada masa kolonial Belanda pada awal abad ke-20 
                                sebagai perkebunan teh oleh Perusahaan Perkebunan Hindia Belanda. Setelah
                                kemerdekaan, perkebunan ini diambil alih oleh pemerintah Indonesia dan dikelola
                                oleh PTPN IX. Berada di dataran tinggi yang subur, Kaligua berkembang menjadi
                                destinasi wisata edukatif, mengajak pengunjung mengenal sejarah dan proses produksi teh.
                            </h1>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}