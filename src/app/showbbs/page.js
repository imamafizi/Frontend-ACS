"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye, FaPlusSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { baseUrl } from '../utils/config';
import Link from 'next/link';

const Page = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [formData, setFormData] = useState({});
    const [searchTerm, setSearchTerm] = useState(""); // State for the search term
    const recordPerPage = 10;

    useEffect(() => {
        axios.get(`${baseUrl}/bbs/`)
            .then(response => {
                console.log('API Response:', response.data); // Check structure
                if (Array.isArray(response.data.data)) {
                    setData(response.data.data);
                } else {
                    console.error('Expected an array in response.data.data, but got:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const filteredData = data.filter(record =>
        record.rig.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = filteredData.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(filteredData.length / recordPerPage);
    const numbers = Array.from({ length: nPage }, (_, i) => i + 1);

    const prePage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCPage = (n) => {
        setCurrentPage(n);
    };

    const nextPage = () => {
        if (currentPage < nPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const openModal = (record) => {
        setSelectedRecord(record);
        setFormData({
            date: record.date,
            location: record.location,
            rig: record.rig,
            description: record.find,
            reason: record.reason,
            atRisk: record.atRisk || "",
            safe: record.safe || ""
        });
        setIsModalOpen(true);
    };

    console.log(selectedRecord, "konntol");


    const fieldMappings = {
        q11: "1.1 Menghindari Lintasan Bahaya (Line of Fire)",
        q12: "1.2 Berjalan / Bergerak dengan Pandangan ke Arah Gerakan",
        q13: "1.3 Menjaga Pandangan Mata pada Pekerjaan",
        q14: "1.4 Menjaga Badan dan Bagiannya di Luar Posisi Terjepit",
        q15: "1.5 Menaiki / Menuruni",
        q21: "2.1 Mengangkat / Menurunkan / Menekan / Menarik",
        q22: "2.2 Menghindar dari Gerakan Memuntir",
        q23: "2.3 Menggapai / Meraih dalam Jangkauan",
        q24: "2.4 Menanggapi Risiko Ergonomi Industri",
        q31: "3.1 Memilih dan Menggunakan Perkakas / Peralatan",
        q32: "3.2 Menggunakan Pelindung / Barikade / Alat Peringatan",
        q41: "4.1 Persiapan Kerja dan JSA (Job Safety Analysis)",
        q42: "4.2 Mengikuti Prosedur Kerja",
        q43: "4.3 Mengisolasi Energi (Lock-Out / Tag-Out)",
        q44: "4.4 Mengerjakan Hot-Work",
        q45: "4.5 Memasuki Ruang Terbatas (Confined Space)",
        q47: "4.7 Komunikasi antar Rekan Kerja",
        q51: "5.1 Bekerja pada Posisi Stabil",
        q52: "5.2 Pengaturan Area Kerja / Housekeeping",
        q53: "5.3 Bekerja di Lingkungan dengan Cahaya yang Cukup",
        q61: "6.1 Melakukan Istirahat Berkala (Didukung Oleh Workplace)",
        q62: "6.2 Posisi Leher dan Punggung",
        q63: "6.3 Menggunakan Telepon",
        q64: "6.4 Penyangga Punggung",
        q65: "6.5 Posisi Pundak",
        q66: "6.6 Posisi Pergelangan Tangan dan Tangan",
        q67: "6.7 Memegang / Menggerakkan Mouse",
        q68: "6.8 Mengenali dan Melaporkan Ketidaknyamanan",
        q71: "7.1 Mencegah Tumpahan",
        q72: "7.2 Persiapan Membersihkan Tumpahan",
        q73: "7.3 Menangani Limbah",
        q81: "8.1 Pelindung Kepala",
        q82: "8.2 Pelindung Mata dan Wajah",
        q83: "8.3 Pelindung Pendengaran",
        q84: "8.4 Pelindung Pernafasan",
        q85: "8.5 Pelindung Tangan dan Lengan",
        q86: "8.6 Pelindung Jatuh",
        q87: "8.7 Pakaian Pelindung yang Sesuai",
        q88: "8.8 Pelindung Kaki",
        q91: "9.1 Perencanaan Perjalanan",
        q92: "9.2 Pre-Trip Inspection dan Sabuk Keselamatan",
        q93: "9.3 Menyesuaikan Kecepatan",
        q94: "9.4 Menjaga Jarak Iring",
        q95: "9.5 Menginjak Rem",
        q96: "9.6 Berpindah Jalur",
        q97: "9.7 Pandangan Luas, Jauh, dan Aktifkan Mata",
        q98: "9.7 Memundurkan",

    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen relative">
            <div className="flex justify-between py-5 pr-5 items-center">
                <Link href="/bbs" legacyBehavior>
                    <a className="flex items-center text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 dark:bg-red-700 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-red-900">
                        <FaPlusSquare className="mr-2" /> Tambahkan BBS
                    </a>
                </Link>

                <form className="max-w-md ms-2" onSubmit={e => e.preventDefault()}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Rig/Unit"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            required
                        />
                    </div>
                </form>
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-red-900 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Nomor</th>
                            <th className="py-3 px-6 text-left">Tanggal</th>
                            <th className="py-3 px-6 text-left">Lokasi</th>
                            <th className="py-3 px-6 text-left">Rig</th>
                            <th className="py-3 px-6 text-left">Deskripsi</th>
                            <th className="py-3 px-6 text-left">Alasan</th>
                            <th className="py-3 px-6 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {records.map((d, i) => (
                            <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-4 px-6">{firstIndex + i + 1}</td>
                                <td className="py-4 px-6">{new Date(d.date).toLocaleDateString()}</td>
                                <td className="py-4 px-6">{d.location}</td>
                                <td className="py-4 px-6">{d.rig}</td>
                                <td className="py-4 px-6">{d.find}</td>
                                <td className="py-4 px-6">{d.reason}</td>
                                <td>
                                    <button
                                        className="px-4 py-2 text-sm font-medium text-white bg-red-900 rounded-lg hover:bg-red-1000 focus:outline-none focus:ring-2 focus:ring-red-800 mr-2"
                                        onClick={() => openModal(d)}
                                    >
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedRecord && (
                <>
                    {/* Overlay Blur & Gelap */}
                    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>

                    {/* Modal */}
                    <div id="detailBbs" tabIndex="-1" aria-hidden="true" className="overflow-y-auto fixed inset-0 z-50 flex justify-center items-center">
                        <div className="relative p-4 w-full max-w-screen-lg max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Detail BBS
                                    </h3>
                                    <div>
                                        <button
                                            className="text-gray-900 mr-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <FaDownload />
                                        </button>
                                        <button
                                            type="button"
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">

                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th colSpan={4} class="px-6 py-3">
                                                    <h4 className="text-sm font-medium mb-2">Informsi Pengamat</h4>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Tanggal
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    <p>{new Date(selectedRecord.date).toLocaleDateString()}</p>

                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Lokasi Observasi
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    <p>{selectedRecord.location}</p>

                                                </td>
                                            </tr>
                                            <tr colSpan={2} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Rig/Unit
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    <p>{selectedRecord.rig}</p>

                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Area Observasi
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    <p>{selectedRecord.where}</p>
                                                </td>
                                            </tr>
                                            <tr class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <th colSpan={4} class="px-6 py-3">
                                                    <h4 className="text-sm font-medium mb-2">Deskripsi Perilaku </h4>
                                                </th>
                                            </tr>
                                            {Object.entries(selectedRecord)
                                                .filter(([key, value]) => key.startsWith('q') && value === true) // Filter keys starting with 'q' and with a value of true
                                                .map(([key, value], index) => (
                                                    <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th colSpan={2} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <p className="text-sm font-semibold mb-2">{fieldMappings[key]}</p>
                                                        </th>
                                                        <td colSpan={2} cope="row" class="px-6 py-4">
                                                            <p>At Risk</p>
                                                        </td>
                                                    </tr>
                                                ))}
                                            <tr class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <th colSpan={4} class="px-6 py-3">
                                                    <h4 className="text-sm font-medium mb-2">Informasi Tambahan </h4>
                                                </th>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    When
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    <p>{selectedRecord.when}</p>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} class="px-6 py-4">
                                                    Find
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    <p>{selectedRecord.find}</p>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                                <th colSpan={2} class="px-6 py-4">
                                                    Reason
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    <p>{selectedRecord.reason}</p>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                                <th colSpan={2} class="px-6 py-4">
                                                    Suggest
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    <p>{selectedRecord.suggest}</p>
                                                </td>
                                            </tr>


                                            <tr class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <th colSpan={4} class="px-6 py-3">
                                                    <h4 className="text-lg font-bold mb-2">Feedback / Umpan Balik </h4>
                                                </th>

                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} class="px-6 py-4">
                                                    Setuju perilaku terjadi?
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    {selectedRecord.p1 ? 'Yes' : 'No'}
                                                </td>

                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} class="px-6 py-4">
                                                    Setuju perilaku berisiko?
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    {selectedRecord.p2 ? 'Yes' : 'No'}
                                                </td>

                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} class="px-6 py-4">
                                                    Perilaku selamat?
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    {selectedRecord.p3 ? 'Mudah' : 'Tidak Mungkin'}
                                                </td>

                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th colSpan={2} class="px-6 py-4">
                                                    Tindak lanjut Steering Committee?
                                                </th>
                                                <td colSpan={2} class="px-6 py-4">
                                                    {selectedRecord.p4 ? 'Yes' : 'No'}
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <nav className="flex justify-center mt-6">
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <button
                            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={prePage}
                        >
                            Prev
                        </button>
                    </li>
                    {numbers.map((n, i) => (
                        <li key={i}>
                            <button
                                className={`px-3 py-2 leading-tight ${currentPage === n
                                    ? 'text-white bg-blue-500 border border-blue-500'
                                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                                    }`}
                                onClick={() => changeCPage(n)}
                            >
                                {n}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                            onClick={nextPage}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Page;
