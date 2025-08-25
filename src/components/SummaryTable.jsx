import React from 'react';
import './SummaryTable.css';

const SummaryTable = () => {
    return (
        <div>
            <div className="sum-title">Summary</div>
            <div className="sum-wrap">
                <table className="sum-table">
                    <thead>
                        <tr>
                            <th>Type of Expense</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center', color: '#6b7280' }}>No Data Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SummaryTable;
