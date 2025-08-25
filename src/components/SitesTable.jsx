import React from 'react';
import './SitesTable.css';

const SitesTable = ({ rows, onAdd }) => {
    return (
        <div>
            <div className="sites-header">
                <h2 className="sites-title">SITES</h2>
                <button className="btn-outline" onClick={onAdd}><span style={{ fontSize: 14 }}>＋</span> Add Site</button>
            </div>
            <div className="sites-wrap">
                <table className="sites-table">
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
                                <td><span className="badge-blue">Active</span></td>
                                <td>{r.updatedOn}</td>
                                <td>{r.updatedBy}</td>
                                <td><button className="icon-btn" title="Edit">✏️</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SitesTable;
