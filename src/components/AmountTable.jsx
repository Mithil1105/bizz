import React from 'react';
import './AmountTable.css';

const AmountTable = ({ onNew }) => {
    return (
        <div>
            <div className="page-header">
                <h2 className="page-title">AMOUNT ALLOCATION</h2>
                <button className="btn-new" onClick={onNew}><span style={{ fontSize: 14 }}>＋</span> New</button>
            </div>
            <div className="aa-table-wrap">
                <table className="aa-table">
                    <thead>
                        <tr>
                            <th>Allocation Date</th>
                            <th>Employee</th>
                            <th>Expense Type</th>
                            <th>LPO Number</th>
                            <th>Cash Issued</th>
                            <th>Updated On</th>
                            <th>Updated By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={8} style={{ textAlign: 'center', color: '#6b7280' }}>No Data Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AmountTable;
