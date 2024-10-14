"use client";
import Pagination from "@/components/Pagination";
import Spinner from "@/components/Spinner";
import AuthGuard from "@/hoc/AuthGuard";
import useGetSWA from "@/hooks/api/swa/useGetSWA";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaPlusSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Page = () => {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const downloadFile = () => {};

  const { data: swa, isPending } = useGetSWA({ page });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[30vh]">
        <Spinner />
      </div>
    );
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < Math.ceil(swa.meta.total / swa.meta.take)) {
      setPage(page + 1);
    }
  };

  const openModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      <div className="flex justify-between py-5 pr-5 items-center">
        <Link href="/swa" legacyBehavior>
          <a className="flex items-center text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 dark:bg-red-700 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-red-900">
            <FaPlusSquare className="mr-2" /> Tambahkan SWA
          </a>
        </Link>

        <form className="max-w-md ms-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <th className="py-3 px-6 text-left">Deskripsi</th>
              <th className="py-3 px-6 text-left">Alasan SWA</th>
              <th className="py-3 px-6 text-left">Aksi</th>
            </tr>
          </thead>

          {swa && swa.data.length && (
            <tbody className="text-gray-700">
              {swa.data.map((d, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-4 px-6">{i + 1 * page}</td>
                  <td className="py-4 px-6">
                    {new Date(d.date).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">{d.location}</td>
                  <td className="py-4 px-6">{d.desc}</td>
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
          )}
        </table>
      </div>

      {isModalOpen && selectedRecord && (
        <div
          id="detailSwa"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto fixed inset-0 z-50 flex justify-center items-center"
        >
          <div className="relative p-4 w-full max-w-screen-xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Detail SWA
                </h3>
                <div>
                  <button
                    className="text-gray-900 mr-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={downloadFile}
                  >
                    <FaDownload />
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th colSpan={4} className="px-6 py-3">
                          <h4 className="text-lg font-bold mb-2">
                            A. Observer Data (Swa Is Initiated/Reported By)/swa
                            digagas/ dilapor oleh{" "}
                          </h4>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4 ">Name</th>
                        <td className="px-6  py-4">
                          <p>{selectedRecord.user.username}</p>
                        </td>
                        <th className="px-6 py-4">Badge</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.user.badge}</p>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">Email</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.user.email}</p>
                        </td>
                        <th className="px-6 py-4">Job Title</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.user.jabatan}</p>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <th className="px-6 py-4">Company</th>
                        <td colSpan={3} className="px-6 py-4">
                          <p>{selectedRecord.user.company}</p>
                        </td>
                      </tr>

                      <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th colSpan={6} className="px-6 py-3">
                          <h4 className="text-lg font-bold mb-2">
                            B. Observer Data (Swa Is Implemented By)/Data
                            Observer (Swa Dilakukan Oleh){" "}
                          </h4>
                        </th>
                      </tr>

                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">Name</th>

                        <td className="px-6 py-4">
                          <p>{selectedRecord.nameImplementor}</p>
                        </td>
                        <th className="px-6 py-4">Badge</th>

                        <td className="px-6 py-4">
                          <p>{selectedRecord.badgeImplementor}</p>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">Team</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.teamImplementor}</p>
                        </td>
                        <th className="px-6 py-4">Job Title</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.positionImplementor}</p>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <th className="px-6 py-4">Company</th>
                        <td colSpan={4} className="px-6 py-4">
                          <p>{selectedRecord.companyImplementor}</p>
                        </td>
                      </tr>

                      <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th colSpan={4} className="px-6 py-3">
                          <h4 className="text-lg font-bold mb-2">
                            C. Observee Data (Swa Is Implemented To)/Data
                            Observee (Swa diterapkan kepada){" "}
                          </h4>
                        </th>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">Name</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.namePerpetrator}</p>
                        </td>
                        <th className="px-6 py-4">Badge</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.badgePerpetrator}</p>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">Team</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.teamPerpetrator}</p>
                        </td>
                        <th className="px-6 py-4">Job Title</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.positionPerpetrator}</p>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <th className="px-6 py-4">Company</th>
                        <td colSpan={3} className="px-6 py-4">
                          <p>{selectedRecord.companyPerpetrator}</p>
                        </td>
                      </tr>

                      <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th colSpan={4} className="px-6 py-3">
                          <h4 className="text-lg  font-bold mb-2">
                            D. Detail SWA Observation{" "}
                          </h4>
                        </th>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">Date/Taggal</th>
                        <td className="px-6 py-4">
                          <p>
                            {new Date(selectedRecord.date).toLocaleDateString()}
                          </p>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">Deskripsi</th>
                        <td colSpan={3} className="px-6 py-4">
                          <p>{selectedRecord.desc}</p>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">Location/Lokasi</th>
                        <td className="px-6 py-4">
                          <p>{selectedRecord.location}</p>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">
                          Reason For Doing Swa/Alasan Melakukan Swa
                        </th>

                        <td colSpan={3} className="px-6 py-4">
                          <p>{selectedRecord.reason}</p>
                        </td>
                      </tr>

                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-6 py-4">
                          Response & Solution/ Respon dan Solusi
                        </th>

                        <td colSpan={3} className="px-6 py-4">
                          <p>{selectedRecord.response}</p>
                        </td>
                      </tr>

                      <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th colSpan={4} className="px-6 py-3">
                          <h4 className="text-lg font-bold mb-2">
                            Feedback / Umpan Balik{" "}
                          </h4>
                        </th>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th colSpan={2} className="px-6 py-4">
                          Was work Actvity Resumed? / Apakah Aktifitas Kerja
                          Dilanjutkan Kembali?
                        </th>
                        <td colSpan={2} className="px-6 py-4">
                          {selectedRecord.q1 ? "Yes" : "No"}
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th colSpan={2} className="px-6 py-4">
                          Was Real Problem? / Apakah Isu SWA Disepakati Dua
                          Belah Pihak?
                        </th>
                        <td colSpan={2} className="px-6 py-4">
                          {selectedRecord.q2 ? "Yes" : "No"}
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th colSpan={2} className="px-6 py-4">
                          Was Perceived problem? / Apakah Isu Swa Dirasakan Satu
                          Pihak?
                        </th>
                        <td colSpan={2} className="px-6 py-4">
                          {selectedRecord.q3 ? "Yes" : "No"}
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th colSpan={2} className="px-6 py-4">
                          Was Issue Resolved? / Apakah Isu yang Dibahas
                          Terselesaikan?
                        </th>
                        <td colSpan={2} className="px-6 py-4">
                          {selectedRecord.q4 ? "Yes" : "No"}
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th colSpan={2} className="px-6 py-4">
                          Were Outside Resource Involved to Mitigate? / Apakah
                          Melibatkan Pihak Lain Dalam Mitigasi?
                        </th>
                        <td colSpan={2} className="px-6 py-4">
                          {selectedRecord.q5 ? "Yes" : "No"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
};

export default AuthGuard(Page);
