"use client";

import React, { useState } from 'react';

const BBS = () => {
    const [currentSection, setCurrentSection] = useState(1);

    const handleNext = () => {
        setCurrentSection((prevSection) => prevSection + 1);
    };

    const handleBack = () => {
        setCurrentSection((prevSection) => prevSection - 1);
    };

    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-50">

            <form className="p-6 bg-white shadow-md rounded-md w-full max-w-4xl my-5">
            <h3 className="text-2xl font-semibold mb-4 text-center">BBS Observation Form</h3>

            {currentSection === 1 && (
<div>

                <h4 className="text-md font-semibold mb-2">Informasi Pengamat</h4>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Tanggal</label>
                    <input type="text" className="border p-2 rounded" />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Nama</label>
                    <input type="text" className="border p-2 rounded" />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Observasi Diri Sendiri</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="selfObservation" className="mr-1" />Ya
                        </div>
                        <div>
                            <input type="radio" name="selfObservation" className="mr-1" />Tidak
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Ada Pembimbing</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="mentor" className="mr-1" />Ya
                        </div>
                        <div>
                            <input type="radio" name="mentor" className="mr-1" />Tidak
                        </div>
                    </div>
                </div>

                <h4 className="text-md font-semibold mb-2">Informasi Observasi</h4>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Lokasi Observasi</label>
                    <input type="text" className="border p-2 rounded" />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Jumlah yang Diobservasi</label>
                    <input type="number" className="border p-2 rounded" />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Organisasi Yang Mengobservasi</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="observingOrganization" className="mr-1" />PHR
                        </div>
                        <div>
                            <input type="radio" name="observingOrganization" className="mr-1" />Kontraktor
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Organisasi yang Diobservasi</label>
                    <input type="text" className="border p-2 rounded" />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Perusahaan Kontraktor</label>
                    <input type="text" className="border p-2 rounded" />
                </div>
                <div className="flex justify-normal">
                            <button type="button" onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
                        </div>
                </div>

            )}
            {currentSection === 2 && (
            <div>
                <h4 className="text-md font-semibold mb-2">Posisi Badan</h4>
                <div className="flex flex-col my-3 ">
                    <label className="font-medium">Menghindari Lintasan Bahaya (Line of Fire)</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="lineOfFire" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="lineOfFire" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Berjalan / Bergerak dengan Pandangan ke Arah Gerakan</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="walkingDirection" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="walkingDirection" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Menjaga Pandangan Mata pada Pekerjaan</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="eyeOnTask" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="eyeOnTask" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Menjaga Badan dan Bagiannya di Luar Posisi Terjepit</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="bodyPosition" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="bodyPosition" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Menaiki / Menuruni</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="climbing" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="climbing" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <h4 className="text-md font-semibold my-5">Menggunakan Badan</h4>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Mengangkat / Menurunkan / Menekan / Menarik</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="lifting" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="lifting" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Menghindar dari Gerakan Memuntir</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="twisting" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="twisting" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Menggapai / Meraih dalam Jangkauan</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="reaching" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="reaching" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Menanggapi Resiko Ergonomi Industri</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="ergonomicRisk" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="ergonomicRisk" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <h4 className="text-md font-semibold my-5">Perkakas dan Peralatan</h4>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Memilih dan Menggunakan Perkakas / Peralatan</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="toolsUsage" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="toolsUsage" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Menggunakan Perkakas atau Peralatan dengan Benar</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="toolsCorrectUsage" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="toolsCorrectUsage" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <h4 className="text-md font-semibold my-5">Prosedur Kerja</h4>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Mengikuti Prosedur Kerja</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="followingProcedure" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="followingProcedure" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Mengisolasi Energi (Lock-Out / Tag-Out)</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="energyIsolation" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="energyIsolation" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Mengerjakan Hot-Work</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="hotWork" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="hotWork" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Memasuki Ruang Terbatas (confined space)</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="confinedSpace" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="confinedSpace" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Komunikasi antar Rekan Kerja</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="communication" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="communication" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                                <button type="button" onClick={handleBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Back</button>
                                <button type="submit" onClick= {handleNext} className="bg-blue-500 text-white p-2 rounded mt-4">Next</button>
                            </div>
                </div>
)}
            {currentSection === 3 && (

<div>
                <h4 className="text-md font-semibold my-5">Area Kerja</h4>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Bekerja pada Posisi Stabil</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="stablePosition" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="stablePosition" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Pengaturan Area Kerja / Housekeeping</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="housekeeping" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="housekeeping" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Bekerja di Lingkungan dengan Cahaya yang Cukup</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="sufficientLighting" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="sufficientLighting" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <h5 className="text-md font-semibold mb-2">Ergonomi Kantor</h5>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Melakukan Istirahat Berkala (Didukung Oleh Workpace)</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="regularBreaks" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="regularBreaks" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Posisi Leher dan Punggung</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="neckBackPosition" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="neckBackPosition" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Menggunakan Telepon</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="phoneUsage" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="phoneUsage" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Penyangga Punggung</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="backSupport" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="backSupport" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Posisi Pundak</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="shoulderPosition" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="shoulderPosition" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Posisi Lengan, Tangan, Pergelangan, dan Jari</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="armPosition" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="armPosition" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Posisi Kaki</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="legPosition" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="legPosition" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Pencahayaan</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="lighting" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="lighting" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Pengaturan Suhu</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="temperature" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="temperature" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>

                <div className="flex flex-col my-3">
                    <label className="font-medium">Gangguan Akustik</label>
                    <div className="flex space-x-4">
                        <div>
                            <input type="radio" name="acousticDistractions" className="mr-1" />Safe
                        </div>
                        <div>
                            <input type="radio" name="acousticDistractions" className="mr-1" />At Risk
                        </div>
                    </div>
                </div>
                            <div className="flex justify-start">
                                <button type="button" onClick={handleBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Back</button>
                                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
                            </div>
                </div>
            )}
                           </form>
                           </div>
        </>
    );
};

export default BBS;
