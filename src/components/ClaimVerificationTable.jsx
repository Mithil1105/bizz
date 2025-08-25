import React from 'react';
import './ClaimVerificationTable.css';

const ClaimVerificationTable = () => {
    return (
        <div>
            <div className="cvt-header">
                <h2 className="cvt-title">CLAIM VERIFICATION LIST</h2>
            </div>
            <div className="cvt-wrap">
                <table className="cvt">
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
                        {/* Example row structure:
            <tr>
              <td>John</td>
              <td>Travel</td>
              <td>123</td>
              <td>18-08-2025</td>
              <td>250.00</td>
              <td>Pending</td>
              <td>Pending</td>
              <td>20-08-2025</td>
              <td><button>👁️</button></td>
            </tr>
            */}
                        <tr>
                            <td colSpan={9} style={{ textAlign: 'center', color: '#6b7280' }}>No Data Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClaimVerificationTable;
