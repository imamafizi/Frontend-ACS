"use client";

import { baseUrl } from "@/app/utils/config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const BBS = () => {
    const navigate = useRouter();
    // Inisialisasi state untuk setiap properti di dalam object data
    const [data, setData] = useState({
        date: "",
        location: "",
        rig: "",
        where: "",
        q11: "",
        q12: "",
        q13: "",
        q14: "",
        q15: "",
        q21: "",
        q22: "",
        q23: "",
        q24: "",
        q31: "",
        q32: "",
        q41: "",
        q42: "",
        q43: "",
        q44: "",
        q45: "",
        q47: "",
        q51: "",
        q52: "",
        q53: "",
        q61: "",
        q62: "",
        q63: "",
        q64: "",
        q65: "",
        q66: "",
        q67: "",
        q68: "",
        q71: "",
        q72: "",
        q73: "",
        q81: "",
        q82: "",
        q83: "",
        q84: "",
        q85: "",
        q86: "",
        q87: "",
        q88: "",
        q91: "",
        q92: "",
        q93: "",
        q94: "",
        q95: "",
        q96: "",
        q97: "",
        q98: "",
        when: "",
        find: "",
        reason: "",
        suggest: "",
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        userId: "",
    });

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = async (e) => {
        const loginData = JSON.parse(localStorage.getItem("login"));
        e.preventDefault();

        // Transformasi data sebelum dikirim
        const transformedData = {
            ...data,
            date: new Date(data.date), // Konversi tanggal ke format Date
            q11: data.q11 === "Safe" ? true : data.q11 === "At Risk" ? false : data.q11,
            q12: data.q12 === "Safe" ? true : data.q12 === "At Risk" ? false : data.q12,
            q13: data.q13 === "Safe" ? true : data.q13 === "At Risk" ? false : data.q13,
            q14: data.q14 === "Safe" ? true : data.q14 === "At Risk" ? false : data.q14,
            q15: data.q15 === "Safe" ? true : data.q15 === "At Risk" ? false : data.q15,
            q21: data.q21 === "Safe" ? true : data.q21 === "At Risk" ? false : data.q21,
            q22: data.q22 === "Safe" ? true : data.q22 === "At Risk" ? false : data.q22,
            q23: data.q23 === "Safe" ? true : data.q23 === "At Risk" ? false : data.q23,
            q24: data.q24 === "Safe" ? true : data.q24 === "At Risk" ? false : data.q24,
            q31: data.q31 === "Safe" ? true : data.q31 === "At Risk" ? false : data.q31,
            q32: data.q32 === "Safe" ? true : data.q32 === "At Risk" ? false : data.q32,
            q41: data.q41 === "Safe" ? true : data.q41 === "At Risk" ? false : data.q41,
            q42: data.q42 === "Safe" ? true : data.q42 === "At Risk" ? false : data.q42,
            q43: data.q43 === "Safe" ? true : data.q43 === "At Risk" ? false : data.q43,
            q44: data.q44 === "Safe" ? true : data.q44 === "At Risk" ? false : data.q44,
            q45: data.q45 === "Safe" ? true : data.q45 === "At Risk" ? false : data.q45,
            q47: data.q47 === "Safe" ? true : data.q47 === "At Risk" ? false : data.q47,
            q51: data.q51 === "Safe" ? true : data.q51 === "At Risk" ? false : data.q51,
            q52: data.q52 === "Safe" ? true : data.q52 === "At Risk" ? false : data.q52,
            q53: data.q53 === "Safe" ? true : data.q53 === "At Risk" ? false : data.q53,
            q61: data.q61 === "Safe" ? true : data.q61 === "At Risk" ? false : data.q61,
            q62: data.q62 === "Safe" ? true : data.q62 === "At Risk" ? false : data.q62,
            q63: data.q63 === "Safe" ? true : data.q63 === "At Risk" ? false : data.q63,
            q64: data.q64 === "Safe" ? true : data.q64 === "At Risk" ? false : data.q64,
            q65: data.q65 === "Safe" ? true : data.q65 === "At Risk" ? false : data.q65,
            q66: data.q66 === "Safe" ? true : data.q66 === "At Risk" ? false : data.q66,
            q67: data.q67 === "Safe" ? true : data.q67 === "At Risk" ? false : data.q67,
            q68: data.q68 === "Safe" ? true : data.q68 === "At Risk" ? false : data.q68,
            q71: data.q71 === "Safe" ? true : data.q71 === "At Risk" ? false : data.q71,
            q72: data.q72 === "Safe" ? true : data.q72 === "At Risk" ? false : data.q72,
            q73: data.q73 === "Safe" ? true : data.q73 === "At Risk" ? false : data.q73,
            q81: data.q81 === "Safe" ? true : data.q81 === "At Risk" ? false : data.q81,
            q82: data.q82 === "Safe" ? true : data.q82 === "At Risk" ? false : data.q82,
            q83: data.q83 === "Safe" ? true : data.q83 === "At Risk" ? false : data.q83,
            q84: data.q84 === "Safe" ? true : data.q84 === "At Risk" ? false : data.q84,
            q85: data.q85 === "Safe" ? true : data.q85 === "At Risk" ? false : data.q85,
            q86: data.q86 === "Safe" ? true : data.q86 === "At Risk" ? false : data.q86,
            q87: data.q87 === "Safe" ? true : data.q87 === "At Risk" ? false : data.q87,
            q88: data.q88 === "Safe" ? true : data.q88 === "At Risk" ? false : data.q88,
            q91: data.q91 === "Safe" ? true : data.q91 === "At Risk" ? false : data.q91,
            q92: data.q92 === "Safe" ? true : data.q92 === "At Risk" ? false : data.q92,
            q93: data.q93 === "Safe" ? true : data.q93 === "At Risk" ? false : data.q93,
            q94: data.q94 === "Safe" ? true : data.q94 === "At Risk" ? false : data.q94,
            q95: data.q95 === "Safe" ? true : data.q95 === "At Risk" ? false : data.q95,
            q96: data.q96 === "Safe" ? true : data.q96 === "At Risk" ? false : data.q96,
            q97: data.q97 === "Safe" ? true : data.q97 === "At Risk" ? false : data.q97,
            q98: data.q98 === "Safe" ? true : data.q98 === "At Risk" ? false : data.q98,
        };

        try {
            const response = await axios.post(`${baseUrl}/bbs/${loginData.id}`, transformedData);
            console.log("Respons API:", response.data);
            // Tambahkan logika setelah sukses kirim data
            toast.success("Data submitted successfully!");
            setTimeout(() => {
                navigate.push("/showbbs");
            }, 1000);
        } catch (error) {
            console.error("Terjadi kesalahan saat mengirim data:", error);
            toast.error("Failed to submit data. Please try again.")
            // Tambahkan logika untuk menangani error
        }
    };

    const formFields = [
        {
            title: "Informasi Pengamat",
            fields: [
                { label: "Tanggal", type: "date", name: "date" },
                { label: "Lokasi Observasi", type: "text", name: "location" },
                { label: "RIG / Unit", type: "text", name: "rig" },
                { label: "Area Observasi", type: "text", name: "where" },
            ],
        },
        {
            title: "Posisi Badan",
            fields: [
                { label: "1.1 Menghindari Lintasan Bahaya (Line of Fire)", type: "radio", name: "q11", options: ["Safe", "At Risk"] },
                {
                    label: "1.2 Berjalan / Bergerak dengan Pandangan ke Arah Gerakan",
                    type: "radio",
                    name: "q12",
                    options: ["Safe", "At Risk"],
                },
                { label: "1.3 Menjaga Pandangan Mata pada Pekerjaan", type: "radio", name: "q13", options: ["Safe", "At Risk"] },
                { label: "1.4 Menjaga Badan dan Bagiannya di Luar Posisi Terjepit", type: "radio", name: "q14", options: ["Safe", "At Risk"] },
                { label: "1.5 Menaiki / Menuruni", type: "radio", name: "q15", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Menggunakan Badan",
            fields: [
                { label: "2.1 Mengangkat / Menurunkan / Menekan / Menarik", type: "radio", name: "q21", options: ["Safe", "At Risk"] },
                { label: "2.2 Menghindar dari Gerakan Memuntir", type: "radio", name: "q22", options: ["Safe", "At Risk"] },
                { label: "2.3 Menggapai / Meraih dalam Jangkauan", type: "radio", name: "q23", options: ["Safe", "At Risk"] },
                { label: "2.4 Menanggapi Risiko Ergonomi Industri", type: "radio", name: "q24", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Perkakas dan Peralatan",
            fields: [
                { label: "3.1 Memilih dan Menggunakan Perkakas / Peralatan", type: "radio", name: "q31", options: ["Safe", "At Risk"] },
                { label: "3.2 Menggunakan Pelindung / Barikade / Alat Peringatan", type: "radio", name: "q32", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Prosedur",
            fields: [
                { label: "4.1 Persiapan Kerja dan JSA (Job Safety Analysis)", type: "radio", name: "q41", options: ["Safe", "At Risk"] },
                { label: "4.2 Mengikuti Prosedur Kerja", type: "radio", name: "q42", options: ["Safe", "At Risk"] },
                { label: "4.3 Mengisolasi Energi (Lock-Out / Tag-Out)", type: "radio", name: "q43", options: ["Safe", "At Risk"] },
                { label: "4.4 Mengerjakan Hot-Work", type: "radio", name: "q44", options: ["Safe", "At Risk"] },
                { label: "4.5 Memasuki Ruang Terbatas (Confined Space)", type: "radio", name: "q45", options: ["Safe", "At Risk"] },
                { label: "4.7 Komunikasi antar Rekan Kerja", type: "radio", name: "q47", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Area Kerja",
            fields: [
                { label: "5.1 Bekerja pada Posisi Stabil", type: "radio", name: "q51", options: ["Safe", "At Risk"] },
                { label: "5.2 Pengaturan Area Kerja / Housekeeping", type: "radio", name: "q52", options: ["Safe", "At Risk"] },
                { label: "5.3 Bekerja di Lingkungan dengan Cahaya yang Cukup", type: "radio", name: "q53", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Ergonomi Kantor",
            fields: [
                {
                    label: "6.1 Melakukan Istirahat Berkala (Didukung Oleh Workplace)",
                    type: "radio",
                    name: "q61",
                    options: ["Safe", "At Risk"],
                },
                { label: "6.2 Posisi Leher dan Punggung", type: "radio", name: "q62", options: ["Safe", "At Risk"] },
                { label: "6.3 Menggunakan Telepon", type: "radio", name: "q63", options: ["Safe", "At Risk"] },
                { label: "6.4 Penyangga Punggung", type: "radio", name: "q64", options: ["Safe", "At Risk"] },
                { label: "6.5 Posisi Pundak", type: "radio", name: "q65", options: ["Safe", "At Risk"] },
                { label: "6.6 Posisi Pergelangan Tangan dan Tangan", type: "radio", name: "q66", options: ["Safe", "At Risk"] },
                { label: "6.7 Memegang / Menggerakkan Mouse", type: "radio", name: "q67", options: ["Safe", "At Risk"] },
                { label: "6.8 Mengenali dan Melaporkan Ketidaknyamanan", type: "radio", name: "q68", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Pemeliharaan Lingkungan",
            fields: [
                { label: "7.1 Mencegah Tumpahan", type: "radio", name: "q71", options: ["Safe", "At Risk"] },
                { label: "7.2 Persiapan Membersihkan Tumpahan", type: "radio", name: "q72", options: ["Safe", "At Risk"] },
                { label: "7.3 Menangani Limbah", type: "radio", name: "q73", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Alat Pelindung Diri (APD)",
            fields: [
                { label: "8.1 Pelindung Kepala", type: "radio", name: "q81", options: ["Safe", "At Risk"] },
                { label: "8.2 Pelindung Mata dan Wajah", type: "radio", name: "q82", options: ["Safe", "At Risk"] },
                { label: "8.3 Pelindung Pendengaran", type: "radio", name: "q83", options: ["Safe", "At Risk"] },
                { label: "8.4 Pelindung Pernafasan", type: "radio", name: "q84", options: ["Safe", "At Risk"] },
                { label: "8.5 Pelindung Tangan dan Lengan", type: "radio", name: "q85", options: ["Safe", "At Risk"] },
                { label: "8.6 Pelindung Jatuh", type: "radio", name: "q86", options: ["Safe", "At Risk"] },
                { label: "8.7 Pakaian Pelindung yang Sesuai", type: "radio", name: "q87", options: ["Safe", "At Risk"] },
                { label: "8.8 Pelindung Kaki", type: "radio", name: "q88", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Mengemudi",
            fields: [
                { label: "9.1 Perencanaan Perjalanan", type: "radio", name: "q91", options: ["Safe", "At Risk"] },
                { label: "9.2 Pre-Trip Inspection dan Sabuk Keselamatan", type: "radio", name: "q92", options: ["Safe", "At Risk"] },
                { label: "9.3 Menyesuaikan Kecepatan", type: "radio", name: "q93", options: ["Safe", "At Risk"] },
                { label: "9.4 Menjaga Jarak Iring", type: "radio", name: "q94", options: ["Safe", "At Risk"] },
                { label: "9.5 Menginjak Rem", type: "radio", name: "q95", options: ["Safe", "At Risk"] },
                { label: "9.6 Berpindah Jalur", type: "radio", name: "q96", options: ["Safe", "At Risk"] },
                { label: "9.7 Pandangan Luas, Jauh, dan Aktifkan Mata", type: "radio", name: "q97", options: ["Safe", "At Risk"] },
                { label: "9.8 Memundurkan", type: "radio", name: "q98", options: ["Safe", "At Risk"] },
            ],
        },
        {
            title: "Informasi Tambahan",
            fields: [
                { label: "Ketika (Jelaskan aktivitas yang dilakukan)", type: "text", name: "when" },
                { label: "Ditemukan (Jelaskan perilaku berisiko)", type: "text", name: "find" },
                { label: "Sebab (Alasan mengapa perilaku berisiko dilakukan)", type: "text", name: "reason" },
                { label: "Saran (Solusi agar perilaku berisiko tidak berulang)", type: "text", name: "suggest" },
            ],
        },
        {
            title: "Persetujuan",
            fields: [
                { label: "Setuju perilaku terjadi?", type: "radio", name: "p1", options: ["Ya", "Tidak"] },
                { label: "Setuju perilaku berisiko?", type: "radio", name: "p2", options: ["Ya", "Tidak"] },
                { label: "Perilaku selamat:", type: "radio", name: "p3", options: ["Mudah", "Sukar", "Tidak mungkin"] },
                { label: "Tindak lanjut Steering Committee", type: "radio", name: "p4", options: ["Ya", "Tidak"] },
            ],
        },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md w-full max-w-4xl my-5">
                <h3 className="text-2xl font-semibold mb-4 text-center">BBS Observation Form</h3>

                {formFields.map((section, index) => (
                    <div key={index}>
                        <h4 className="text-md font-semibold mb-2 mt-4">{section.title}</h4>
                        {section.fields.map((field, idx) => (
                            <div className="flex flex-col my-3 space-y-2" key={idx}>
                                <label className="font-medium">{field.label}</label>
                                {field.type === "text" || field.type === "date" ? (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={data[field.name]}
                                        onChange={handleChange}
                                        className="border p-2 rounded"
                                    />
                                ) : (
                                    <div className="flex space-x-4">
                                        {field.options.map((option, i) => (
                                            <label key={i}>
                                                <input
                                                    type="radio"
                                                    name={field.name}
                                                    value={option}
                                                    checked={data[field.name] === option}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

                <div className="flex justify-center my-4">
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BBS;