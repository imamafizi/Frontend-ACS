import React from 'react';

const SWA = () => {
    return (
        <>
            <form>
                <h3>Stop Working Authority Form</h3>

                <div className="row">
                    <h4>SWA Dilapor Oleh:</h4>
                </div>
                <div className="row">
                    <label>Nama</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Badge</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Job title</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Team</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Company</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <h4>SWA Dilakukan Oleh:</h4>
                </div>
                <div className="row">
                    <label>Nama</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Badge</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Job title</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Team</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Company</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <h4>SWA Diterapkan Kepada</h4>
                </div>
                <div className="row">
                    <label>Nama</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Badge</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Job title</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Team</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Company</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <h4>Detail SWA</h4>
                </div>
                <div className="row">
                    <label>Tanggal</label>
                    <input type="date" />
                </div>
                <div className="row">
                    <label>Lokasi</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Deskripsi</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Foto</label>
                    <input type="file" />
                </div>
                <div className="row">
                    <label>Alasan Melakukan SWA</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label>Saran dan Resolusi</label>
                    <input type="text" />
                </div>

                <div className="row">
                    <h4>Feedback</h4>
                </div>

                <div className="row">
                    <label>Apakah Aktifitas Kerja Dilakukan Kembali?</label>
                    <input type="radio" name="workResumed" />Ya
                    <input type="radio" name="workResumed" />Tidak
                </div>
                <div className="row">
                    <label>Apakah SWA Disepakati Dua Belah Pihak?</label>
                    <input type="radio" name="mutualAgreement" />Ya
                    <input type="radio" name="mutualAgreement" />Tidak
                </div>
                <div className="row">
                    <label>Apakah Isu SWA Dirasakan Satu Pihak?</label>
                    <input type="radio" name="oneSidedIssue" />Ya
                    <input type="radio" name="oneSidedIssue" />Tidak
                </div>
                <div className="row">
                    <label>Apakah Isu Yang Dibahas Terselesaikan?</label>
                    <input type="radio" name="issueResolved" />Ya
                    <input type="radio" name="issueResolved" />Tidak
                </div>
                <div className="row">
                    <label>Apakah Melibatkan Pihak Lain untuk Mitigasi?</label>
                    <input type="radio" name="externalInvolvement" />Ya
                    <input type="radio" name="externalInvolvement" />Tidak
                </div>
            </form>
        </>
    );
}

export default SWA;
