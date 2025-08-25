import React from 'react';
import './EmployeeTable.css';

const Badge = ({ children }) => (
    <span className="badge-blue">{children}</span>
);

const EmployeeTable = ({ employees, onNew }) => {
    return (
        <div className="emp-card">
            <div className="emp-card-header">
                <h2 className="emp-title">EMPLOYEE</h2>
                <button className="btn-primary" onClick={onNew}>
                    <span style={{ fontSize: 16 }}>＋</span>
                    New Employee
                </button>
            </div>
            <div className="table-wrap">
                <table className="emp-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reporting Manager</th>
                            <th>Role</th>
                            <th>City Name</th>
                            <th>Status</th>
                            <th>Updated On</th>
                            <th>Updated By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, idx) => (
                            <tr key={idx}>
                                <td>{emp.name}</td>
                                <td>{emp.manager || '-'}</td>
                                <td>{emp.role}</td>
                                <td>{emp.city || '-'}</td>
                                <td><Badge>Active</Badge></td>
                                <td>{emp.updatedOn}</td>
                                <td>{emp.updatedBy}</td>
                                <td>
                                    <div className="actions">
                                        <button className="icon-square" title="Edit">✏️</button>
                                        <button className="icon-square" title="User">👤</button>
                                        <button className="icon-square" title="Users">👥</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeTable;
