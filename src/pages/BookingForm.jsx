import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    groupSize: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan pengiriman data ke server atau proses lainnya
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Pemesanan Tiket</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Nomor Telepon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Masukkan nomor telepon"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Alamat</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Masukkan alamat Anda"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Jumlah Rombongan</label>
          <input
            type="number"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Masukkan jumlah rombongan"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Pesan Tiket
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
