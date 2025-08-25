import React, { useState } from 'react';
import './ExpenseReportFilter.css';

const ExpenseReportFilter = () => {
    const [employee, setEmployee] = useState('');
    const [expenseType, setExpenseType] = useState('');
    const [lpo, setLpo] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [week, setWeek] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const submit = () => setSubmitted(true);
    const clear = () => { setEmployee(''); setExpenseType(''); setLpo(''); setYear(''); setMonth(''); setWeek(''); setSubmitted(false); };

    return (
        <div className="er-filter">
            <div className="er-row">
                <div className="er-field">
                    <label className="er-label">FILTER</label>
                </div>
            </div>
            <div className="er-row">
                <div className="er-field">
                    <label className="er-label">Employee</label>
                    <select className="er-select" value={employee} onChange={(e) => setEmployee(e.target.value)}>
                        <option value="">Select employee</option>
                        <option>Admin User</option>
                    </select>
                    {submitted && !employee && (<span className="er-error">Employee is required.</span>)}
                </div>
                <div className="er-field">
                    <label className="er-label">Expense Type</label>
                    <select className="er-select" value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
                        <option value="">Select expense type</option>
                    </select>
                </div>
                <div className="er-field">
                    <label className="er-label">LPO Number</label>
                    <input className="er-input" value={lpo} onChange={(e) => setLpo(e.target.value)} placeholder="" />
                </div>
                <div className="er-field">
                    <label className="er-label">Year</label>
                    <select className="er-select" value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="">Year</option>
                        <option>2025</option>
                        <option>2024</option>
                    </select>
                </div>
                <div className="er-field">
                    <label className="er-label">Month</label>
                    <select className="er-select" value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">Month</option>
                        <option>01</option>
                        <option>02</option>
                    </select>
                </div>
                <div className="er-field">
                    <label className="er-label">Week</label>
                    <select className="er-select" value={week} onChange={(e) => setWeek(e.target.value)}>
                        <option value="">Week</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="er-actions">
                    <button className="btn btn-primary" type="button" onClick={submit}>Submit</button>
                    <button className="btn btn-outline" type="button" onClick={clear}>Clear</button>
                </div>
                <div className="er-actions er-export">
                    <button className="btn btn-primary" type="button">Export</button>
                </div>
            </div>
        </div>
    );
};

export default ExpenseReportFilter;
