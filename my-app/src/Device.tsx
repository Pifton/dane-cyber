// Topbar.js
import './Device.css';
import React, { useState } from 'react';
import { PiSignOutBold } from "react-icons/pi";
import deviceList from './device.json';

function Device() {
     //recherche rapide
     const [searchTerm, setSearchTerm] = useState('');

    const filteredDevices = deviceList.filter(device =>
        device.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="Devices">
          <header className="Header">
            <PiSignOutBold />
            <h1><b>Monitored Device</b></h1>
          </header>
          <input type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="Search" />
          <ul className='DeviceList'>
               {filteredDevices.map((device) => (
                    <li className='Device-name'><strong>{device.name}</strong></li>
               ))}
          </ul>
        </div>
    );
}

export default Device;
