"use client";

import React from 'react';

const BBS = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <form className="p-6 bg-white shadow-md rounded-md w-full max-w-4xl my-5">
                    <h3 className="text-2xl font-semibold mb-4 text-center">BBS Observation Form</h3>
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
                            <label className="font-medium">Area Observasi</label>
                            <input type="text" className="border p-2 rounded" />
                        </div>

                    </div>

                    {/* Posisi Badan */}
                    <h4 className="text-md font-semibold mb-2 mt-2">Posisi Badan</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">1.1 Menghindari Lintasan Bahaya (Line of Fire)</label>
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
                        <label className="font-medium">1.2 Berjalan / Bergerak dengan Pandangan ke Arah Gerakan</label>
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
                        <label className="font-medium">1.3 Menjaga Pandangan Mata pada Pekerjaan</label>
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
                        <label className="font-medium">1.4 Menjaga Badan dan Bagiannya di Luar Posisi Terjepit</label>
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
                        <label className="font-medium">1.5 Menaiki / Menuruni</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>

                    {/* Menggunakan Badan */}
                    <h4 className="text-md font-semibold mb-2">Menggunakan Badan</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">2.1 Mengangkat / Menurunkan / Menekan / Menarik</label>
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
                        <label className="font-medium">2.2 Menghindar dari Gerakan Memuntir</label>
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
                        <label className="font-medium">2.3 Menggapai / Meraih dalam Jangkauan</label>
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
                        <label className="font-medium">2.4 Menanggapi Risiko Ergonomi Industri</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="ergonomicRisk" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="ergonomicRisk" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>

                    {/* Perkakas dan Peralatan */}
                    <h4 className="text-md font-semibold mb-2">Perkakas dan Peralatan</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">3.1 Memilih dan Menggunakan Perkakas / Peralatan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="toolSelection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="toolSelection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">3.2 Menggunakan Pelindung / Barikade / Alat Peringatan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="toolProtection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="toolProtection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>

                    {/* Prosedur */}
                    <h4 className="text-md font-semibold mb-2">Prosedur</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">4.1 Persiapan Kerja dan JSA (Job Safety Analysis)</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="jobPreparation" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="jobPreparation" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">4.2 Mengikuti Prosedur Kerja</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="workProcedure" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="workProcedure" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">4.3 Mengisolasi Energi (Lock-Out / Tag-Out)</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="lockOut" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="lockOut" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">4.4 Mengerjakan Hot-Work</label>
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
                        <label className="font-medium">4.5 Memasuki Ruang Terbatas (confined space)</label>
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
                        <label className="font-medium">4.7 Komunikasi antar Rekan Kerja</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="teamCommunication" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="teamCommunication" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>

                    {/* Area Kerja */}
                    <h4 className="text-md font-semibold mb-2">Area Kerja</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">5.1 Bekerja pada Posisi Stabil</label>
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
                        <label className="font-medium">5.2 Pengaturan Area Kerja / Housekeeping</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="workAreaOrganization" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="workAreaOrganization" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">5.3 Bekerja di Lingkungan dengan Cahaya yang Cukup</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="adequateLighting" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="adequateLighting" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>

                    {/* Ergonomi Kantor */}
                    <h4 className="text-md font-semibold mb-2">Ergonomi Kantor</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">6.1 Melakukan Istirahat Berkala (Didukung Oleh Workplace)</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="ergonomicBreaks" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="ergonomicBreaks" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">6.2 Posisi Leher dan Punggung</label>
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
                        <label className="font-medium">6.3 Menggunakan Telepon</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="telephoneUse" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="telephoneUse" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">6.4 Penyangga Punggung</label>
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
                        <label className="font-medium">6.5 Posisi Pundak</label>
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
                        <label className="font-medium">6.6 Posisi Pergelangan Tangan dan Tangan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="wristHandPosition" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="wristHandPosition" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">6.7 Memegang / Menggerakkan Mouse</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="mouseUsage" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="mouseUsage" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">6.8 Mengenali dan Melaporkan Ketidaknyamanan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="reportDiscomfort" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="reportDiscomfort" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>

                    {/* Pemeliharaan Lingkungan */}
                    <h4 className="text-md font-semibold mb-2">Pemeliharaan Lingkungan</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">7.1 Mencegah Tumpahan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="spillPrevention" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="spillPrevention" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">7.2 Persiapan Membersihkan Tumpahan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="spillCleanUp" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="spillCleanUp" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">7.3 Menangani Limbah</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="wasteHandling" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="wasteHandling" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>

                    {/* Alat Pelindung Diri (APD) */}
                    <h4 className="text-md font-semibold mb-2">Alat Pelindung Diri (APD)</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">8.1 Pelindung Kepala</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="headProtection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="headProtection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">8.2 Pelindung Mata dan Wajah</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="eyeFaceProtection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="eyeFaceProtection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">8.3 Pelindung Pendengaran</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="hearingProtection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="hearingProtection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">8.4 Pelindung Pernafasan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="respiratoryProtection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="respiratoryProtection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">8.5 Pelindung Tangan dan Lengan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="handArmProtection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="handArmProtection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">8.6 Pelindung Jatuh</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="fallProtection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="fallProtection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">8.7 Pakaian Pelindung yang Sesuai</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="appropriateProtectiveClothing" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="appropriateProtectiveClothing" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">8.8 Pelindung Kaki</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="footProtection" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="footProtection" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    {/* Mengemudi */}
                    <h4 className="text-md font-semibold mb-2">Mengemudi</h4>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">9.1 Perencanaan Perjalanan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="tripPlanning" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="tripPlanning" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">9.2 Pre-Trip Inspection dan Sabuk Keselamatan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="preTripInspectionSeatbelt" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="preTripInspectionSeatbelt" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">9.3 Menyesuaikan Kecepatan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="speedAdjustment" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="speedAdjustment" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">9.4 Menjaga Jarak Iring</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="followingDistance" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="followingDistance" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">9.5 Menginjak Rem</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="braking" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="braking" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">9.6 Berpindah Jalur</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="laneChange" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="laneChange" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">9.7 Pandangan Luas, Jauh, dan Aktifkan Mata</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="wideFarViewActiveEyes" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="wideFarViewActiveEyes" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">9.8 Memundurkan</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="reversing" className="mr-1" />Safe
                            </div>
                            <div>
                                <input type="radio" name="reversing" className="mr-1" />At Risk
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="font-medium">Ketika (Jelaskan aktifitas yang di lakukan)</label>
                        <input type="text" className="border p-2 rounded" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="font-medium">Ditemukan (Jelaskan perilaku beresiko)</label>
                        <input type="text" className="border p-2 rounded" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="font-medium">Sebab (Alasan mengapa perilaku beresiko dilakukan)</label>
                        <input type="text" className="border p-2 rounded" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="font-medium">Saran (Solusi agar perilaku beresiko tidak berulang)</label>
                        <input type="text" className="border p-2 rounded" />
                    </div>

                    <div className="flex flex-col my-3">
                        <label className="font-medium">Setuju perilaku terjadi ?</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Ya
                            </div>
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Tidak
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">Setuju perilaku beresiko ?</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Ya
                            </div>
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Tidak
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">Perilaku selamat :</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Mudah
                            </div>
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Sukar
                            </div>
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Tidak mungkin
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="font-medium">Tindak lanjut Steering Committee</label>
                        <div className="flex space-x-4">
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Ya
                            </div>
                            <div>
                                <input type="radio" name="climbing" className="mr-1" />Tidak
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center my-4">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BBS;

