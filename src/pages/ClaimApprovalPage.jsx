import React from 'react';
import ClaimApprovalFilter from '../components/ClaimApprovalFilter';
import ClaimApprovalTable from '../components/ClaimApprovalTable';
import './ClaimApprovalPage.css';

const ClaimApprovalPage = () => {
    return (
        <div className="page">
            <div className="container-1400">
                <ClaimApprovalTable />
                <ClaimApprovalFilter />
            </div>
        </div>
    );
};

export default ClaimApprovalPage;
