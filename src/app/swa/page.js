"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { baseUrl } from '../utils/config';

const SWA = () => {
    const navigate = useRouter();
    const [formData, setFormData] = useState({
        nameImplementor: '',
        teamImplementor: '',
        companyImplementor: '',
        badgeImplementor: '',
        positionImplementor: '',
        namePerpetrator: '',
        teamPerpetrator: '',
        companyPerpetrator: '',
        badgePerpetrator: '',
        positionPerpetrator: '',
        date: '',
        location: '',
        reason: '',
        response: '',
        desc: '',
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
    });

    const [loginData, setLoginData] = useState(null);

    useEffect(() => {
        const storedLoginData = localStorage.getItem('login');
        if (storedLoginData) {
            setLoginData(JSON.parse(storedLoginData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!loginData) {
            alert('Login data not found. Please log in again.');
            return;
        }


        const transformedData = {
            ...formData,
            q1: formData.q1 === "Yes" ? true : false,
            q2: formData.q2 === "Yes" ? true : false,
            q3: formData.q3 === "Yes" ? true : false,
            q4: formData.q4 === "Yes" ? true : false,
            q5: formData.q5 === "Yes" ? true : false,
            date: new Date(formData.date).toISOString(),
        };

        try {
            const response = await axios.post(`${baseUrl}/swa/${loginData.id}`, transformedData);
            console.log('Form submitted successfully:', response.data);
            toast.success("Data submitted successfully!");
            setTimeout(() => {
                navigate.push("/showswa");
            }, 1000);
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Failed to submit data. Please try again.");
        }
    };

    const questions = [
        "Apakah Aktifitas Kerja Dilakukan Kembali?",
        "Apakah isu SWA disepakati kedua pihak?",
        "Apakah isu SWA hanya dirasakan satu pihak?",
        "Apakah isu yang dibahas terselesaikan?",
        "Apakah melibatkan pihak lain untuk mitigasi?"
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md w-full max-w-7xl my-5">
                <h3 className="text-2xl font-semibold mb-4 text-center">Stop Working Authority Form</h3>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        {/* Observer Data (Initiated/Reported By) */}
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th colSpan={4} className="px-6 py-3">
                                    <h4 className="text-lg font-bold mb-2">A. Observer Data (Swa Is Initiated/Reported By)</h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Name</th>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="nameImplementor"
                                        value={formData.nameImplementor}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-600">Badge</td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="badgeImplementor"
                                        value={formData.badgeImplementor}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Team</th>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="teamImplementor"
                                        value={formData.teamImplementor}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-600">Job Title</td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="positionImplementor"
                                        value={formData.positionImplementor}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap d">Company</th>
                                <td colSpan={3} className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="companyImplementor"
                                        value={formData.companyImplementor}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>

                            {/* Observee Data (Implemented To) */}
                            <tr className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <th colSpan={4} className="px-6 py-3">
                                    <h4 className="text-lg font-bold mb-2">B. Observee Data (Swa Is Implemented To)</h4>
                                </th>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Name</th>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="namePerpetrator"
                                        value={formData.namePerpetrator}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-600">Badge</td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="badgePerpetrator"
                                        value={formData.badgePerpetrator}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Team</th>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="teamPerpetrator"
                                        value={formData.teamPerpetrator}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-600">Job Title</td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="positionPerpetrator"
                                        value={formData.positionPerpetrator}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Company</th>
                                <td colSpan={3} className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="companyPerpetrator"
                                        value={formData.companyPerpetrator}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>

                            {/* General Information */}
                            <tr className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <th colSpan={4} className="px-6 py-3">
                                    <h4 className="text-lg font-bold mb-2">C. General Information</h4>
                                </th>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Date</th>
                                <td colSpan={3} className="px-6 py-4">
                                    <input
                                        type="date"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Location</th>
                                <td colSpan={3} className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Reason</th>
                                <td colSpan={3} className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Response</th>
                                <td colSpan={3} className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="response"
                                        value={formData.response}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">Description</th>
                                <td colSpan={3} className="px-6 py-4">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="desc"
                                        value={formData.desc}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>

                            {/* Evaluation Questions */}
                            <tr className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <th colSpan={4} className="px-6 py-3">
                                    <h4 className="text-lg font-bold mb-2">D. Evaluation Questions</h4>
                                </th>
                            </tr>
                            {questions.map((question, index) => (
                                <tr className="bg-white border-b " key={index}>
                                    <th scope="row" className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap ">
                                        {question}
                                    </th>
                                    <td className="px-6 py-4">
                                        <label className="inline-flex items-center mr-4">
                                            <input
                                                type="radio"
                                                className="form-radio"
                                                name={`q${index + 1}`}
                                                value="Yes"
                                                checked={formData[`q${index + 1}`] === "Yes"}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2">Yes</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio"
                                                name={`q${index + 1}`}
                                                value="No"
                                                checked={formData[`q${index + 1}`] === "No"}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2">No</span>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 flex justify-center">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-900 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SWA;
