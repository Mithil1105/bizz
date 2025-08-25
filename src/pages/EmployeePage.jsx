import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeTable from '../components/EmployeeTable';
import './EmployeePage.css';

const mockEmployees = [
    { name: 'Admin User', manager: '', role: 'Head Office', city: 'ahmadabad', status: 'Active', updatedOn: '2025-08-18T04:20:59', updatedBy: 'Admin User' },
    { name: 'divyangini patel', manager: 'ketan mistry', role: 'Head Office', city: '', status: 'Active', updatedOn: '2025-08-23T01:34:41', updatedBy: 'Admin User' },
    { name: 'kartik mistry', manager: 'ketan mistry', role: 'Team Member', city: '', status: 'Active', updatedOn: '2025-08-18T04:21:40', updatedBy: 'Admin User' },
    { name: 'ketan mistry', manager: 'Admin User', role: 'Engineer', city: '', status: 'Active', updatedOn: '2025-08-23T01:34:53', updatedBy: 'Admin User' },
];

const EmployeePage = () => {
    const [showMock, setShowMock] = useState(false);

    return (
        <div className="page">
            <div className="container-1400">
                <div className="breadcrumbs"><Link to="/">Home</Link> / Master / <strong>Employees</strong></div>
                <EmployeeTable employees={mockEmployees} onNew={() => setShowMock(true)} />
                {showMock && (
                    <div className="modal-mock">New Employee (mock)</div>
                )}
            </div>
        </div>
    );
};

export default EmployeePage;
