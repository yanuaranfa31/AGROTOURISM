import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Navbar from "../components/Navbar";

function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [showModal, setShowModal] = useState(false); // State untuk mengontrol visibilitas modal
    const navigate = useNavigate(); // Inisialisasi useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Proses registrasi di sini (misalnya mengirim data ke server)
        console.log('Form Data:', formData);
        setShowModal(true); // Tampilkan modal setelah registrasi berhasil
    };

    const closeModal = () => {
        setShowModal(false); // Tutup modal
        navigate('/'); // Navigasikan ke halaman beranda setelah menutup modal
    };

    return (
        <div className="relative">
            {/* Navbar */}
            <Navbar />

            {/* Background beranda */}
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                 style={{
                     backgroundImage: 'url(/images/background.jpg)', // Path ke gambar Anda
                     opacity: 0.5,  // Transparansi hanya pada background
                 }}></div>

            {/* Overlay transparan di atas background */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

            {/* Form Register */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <form 
                    onSubmit={handleSubmit} 
                    className="bg-white p-8 rounded shadow-md w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                    <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Nama Lengkap" 
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email" 
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                    />

                    {/* Input Password dengan Hide/Unhide */}
                    <div className="relative mb-6">
                        <input 
                            type={isPasswordVisible ? "text" : "password"} // Kondisi untuk mengganti tipe input
                            name="password" 
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password" 
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        />
                        {/* Icon untuk toggle password visibility */}
                        <button 
                            type="button" 
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle password visibility
                            className="absolute top-2 right-3 text-gray-500"
                        >
                            {isPasswordVisible ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
            </div>

            {/* Modal Pop-Up Registrasi Sukses */}
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-30">
                    <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
                        <h3 className="text-xl font-bold mb-4">Registrasi Berhasil!</h3>
                        <p>Selamat! Anda berhasil mendaftar.</p>
                        <button 
                            onClick={closeModal} // Navigasikan ke halaman beranda setelah menutup modal
                            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Register;
