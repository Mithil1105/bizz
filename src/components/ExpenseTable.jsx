import React from 'react';
import './ExpenseTable.css';

const Badge = ({ status }) => {
    if (status === 'Only For Admin') return <span className="badge-green">Only For Admin</span>;
    return <span className="badge-blue">Active</span>;
};

const ExpenseTable = ({ rows, onCreate }) => {
    return (
        <div>
            <div className="ne-header">
                <h2 className="ne-title">NATURES OF EXPENSE</h2>
                <button className="btn-outline" onClick={onCreate}><span style={{ fontSize: 14 }}>＋</span> Create Expense Head</button>
            </div>
            <div className="ne-wrap">
                <table className="ne-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Updated On</th>
                            <th>Updated By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r, i) => (
                            <tr key={i}>
                                <td>{r.name}</td>
                                <td><Badge status={r.status} /></td>
                                <td>{r.updatedOn}</td>
                                <td>{r.updatedBy}</td>
                                <td><button className="edit-btn" title="Edit">✏️</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpenseTable;
