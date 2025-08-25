import React from 'react';
import ClaimVerificationFilter from '../components/ClaimVerificationFilter';
import ClaimVerificationTable from '../components/ClaimVerificationTable';
import './ClaimVerificationPage.css';

const ClaimVerificationPage = () => {
    return (
        <div className="page">
            <div className="container-1400">
                <ClaimVerificationTable />
                <ClaimVerificationFilter />
            </div>
        </div>
    );
};

export default ClaimVerificationPage;
