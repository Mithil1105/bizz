import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeTable from '../components/EmployeeTable';

const EmployeesPage = () => {
    return (
        <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
            <div className="breadcrumbs">
                <Link to="/">Home</Link> / Master / <strong>Employees</strong>
            </div>
            <EmployeeTable />
        </div>
    );
};

export default EmployeesPage;
