import React from 'react';
import Navbar from '../Widgets/Navbar';
import TimeComponent from '../Widgets/Time';

import '../css/About.css';

function About () {
    return (
    <div className="Container">
        <div className="Navbar">
            <Navbar/>
            <TimeComponent/>
        <h1 id="isi">Saya masih berstatus sebagai mahasiswa di Binus jurusan<br />
            Teknik Informatika peminatan Database. Selain itu saya pernah
            memiliki pengalaman <br />dalam mendevelop sebuah aplikasi berbasis
            IOS/APPLE dalam IOS FOUNDATION<br />
            yang berjangka waktu 1 bulan. Saat ini saya sedang<br />
            internship di Homecredit sebagai Front-End Developer dalam jangka
            waktu 1 tahun.</h1>
        </div>
        <div className="footer">
            ini footer boy
        </div>
    </div>
    );
}

export default About;