"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye, FaPlusSquare } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { baseUrl } from '../utils/config';
import Link from 'next/link';

const Page = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(data.length / recordPerPage);
    const numbers = Array.from({ length: nPage }, (_, i) => i + 1);

    useEffect(() => {
        axios.get(`${baseUrl}/swa/`)
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

    return (
        <div className="p-6 bg-gray-100 min-h-screen relative">
            <div class="flex justify-between py-5 pr-5 items-center">

                <Link href="/swa" legacyBehavior>
                    <a className="flex items-center text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 dark:bg-red-700 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-red-900">
                        <FaPlusSquare className="mr-2" /> Tambahkan SWA
                    </a>
                </Link>

                <form class="max-w-md ms-2">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Rig/Unit" required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-red-800">Search</button>
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
                            <th className="py-3 px-6 text-left">Deskripsi</th>
                            <th className="py-3 px-6 text-left">Alasan SWA</th>
                            <th className="py-3 px-6 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {records.map((d, i) => (
                            <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-4 px-6">{firstIndex + i + 1}</td>
                                <td className="py-4 px-6">{new Date(d.date).toLocaleDateString()}</td>
                                <td className="py-4 px-6">{d.location}</td>
                                <td className="py-4 px-6">{d.desc}</td>
                                <td className="py-4 px-6">{d.reason}</td>
                                <td>
                                    <button
                                        className="px-4 py-2 text-sm font-medium text-white bg-red-900 rounded-lg hover:bg-red-1000 focus:outline-none focus:ring-2 focus:ring-red-800 mr-2"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <>
                    {/* Overlay Blur & Gelap */}
                    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>

                    {/* Modal */}
                    <div id="detailSwa" tabIndex="-1" aria-hidden="true" className="overflow-y-auto fixed inset-0 z-50 flex justify-center items-center">
                        <div className="relative p-4 w-full max-w-lg max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Detail SWA
                                    </h3>
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
                                <form className="p-6 bg-white shadow-md rounded-md w-full max-w-4xl my-5">
                                    <h3 className="text-2xl font-semibold mb-4 text-center">Under Maintenance</h3>
                                    {/* Form fields here */}
                                </form>
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
