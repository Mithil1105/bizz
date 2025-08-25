import React from 'react';
import ExpenseReportFilter from '../components/ExpenseReportFilter';
import DetailedListTable from '../components/DetailedListTable';
import SummaryTable from '../components/SummaryTable';
import './EmployeeExpenseReportPage.css';

const EmployeeExpenseReportPage = () => {
    return (
        <div className="page">
            <div className="container-1400">
                <ExpenseReportFilter />
                <DetailedListTable />
                <SummaryTable />
            </div>
        </div>
    );
};

export default EmployeeExpenseReportPage;
