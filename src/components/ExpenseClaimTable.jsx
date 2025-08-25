import React from 'react';
import './ExpenseClaimTable.css';

const ExpenseClaimTable = ({ rows, onAdd }) => {
    return (
        <div>
            <div className="ec-header">
                <h2 className="ec-title">EXPENSE CLAIM</h2>
                <button className="btn-add" onClick={onAdd}><span style={{ fontSize: 14 }}>＋</span> Add Bill</button>
            </div>
            <div className="ec-table-wrap">
                <table className="ec-table">
                    <thead>
                        <tr>
                            <th>Expense Type</th>
                            <th>LPO Number</th>
                            <th>Cash Received</th>
                            <th>Bills Uploaded</th>
                            <th>Balance</th>
                            <th>Bill Attached</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r, i) => (
                            <tr key={i}>
                                <td style={r.isTotal ? { fontWeight: 600 } : undefined}>{r.expenseType}</td>
                                <td>{r.lpoNumber || ''}</td>
                                <td>{r.cashReceived}</td>
                                <td>{r.billsUploaded}</td>
                                <td>{r.balance}</td>
                                <td>{r.billAttached}</td>
                                <td>{r.isTotal ? '' : (<button className="eye-btn" title="View">👁️</button>)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpenseClaimTable;
