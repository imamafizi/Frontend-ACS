"use client";

import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline'; // Import PhotoIcon

const SWA = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <form className="p-6 bg-white shadow-md rounded-md w-full max-w-4xl my-5">
                <h3 className="text-2xl font-semibold mb-4 text-center">Stop Working Authority Form</h3>



                <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2">SWA Dilakukan Oleh:</h4>

                    <label class="block text-sm font-medium mb-1">Nama</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="namaImplementor"></input>

                    <label class="block text-sm font-medium mb-1">Badge</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="badgeImplementor"></input>

                    <label class="block text-sm font-medium mb-1">Job Title</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="jobTitleImplementor"></input>

                    <label class="block text-sm font-medium mb-1">Team</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="teamImplementor"></input>

                    <label class="block text-sm font-medium mb-1">Company</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="companyImplementor"></input>

                </div>



                <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2">SWA Diterapkan Kepada:</h4>

                    <label class="block text-sm font-medium mb-1">Nama</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="namaPrepetator"></input>

                    <label class="block text-sm font-medium mb-1">Badge</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="badgePrepetator"></input>

                    <label class="block text-sm font-medium mb-1">Job Title</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="jobTitlePrepetator"></input>

                    <label class="block text-sm font-medium mb-1">Team</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="teamPrepetator"></input>

                    <label class="block text-sm font-medium mb-1">Company</label>
                    <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="companyPrepetator"></input>


                </div>


                <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2">Detail SWA</h4>

                    <label class="block text-sm font-medium mb-1">Tanggal</label>
                    <input type="Date" name="date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>

                    <label class="block text-sm font-medium mb-1">Lokasi</label>
                    <input type="Text" name="location" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>

                    <label class="block text-sm font-medium mb-1">Deskripsi</label>
                    <input type="Text" name="desc" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>

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
                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label class="block text-sm font-medium mb-1">Alasan Melakukan SWA</label>
                        <input type="text" name="reason" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                        <label class="block text-sm font-medium mb-1">Saran dan Resolusi</label>
                        <input type="text" name="solution" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>

                    <div className="mb-6">
                        <h4 className="text-xl font-medium mb-2">Feedback</h4>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Apakah Aktifitas Kerja Dilakukan Kembali?</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center">
                                    <input type="radio" value="true" name="q1FeedbackSwa" className="mr-2" /> Ya
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" value="false" name="q1FeedbackSwa" className="mr-2" /> Tidak
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Apakah SWA Disepakati Dua Belah Pihak?</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center">
                                    <input type="radio" value="true" name="q2FeedbackSwa" className="mr-2" /> Ya
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" value="false" name="q2FeedbackSwa" className="mr-2" /> Tidak
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Apakah Isu SWA Dirasakan Satu Pihak?</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center">
                                    <input type="radio" value="true" name="q3FeedbackSwa" className="mr-2" /> Ya
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" value="false" name="q3FeedbackSwa" className="mr-2" /> Tidak
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Apakah Isu Yang Dibahas Terselesaikan?</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center">
                                    <input type="radio" value="true" name="q4FeedbackSwa" className="mr-2" /> Ya
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" value="false" name="q4FeedbackSwa" className="mr-2" /> Tidak
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Apakah Melibatkan Pihak Lain untuk Mitigasi?</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center">
                                    <input type="radio" value="true" name="q5FeedbackSwa" className="mr-2" /> Ya
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" value="false" name="q5FeedbackSwa" className="mr-2" /> Tidak
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SWA;
