"use client";

import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline'; // Import PhotoIcon

const SWA = () => {
    const [currentSection, setCurrentSection] = useState(1);

    const handleNext = () => {
        setCurrentSection((prevSection) => prevSection + 1);
    };

    const handleBack = () => {
        setCurrentSection((prevSection) => prevSection - 1);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form className="p-6 bg-white shadow-md rounded-md w-full max-w-4xl my-5">
                <h3 className="text-2xl font-semibold mb-4 text-center">Stop Working Authority Form</h3>

                {currentSection === 1 && (
                    <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">SWA Dilapor Oleh:</h4>
                        {['Nama', 'Badge', 'Job title', 'Team', 'Company'].map((label, index) => (
                            <div className="mb-4" key={index}>
                                <label className="block text-sm font-medium mb-1">{label}</label>
                                <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        ))}
                        <div className="flex justify-end">
                            <button type="button" onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
                        </div>
                    </div>
                )}

                {currentSection === 2 && (
                    <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">SWA Dilakukan Oleh:</h4>
                        {['Nama', 'Badge', 'Job title', 'Team', 'Company'].map((label, index) => (
                            <div className="mb-4" key={index}>
                                <label className="block text-sm font-medium mb-1">{label}</label>
                                <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        ))}
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Back</button>
                            <button type="button" onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
                        </div>
                    </div>
                )}

                {currentSection === 3 && (
                    <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">SWA Diterapkan Kepada:</h4>
                        {['Nama', 'Badge', 'Job title', 'Team', 'Company'].map((label, index) => (
                            <div className="mb-4" key={index}>
                                <label className="block text-sm font-medium mb-1">{label}</label>
                                <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        ))}
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Back</button>
                            <button type="button" onClick={handleNext} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
                        </div>
                    </div>
                )}

                {currentSection === 4 && (
                    <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Detail SWA</h4>
                        {[
                            { label: 'Tanggal', type: 'date' },
                            { label: 'Lokasi', type: 'text' },
                            { label: 'Deskripsi', type: 'text' }
                        ].map((input, index) => (
                            <div className="mb-4" key={index}>
                                <label className="block text-sm font-medium mb-1">{input.label}</label>
                                <input type={input.type} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        ))}
                        <div className="mb-4">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Foto
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        {['Alasan Melakukan SWA', 'Saran dan Resolusi'].map((label, index) => (
                            <div className="mb-4" key={index}>
                                <label className="block text-sm font-medium mb-1">{label}</label>
                                <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        ))}
                        <div className="mb-6">
                            <h4 className="text-xl font-medium mb-2">Feedback</h4>
                            {[
                                { label: 'Apakah Aktifitas Kerja Dilakukan Kembali?', name: 'workResumed' },
                                { label: 'Apakah SWA Disepakati Dua Belah Pihak?', name: 'mutualAgreement' },
                                { label: 'Apakah Isu SWA Dirasakan Satu Pihak?', name: 'oneSidedIssue' },
                                { label: 'Apakah Isu Yang Dibahas Terselesaikan?', name: 'issueResolved' },
                                { label: 'Apakah Melibatkan Pihak Lain untuk Mitigasi?', name: 'externalInvolvement' }
                            ].map((radioGroup, index) => (
                                <div className="mb-4" key={index}>
                                    <label className="block text-sm font-medium mb-1">{radioGroup.label}</label>
                                    <div className="flex items-center space-x-4">
                                        <label className="flex items-center">
                                            <input type="radio" name={radioGroup.name} className="mr-2" /> Ya
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name={radioGroup.name} className="mr-2" /> Tidak
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={handleBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Back</button>
                            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default SWA;
