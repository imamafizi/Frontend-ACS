"use client";

import { baseUrl } from "@/app/utils/config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PhotoIcon } from '@heroicons/react/24/outline';

const SWA = () => {
    const navigate = useRouter();

    // Initialize state for the form data
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

        // Transform data if needed
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

    const formFields = [
        {
            title: "SWA Dilakukan Oleh:",
            fields: [
                { label: "Nama", type: "text", name: "nameImplementor" },
                { label: "Badge", type: "text", name: "badgeImplementor" },
                { label: "Job Title", type: "text", name: "positionImplementor" },
                { label: "Team", type: "text", name: "teamImplementor" },
                { label: "Company", type: "text", name: "companyImplementor" },
            ],
        },
        {
            title: "SWA Diterapkan Kepada:",
            fields: [
                { label: "Nama", type: "text", name: "namePerpetrator" },
                { label: "Badge", type: "text", name: "badgePerpetrator" },
                { label: "Job Title", type: "text", name: "positionPerpetrator" },
                { label: "Team", type: "text", name: "teamPerpetrator" },
                { label: "Company", type: "text", name: "companyPerpetrator" },
            ],
        },
        {
            title: "Detail SWA",
            fields: [
                { label: "Tanggal", type: "date", name: "date" },
                { label: "Lokasi", type: "text", name: "location" },
                { label: "Deskripsi", type: "text", name: "desc" },
                {
                    label: "Foto",
                    type: "file",
                    name: "file-upload",
                    custom: true,
                },
                { label: "Alasan Melakukan SWA", type: "text", name: "reason" },
                { label: "Saran dan Resolusi", type: "text", name: "response" },
            ],
        },
        {
            title: "Feedback",
            fields: [
                { label: "Apakah Aktifitas Kerja Dilakukan Kembali?", type: "radio", name: "q1", options: ["Yes", "No"] },
                { label: "Apakah isu SWA disepakati kedua pihak?", type: "radio", name: "q2", options: ["Yes", "No"] },
                { label: "Apakah isu SWA hanya dirasakan satu pihak?", type: "radio", name: "q3", options: ["Yes", "No"] },
                { label: "Apakah isu yang dibahas terselesaikan?", type: "radio", name: "q4", options: ["Yes", "No"] },
                { label: "Apakah melibatkan pihak lain untuk mitigasi?", type: "radio", name: "q5", options: ["Yes", "No"] },
            ],
        },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md w-full max-w-4xl my-5">
                <h3 className="text-2xl font-semibold mb-4 text-center">Stop Working Authority Form</h3>
                {formFields.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h4 className="text-xl font-medium mb-2">{section.title}</h4>
                        {section.fields.map((field, idx) => (
                            <div key={idx} className="mb-4">
                                {field.type === 'file' ? (
                                    <div>
                                        <label htmlFor={field.name} className="block text-sm font-medium mb-1">{field.label}</label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label
                                                        htmlFor={field.name}
                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id={field.name} name={field.name} type={field.type} className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : field.type === 'radio' ? (
                                    <div>
                                        <label className="block text-sm font-medium mb-1">{field.label}</label>
                                        <div className="flex items-center space-x-4">
                                            {field.options.map((option, optionIndex) => (
                                                <label key={optionIndex}>
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        value={option}
                                                        checked={formData[field.name] === option}
                                                        onChange={handleChange}
                                                    />
                                                    {option}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block text-sm font-medium mb-1">{field.label}</label>
                                        <input
                                            type={field.type}
                                            className="block w-full rounded-md"
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SWA;
