"use client";

import { FaEye } from "react-icons/fa";

const TableBBS = ({ bbs, openModal, page }) => {
  return (
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
          {bbs.data.map((d, i) => (
            <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-4 px-6">{i + 1 * page}</td>
              <td className="py-4 px-6">
                {new Date(d.date).toLocaleDateString()}
              </td>
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
  );
};

export default TableBBS;
