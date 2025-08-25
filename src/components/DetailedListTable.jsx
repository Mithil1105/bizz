import React from 'react';
import './DetailedListTable.css';

const DetailedListTable = () => {
    const columns = [
        'Bill Date', 'Type of Expense', 'Bill No', 'LPO#', 'Opening Balance', 'Allocated Amount', 'Closing Balance', 'Amount', 'Notes'
    ];
    const emptyRows = 5;

    return (
        <div>
            <div className="dl-title">Detailed List</div>
            <div className="dl-wrap">
                <table className="dl-table">
                    <thead>
                        <tr>
                            {columns.map((c) => (<th key={c}>{c}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: emptyRows }).map((_, i) => (
                            <tr key={i}>
                                {columns.map((c) => (<td key={c}></td>))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DetailedListTable;
