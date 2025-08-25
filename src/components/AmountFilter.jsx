import React from 'react';
import './AmountFilter.css';

const AmountFilter = () => {
    return (
        <div className="filter-card">
            <h3 className="filter-title">APPLIED FILTER</h3>
            <div className="filter-grid">
                <div className="filter-field">
                    <label className="filter-label">Employee</label>
                    <select className="select" defaultValue="">
                        <option value="" disabled>Select employee</option>
                    </select>
                </div>
                <div className="filter-field">
                    <label className="filter-label">Expense Type</label>
                    <select className="select" defaultValue="">
                        <option value="" disabled>Select expense type</option>
                    </select>
                </div>
                <div className="filter-field">
                    <label className="filter-label">From Date</label>
                    <input className="input" type="date" />
                </div>
                <div className="filter-field">
                    <label className="filter-label">To Date</label>
                    <input className="input" type="date" />
                </div>
            </div>
            <div className="filter-actions">
                <button className="btn btn-primary" type="button">Submit</button>
                <button className="btn btn-outline" type="button">Clear</button>
            </div>
        </div>
    );
};

export default AmountFilter;
