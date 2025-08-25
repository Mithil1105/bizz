import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, items }) => (
    <div className="card card-padding">
        <h3 className="section-title">{title}</h3>
        <ul className="section-list">
            {items.map((it) => (
                <li key={it}>
                    {it === 'Employee' ? (
                        <Link className="list-link" to="/employees">→ {it}</Link>
                    ) : it === 'Amount Allocation' ? (
                        <Link className="list-link" to="/amount-allocation">→ {it}</Link>
                    ) : it === 'Expense Claim' ? (
                        <Link className="list-link" to="/expense-claim">→ {it}</Link>
                    ) : it === 'Claim Verification' ? (
                        <Link className="list-link" to="/claim-verification">→ {it}</Link>
                    ) : it === 'Claim Approval BY HO' ? (
                        <Link className="list-link" to="/claim-approval">→ {it}</Link>
                    ) : it === 'Employee Claim Report' ? (
                        <Link className="list-link" to="/employee-expense-report">→ {it}</Link>
                    ) : it === 'Company Dashboard' ? (
                        <Link className="list-link" to="/company-dashboard">→ {it}</Link>
                    ) : (
                        <a className="list-link" href="#">→ {it}</a>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

const DashboardHome = () => {
    return (
        <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
            <h1 className="heading-primary">WELCOME TO DIGITAL WORLD</h1>
            <div className="section-grid">
                <Section title="Master" items={["Employee", "Expense Type", "Project", "Site"]} />
                <Section title="Transaction" items={["Amount Allocation", "Expense Claim", "Claim Verification", "Claim Approval BY HO"]} />
                <Section title="Report" items={["Employee Claim Report", "Employee Amount Allocation", "Company Dashboard", "Employee Dashboard"]} />
            </div>
        </div>
    );
};

export default DashboardHome;
