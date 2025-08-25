import React from 'react';
import './ClaimApprovalTable.css';

const ClaimApprovalTable = () => {
    return (
        <div>
            <div className="cap-header">
                <h2 className="cap-title">CLAIM APPROVAL LIST</h2>
            </div>
            <div className="cap-table-wrap">
                <table className="cap-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Expense Type</th>
                            <th>LPO Number</th>
                            <th>Bill Date</th>
                            <th>Bill Amount</th>
                            <th>Engineer Approval</th>
                            <th>HO Approval</th>
                            <th>Submitted On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={9} style={{ textAlign: 'center', color: '#6b7280' }}>No Data Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClaimApprovalTable;
