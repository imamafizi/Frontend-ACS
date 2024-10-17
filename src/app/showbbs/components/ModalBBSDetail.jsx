"use client";

import { FaDownload } from "react-icons/fa";
import * as XLSX from "xlsx";

const ModalBBSDetail = ({ setIsModalOpen, selectedRecord }) => {
  const groupedData = Object.entries(selectedRecord).reduce(
    (acc, [key, value]) => {
      const fieldMapping = fieldMappings[key];

      if (fieldMapping) {
        const { category, title } = fieldMapping;

        if (!acc[category]) {
          acc[category] = [];
        }

        let status;
        if (category === "Feedback") {
          status = value ? "Yes" : "No";
        } else if (category === "Informasi Tambahan") {
          status = value;
        } else {
          status = value === true ? "At Risk" : "Safe";
        }

        acc[category].push({
          No: key,
          Title: title,
          Status: status,
        });
      }

      return acc;
    },
    {}
  );

  const downloadFile = () => {
    const data = [];

    Object.keys(groupedData).forEach((category) => {
      groupedData[category].forEach((item, index) => {
        data.push({
          No: index + 1,
          "Observasi Perilaku": item.Title,
          "At Risk / Safe": item.Status,
          Category: category,
        });
      });
    });

    const ws = XLSX.utils.json_to_sheet(data);

    // Set column widths
    ws["!cols"] = [
      { wpx: 50 }, // No
      { wpx: 300 }, // Observasi Perilaku
      { wpx: 100 }, // At Risk / Safe
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "BBS Detail");

    XLSX.writeFile(wb, `BBS_Detail_${new Date().toISOString()}.xlsx`);
  };

  return (
    <div
      id="detailBbs"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto fixed inset-0 z-50 flex justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-screen-lg max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 ">Detail BBS</h3>
            <div>
              <button
                className="text-gray-900 mr-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                onClick={downloadFile}
              >
                <FaDownload />
              </button>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
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
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th colSpan={4} className="px-6 py-3">
                    <h4 className="text-sm font-medium mb-2">
                      Informasi Pengamat
                    </h4>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white border-b  ">
                  <th
                    colSpan={2}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Tanggal
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    <p>{new Date(selectedRecord.date).toLocaleDateString()}</p>
                  </td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th
                    colSpan={2}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Lokasi Observasi
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    <p>{selectedRecord.location}</p>
                  </td>
                </tr>
                <tr colSpan={2} className="bg-white border-b  ">
                  <th
                    colSpan={2}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Rig/Unit
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    <p>{selectedRecord.rig}</p>
                  </td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th
                    colSpan={2}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Area Observasi
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    <p>{selectedRecord.where}</p>
                  </td>
                </tr>
                <tr className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <th colSpan={4} className="px-6 py-3">
                    <h4 className="text-sm font-medium mb-2">
                      Deskripsi Perilaku{" "}
                    </h4>
                  </th>
                </tr>
                {Object.entries(selectedRecord)
                  .filter(
                    ([key, value]) => key.startsWith("q") && value === true
                  )
                  .map(([key, value], index) => (
                    <tr key={index} className="bg-white border-b  ">
                      <th
                        colSpan={2}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        <p className="text-sm font-semibold mb-2">
                          {fieldMappings[key].title}
                        </p>
                      </th>
                      <td colSpan={2} cope="row" className="px-6 py-4">
                        <p>At Risk</p>
                      </td>
                    </tr>
                  ))}
                <tr className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <th colSpan={4} className="px-6 py-3">
                    <h4 className="text-sm font-medium mb-2">
                      Informasi Tambahan{" "}
                    </h4>
                  </th>
                </tr>
                <tr className="bg-white border-b  ">
                  <th
                    colSpan={2}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    When
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    <p>{selectedRecord.when}</p>
                  </td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th colSpan={2} className="px-6 py-4">
                    Find
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    <p>{selectedRecord.find}</p>
                  </td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th colSpan={2} className="px-6 py-4">
                    Reason
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    <p>{selectedRecord.reason}</p>
                  </td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th colSpan={2} className="px-6 py-4">
                    Suggest
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    <p>{selectedRecord.suggest}</p>
                  </td>
                </tr>

                <tr className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <th colSpan={4} className="px-6 py-3">
                    <h4 className="text-lg font-bold mb-2">
                      Feedback / Umpan Balik{" "}
                    </h4>
                  </th>
                </tr>
                <tr className="bg-white border-b  ">
                  <th colSpan={2} className="px-6 py-4">
                    Setuju perilaku terjadi?
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    {selectedRecord.p1 ? "Yes" : "No"}
                  </td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th colSpan={2} className="px-6 py-4">
                    Setuju perilaku berisiko?
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    {selectedRecord.p2 ? "Yes" : "No"}
                  </td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th colSpan={2} className="px-6 py-4">
                    Perilaku selamat?
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    {selectedRecord.p3 ? "Mudah" : "Tidak Mungkin"}
                  </td>
                </tr>
                <tr className="bg-white border-b  ">
                  <th colSpan={2} className="px-6 py-4">
                    Tindak lanjut Steering Committee?
                  </th>
                  <td colSpan={2} className="px-6 py-4">
                    {selectedRecord.p4 ? "Yes" : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBBSDetail;

const fieldMappings = {
  q11: {
    title: "1.1 Menghindari Lintasan Bahaya (Line of Fire)",
    category: "Posisi Badan",
  },
  q12: {
    title: "1.2 Berjalan / Bergerak dengan Pandangan ke Arah Gerakan",
    category: "Posisi Badan",
  },
  q13: {
    title: "1.3 Menjaga Pandangan Mata pada Pekerjaan",
    category: "Posisi Badan",
  },
  q14: {
    title: "1.4 Menjaga Badan dan Bagiannya di Luar Posisi Terjepit",
    category: "Posisi Badan",
  },
  q15: { title: "1.5 Menaiki / Menuruni", category: "Posisi Badan" },
  q21: {
    title: "2.1 Mengangkat / Menurunkan / Menekan / Menarik",
    category: "Menggunakan Badan",
  },
  q22: {
    title: "2.2 Menghindar dari Gerakan Memuntir",
    category: "Menggunakan Badan",
  },
  q23: {
    title: "2.3 Menggapai / Meraih dalam Jangkauan",
    category: "Menggunakan Badan",
  },
  q24: {
    title: "2.4 Menanggapi Risiko Ergonomi Industri",
    category: "Menggunakan Badan",
  },
  q31: {
    title: "3.1 Memilih dan Menggunakan Perkakas / Peralatan",
    category: "Perkakas dan Peralatan",
  },
  q32: {
    title: "3.2 Menggunakan Pelindung / Barikade / Alat Peringatan",
    category: "Perkakas dan Peralatan",
  },
  q41: {
    title: "4.1 Persiapan Kerja dan JSA (Job Safety Analysis)",
    category: "Prosedur",
  },
  q42: { title: "4.2 Mengikuti Prosedur Kerja", category: "Prosedur" },
  q43: {
    title: "4.3 Mengisolasi Energi (Lock-Out / Tag-Out)",
    category: "Prosedur",
  },
  q44: { title: "4.4 Mengerjakan Hot-Work", category: "Prosedur" },
  q45: {
    title: "4.5 Memasuki Ruang Terbatas (Confined Space)",
    category: "Prosedur",
  },
  q47: { title: "4.7 Komunikasi antar Rekan Kerja", category: "Prosedur" },
  q51: { title: "5.1 Bekerja pada Posisi Stabil", category: "Area Kerja" },
  q52: {
    title: "5.2 Pengaturan Area Kerja / Housekeeping",
    category: "Area Kerja",
  },
  q53: {
    title: "5.3 Bekerja di Lingkungan dengan Cahaya yang Cukup",
    category: "Area Kerja",
  },
  q61: {
    title: "6.1 Melakukan Istirahat Berkala (Didukung Oleh Workplace)",
    category: "Ergonomi Kantor",
  },
  q62: { title: "6.2 Posisi Leher dan Punggung", category: "Ergonomi Kantor" },
  q63: { title: "6.3 Menggunakan Telepon", category: "Ergonomi Kantor" },
  q64: { title: "6.4 Penyangga Punggung", category: "Ergonomi Kantor" },
  q65: { title: "6.5 Posisi Pundak", category: "Ergonomi Kantor" },
  q66: {
    title: "6.6 Posisi Pergelangan Tangan dan Tangan",
    category: "Ergonomi Kantor",
  },
  q67: {
    title: "6.7 Memegang / Menggerakkan Mouse",
    category: "Ergonomi Kantor",
  },
  q68: {
    title: "6.8 Mengenali dan Melaporkan Ketidaknyamanan",
    category: "Ergonomi Kantor",
  },
  q71: { title: "7.1 Mencegah Tumpahan", category: "Pemeliharaan Lingkungan" },
  q72: {
    title: "7.2 Persiapan Membersihkan Tumpahan",
    category: "Pemeliharaan Lingkungan",
  },
  q73: { title: "7.3 Menangani Limbah", category: "Pemeliharaan Lingkungan" },
  q81: { title: "8.1 Pelindung Kepala", category: "Alat Pelindung Diri" },
  q82: {
    title: "8.2 Pelindung Mata dan Wajah",
    category: "Alat Pelindung Diri",
  },
  q83: { title: "8.3 Pelindung Pendengaran", category: "Alat Pelindung Diri" },
  q84: { title: "8.4 Pelindung Pernafasan", category: "Alat Pelindung Diri" },
  q85: {
    title: "8.5 Pelindung Tangan dan Lengan",
    category: "Alat Pelindung Diri",
  },
  q86: { title: "8.6 Pelindung Jatuh", category: "Alat Pelindung Diri" },
  q87: {
    title: "8.7 Pakaian Pelindung yang Sesuai",
    category: "Alat Pelindung Diri",
  },
  q88: { title: "8.8 Pelindung Kaki", category: "Alat Pelindung Diri" },
  q91: { title: "9.1 Perencanaan Perjalanan", category: "Mengemudi" },
  q92: {
    title: "9.2 Pre-Trip Inspection dan Sabuk Keselamatan",
    category: "Mengemudi",
  },
  q93: { title: "9.3 Menyesuaikan Kecepatan", category: "Mengemudi" },
  q94: { title: "9.4 Menjaga Jarak Iring", category: "Mengemudi" },
  q95: { title: "9.5 Menginjak Rem", category: "Mengemudi" },
  q96: { title: "9.6 Berpindah Jalur", category: "Mengemudi" },
  q97: {
    title: "9.7 Pandangan Luas, Jauh, dan Aktifkan Mata",
    category: "Mengemudi",
  },
  q98: { title: "9.7 Memundurkan", category: "Mengemudi" },
  when: { title: "When", category: "Informasi Tambahan" },
  find: { title: "Find", category: "Informasi Tambahan" },
  reason: { title: "Reason", category: "Informasi Tambahan" },
  suggest: { title: "Suggest", category: "Informasi Tambahan" },
  p1: { title: "P1", category: "Feedback" },
  p2: { title: "P2", category: "Feedback" },
  p3: { title: "P3", category: "Feedback" },
  p4: { title: "P4", category: "Feedback" },
};
