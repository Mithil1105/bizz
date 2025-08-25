import React from 'react';
import { IoNotificationsOutline, IoPower } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container-1400 navbar-row navbar-top">
                <Link to="/" className="nav-brand">AL OTBI CONT. & GEN. MAINT. EST.</Link>
                <div className="nav-right">
                    <button className="icon-btn" aria-label="Notifications"><IoNotificationsOutline size={18} /></button>
                    <button className="icon-btn" aria-label="Logout"><IoPower size={18} /></button>
                </div>
            </div>
            <div className="container-1400 navbar-row navbar-bottom">
                <nav className="subnav">
                    <div className="dd">
                        <button className="dd-btn">Master ▾</button>
                        <div className="menu">
                            <NavLink to="/employees">Employee</NavLink>
                            <NavLink to="/natures-of-expense">Expense Type</NavLink>
                            <span>Project</span>
                            <span>Site</span>
                        </div>
                    </div>
                    <div className="dd">
                        <button className="dd-btn">Transaction ▾</button>
                        <div className="menu">
                            <NavLink to="/amount-allocation">Amount Allocation</NavLink>
                            <NavLink to="/expense-claim">Expense Claim</NavLink>
                            <NavLink to="/claim-verification">Claim Verification</NavLink>
                            <NavLink to="/claim-approval">Claim Approval BY HO</NavLink>
                        </div>
                    </div>
                    <div className="dd">
                        <button className="dd-btn">Report ▾</button>
                        <div className="menu">
                            <NavLink to="/employee-expense-report">Employee Claim Report</NavLink>
                            <span>Employee Amount Allocation</span>
                            <NavLink to="/company-dashboard">Company Dashboard</NavLink>
                            <span>Employee Dashboard</span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
