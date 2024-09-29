// Topbar.js
import './Topbar.css'; 
import React from 'react';

function Topbar() {
    return (
        <div className="Topbar">
            {/* <h1><strong><b>DANE </b></strong>/ Auditor</h1> */}
               <img src="../public/dane-logo.png" />
               <strong><b>DANE</b></strong> / Auditor
        </div>
    );
}

export default Topbar;
