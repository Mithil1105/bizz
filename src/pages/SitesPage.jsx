import React, { useState } from 'react';
import SitesTable from '../components/SitesTable';
import { sites } from '../data/sites';
import './SitesPage.css';

const SitesPage = () => {
    const [showMock, setShowMock] = useState(false);

    return (
        <div className="page">
            <div className="container-1400">
                <SitesTable rows={sites} onAdd={() => setShowMock(true)} />
                {showMock && <div className="mock">Add Site (mock)</div>}
            </div>
        </div>
    );
};

export default SitesPage;
