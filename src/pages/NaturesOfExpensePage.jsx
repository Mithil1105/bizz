import React, { useState } from 'react';
import ExpenseTable from '../components/ExpenseTable';
import { expenses } from '../data/expenses';
import './NaturesOfExpensePage.css';

const NaturesOfExpensePage = () => {
    const [showMock, setShowMock] = useState(false);

    return (
        <div className="page">
            <div className="container-1400">
                <ExpenseTable rows={expenses} onCreate={() => setShowMock(true)} />
                {showMock && <div className="mock">Create Expense Head (mock)</div>}
            </div>
        </div>
    );
};

export default NaturesOfExpensePage;
