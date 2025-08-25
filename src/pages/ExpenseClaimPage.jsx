import React, { useState } from 'react';
import ExpenseClaimFilter from '../components/ExpenseClaimFilter';
import ExpenseClaimTable from '../components/ExpenseClaimTable';
import Footer from '../components/Footer';
import { expenseClaims } from '../data/expenseClaims';
import './ExpenseClaimPage.css';

const ExpenseClaimPage = () => {
    const [showMock, setShowMock] = useState(false);

    return (
        <div className="page">
            <div className="container-1400">
                <ExpenseClaimTable rows={expenseClaims} onAdd={() => setShowMock(true)} />
                <ExpenseClaimFilter />
                {showMock && <div className="mock">Add Bill (mock)</div>}
            </div>
            <Footer />
        </div>
    );
};

export default ExpenseClaimPage;
