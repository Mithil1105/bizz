import React, { useState } from 'react';
import './ClaimApprovalFilter.css';

const ClaimApprovalFilter = () => {
    const [employee, setEmployee] = useState('');
    const [expenseType, setExpenseType] = useState('');
    const [engStatus, setEngStatus] = useState('Pending');
    const [hoStatus, setHoStatus] = useState('Pending');

    return (
        <div className="cap-filter">
            <h3 className="cap-title">APPLIED FILTER</h3>
            <div className="cap-row">
                <div className="cap-field">
                    <label className="cap-label">Employee</label>
                    <select className="cap-select" value={employee} onChange={(e) => setEmployee(e.target.value)}>
                        <option value="">Select employee</option>
                    </select>
                </div>
                <div className="cap-field">
                    <label className="cap-label">Expense Type</label>
                    <select className="cap-select" value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
                        <option value="">Select expense type</option>
                    </select>
                </div>
                <div className="cap-field">
                    <label className="cap-label">Engineer Approval Status</label>
                    <select className="cap-select" value={engStatus} onChange={(e) => setEngStatus(e.target.value)}>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="cap-field">
                    <label className="cap-label">HO Approval Status</label>
                    <select className="cap-select" value={hoStatus} onChange={(e) => setHoStatus(e.target.value)}>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>
                </div>
                <div className="cap-actions">
                    <button className="btn btn-primary" type="button">Submit</button>
                    <button className="btn btn-outline" type="button" onClick={() => { setEmployee(''); setExpenseType(''); setEngStatus('Pending'); setHoStatus('Pending'); }}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default ClaimApprovalFilter;
