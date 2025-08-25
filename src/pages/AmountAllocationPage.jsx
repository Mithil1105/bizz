import React, { useState } from 'react';
import AmountFilter from '../components/AmountFilter';
import AmountTable from '../components/AmountTable';
import './AmountAllocationPage.css';

const AmountAllocationPage = () => {
    const [showMock, setShowMock] = useState(false);

    return (
        <div className="page">
            <div className="container-1400">
                <AmountTable onNew={() => setShowMock(true)} />
                <AmountFilter />
                {showMock && <div className="mock-panel">New Amount Allocation (mock)</div>}
            </div>
        </div>
    );
};

export default AmountAllocationPage;
