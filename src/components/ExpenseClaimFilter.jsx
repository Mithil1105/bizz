import React, { useState } from 'react';
import './ExpenseClaimFilter.css';

const ExpenseClaimFilter = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    return (
        <div className="ec-filter">
            <h3 className="ec-title">FILTER</h3>
            <div className="ec-row">
                <div className="ec-field">
                    <label className="ec-label">Bill From Date</label>
                    <input className="ec-input" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
                </div>
                <div className="ec-field">
                    <label className="ec-label">Bill To Date</label>
                    <input className="ec-input" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
                </div>
                <div className="ec-actions">
                    <button type="button" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-outline" onClick={() => { setFrom(''); setTo(''); }}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default ExpenseClaimFilter;
