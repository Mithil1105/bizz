import React, { useState } from 'react';
import './ClaimVerificationFilter.css';

const ClaimVerificationFilter = () => {
    const [employee, setEmployee] = useState('');
    const [expenseType, setExpenseType] = useState('');
    const [engStatus, setEngStatus] = useState('Pending');

    return (
        <div className="cvf">
            <h3 className="cvf-title">APPLIED FILTER</h3>
            <div className="cvf-row">
                <div className="cvf-field">
                    <label className="cvf-label">Employee</label>
                    <select className="cvf-select" value={employee} onChange={(e) => setEmployee(e.target.value)}>
                        <option value="">Employee</option>
                    </select>
                </div>
                <div className="cvf-field">
                    <label className="cvf-label">Expense Type</label>
                    <select className="cvf-select" value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
                        <option value="">Expense Type</option>
                    </select>
                </div>
                <div className="cvf-field">
                    <label className="cvf-label">Engineer Approval Status</label>
                    <select className="cvf-select" value={engStatus} onChange={(e) => setEngStatus(e.target.value)}>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="cvf-actions">
                    <button type="button" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-outline" onClick={() => { setEmployee(''); setExpenseType(''); setEngStatus('Pending'); }}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default ClaimVerificationFilter;
