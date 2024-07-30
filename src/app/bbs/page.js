import React from 'react';

const BBS = () => {
    return (
        <>
            <h3>BBS Observation Form</h3>
            <form>
                <h4>Informasi Pengamat</h4>

                <div className="row">
                    <label>Tanggal</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <label>Nama</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <label>Observasi Diri Sendiri</label>
                    <input type="radio" name="selfObservation" />Ya
                    <input type="radio" name="selfObservation" />Tidak
                </div>

                <div className="row">
                    <label>Ada Pembimbing</label>
                    <input type="radio" name="mentor" />Ya
                    <input type="radio" name="mentor" />Tidak
                </div>

                <h4>Informasi Observasi</h4>

                <div className="row">
                    <label>Lokasi Observasi</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <label>Jumlah yang Diobservasi</label>
                    <input type="number" />
                </div>

                <div className="row">
                    <label>Organisasi Yang Mengobservasi</label>
                    <input type="radio" name="observingOrganization" />PHR
                    <input type="radio" name="observingOrganization" />Kontraktor
                </div>

                <div className="row">
                    <label>Organisasi yang Diobservasi</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <label>Perusahaan Kontraktor</label>
                    <input type="text" />
                </div>

                <h5>Posisi Badan</h5>

                <div className="row">
                    <label>Menghindari Lintasan Bahaya (Line of Fire)</label>
                    <input type="radio" name="lineOfFire" />Safe
                    <input type="radio" name="lineOfFire" />At Risk
                </div>

                <div className="row">
                    <label>Berjalan / Bergerak dengan Pandangan ke Arah Gerakan</label>
                    <input type="radio" name="walkingDirection" />Safe
                    <input type="radio" name="walkingDirection" />At Risk
                </div>

                <div className="row">
                    <label>Menjaga Pandangan Mata pada Pekerjaan</label>
                    <input type="radio" name="eyeOnTask" />Safe
                    <input type="radio" name="eyeOnTask" />At Risk
                </div>

                <div className="row">
                    <label>Menjaga Badan dan Bagiannya di Luar Posisi Terjepit</label>
                    <input type="radio" name="bodyPosition" />Safe
                    <input type="radio" name="bodyPosition" />At Risk
                </div>

                <div className="row">
                    <label>Menaiki / Menuruni</label>
                    <input type="radio" name="climbing" />Safe
                    <input type="radio" name="climbing" />At Risk
                </div>

                <h5>Menggunakan Badan</h5>

                <div className="row">
                    <label>Mengangkat / Menurunkan / Menekan / Menarik</label>
                    <input type="radio" name="lifting" />Safe
                    <input type="radio" name="lifting" />At Risk
                </div>

                <div className="row">
                    <label>Menghindar dari Gerakan Memuntir</label>
                    <input type="radio" name="twisting" />Safe
                    <input type="radio" name="twisting" />At Risk
                </div>

                <div className="row">
                    <label>Menggapai / Meraih dalam Jangkauan</label>
                    <input type="radio" name="reaching" />Safe
                    <input type="radio" name="reaching" />At Risk
                </div>

                <div className="row">
                    <label>Menanggapi Resiko Ergonomi Industri</label>
                    <input type="radio" name="ergonomicRisk" />Safe
                    <input type="radio" name="ergonomicRisk" />At Risk
                </div>

                <h5>Perkakas dan Peralatan</h5>

                <div className="row">
                    <label>Memilih dan Menggunakan Perkakas / Peralatan</label>
                    <input type="radio" name="toolsUsage" />Safe
                    <input type="radio" name="toolsUsage" />At Risk
                </div>

                <div className="row">
                    <label>Menggunakan Pelindung / Barikade / Alat Peringatan</label>
                    <input type="radio" name="protectiveGear" />Safe
                    <input type="radio" name="protectiveGear" />At Risk
                </div>

                <h5>Prosedur</h5>

                <div className="row">
                    <label>Persiapan Kerja dan JSA (Job Safety Analysis)</label>
                    <input type="radio" name="workPreparation" />Safe
                    <input type="radio" name="workPreparation" />At Risk
                </div>

                <div className="row">
                    <label>Mengikuti Prosedur Kerja</label>
                    <input type="radio" name="followingProcedure" />Safe
                    <input type="radio" name="followingProcedure" />At Risk
                </div>

                <div className="row">
                    <label>Mengisolasi Energi (Lock-Out / Tag-Out)</label>
                    <input type="radio" name="energyIsolation" />Safe
                    <input type="radio" name="energyIsolation" />At Risk
                </div>

                <div className="row">
                    <label>Mengerjakan Hot-Work</label>
                    <input type="radio" name="hotWork" />Safe
                    <input type="radio" name="hotWork" />At Risk
                </div>

                <div className="row">
                    <label>Memasuki Ruang Terbatas (confined space)</label>
                    <input type="radio" name="confinedSpace" />Safe
                    <input type="radio" name="confinedSpace" />At Risk
                </div>

                <div className="row">
                    <label>Komunikasi antar Rekan Kerja</label>
                    <input type="radio" name="communication" />Safe
                    <input type="radio" name="communication" />At Risk
                </div>

                <h5>Area Kerja</h5>

                <div className="row">
                    <label>Bekerja pada Posisi Stabil</label>
                    <input type="radio" name="stablePosition" />Safe
                    <input type="radio" name="stablePosition" />At Risk
                </div>

                <div className="row">
                    <label>Pengaturan Area Kerja / Housekeeping</label>
                    <input type="radio" name="housekeeping" />Safe
                    <input type="radio" name="housekeeping" />At Risk
                </div>

                <div className="row">
                    <label>Bekerja di Lingkungan dengan Cahaya yang Cukup</label>
                    <input type="radio" name="sufficientLighting" />Safe
                    <input type="radio" name="sufficientLighting" />At Risk
                </div>

                <h5>Ergonomi Kantor</h5>

                <div className="row">
                    <label>Melakukan Istirahat Berkala (Didukung Oleh Workpace)</label>
                    <input type="radio" name="regularBreaks" />Safe
                    <input type="radio" name="regularBreaks" />At Risk
                </div>

                <div className="row">
                    <label>Posisi Leher dan Punggung</label>
                    <input type="radio" name="neckBackPosition" />Safe
                    <input type="radio" name="neckBackPosition" />At Risk
                </div>

                <div className="row">
                    <label>Menggunakan Telepon</label>
                    <input type="radio" name="phoneUsage" />Safe
                    <input type="radio" name="phoneUsage" />At Risk
                </div>

                <div className="row">
                    <label>Penyangga Punggung</label>
                    <input type="radio" name="backSupport" />Safe
                    <input type="radio" name="backSupport" />At Risk
                </div>

                <div className="row">
                    <label>Posisi Pundak</label>
                    <input type="radio" name="shoulderPosition" />Safe
                    <input type="radio" name="shoulderPosition" />At Risk
                </div>

                <div className="row">
                    <label>Posisi Lengan, Tangan, Pergelangan, dan Jari</label>
                    <input type="radio" name="armPosition" />Safe
                    <input type="radio" name="armPosition" />At Risk
                </div>

                <div className="row">
                    <label>Posisi Kaki</label>
                    <input type="radio" name="legPosition" />Safe
                    <input type="radio" name="legPosition" />At Risk
                </div>

                <div className="row">
                    <label>Pencahayaan</label>
                    <input type="radio" name="lighting" />Safe
                    <input type="radio" name="lighting" />At Risk
                </div>

                <div className="row">
                    <label>Penggunaan Mouse</label>
                    <input type="radio" name="mouseUsage" />Safe
                    <input type="radio" name="mouseUsage" />At Risk
                </div>

                <h5>Lainnya</h5>

                <div className="row">
                    <label>Alat Pelindung Diri (APD) / Personal Protective Equipment (PPE)</label>
                    <input type="radio" name="ppe" />Safe
                    <input type="radio" name="ppe" />At Risk
                </div>

                <div className="row">
                    <label>Lainnya</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <label>Komentar / Saran</label>
                    <textarea></textarea>
                </div>

                <div className="row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
};

export default BBS;
