import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardHome from './pages/DashboardHome';
import EmployeesPage from './pages/EmployeePage';
import AmountAllocationPage from './pages/AmountAllocationPage';
import ExpenseClaimPage from './pages/ExpenseClaimPage';
import ClaimApprovalPage from './pages/ClaimApprovalPage';
import ClaimVerificationPage from './pages/ClaimVerificationPage';
import EmployeeExpenseReportPage from './pages/EmployeeExpenseReportPage';
import CompanyDashboard from './pages/CompanyDashboard';
import NaturesOfExpensePage from './pages/NaturesOfExpensePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/natures-of-expense" element={<NaturesOfExpensePage />} />
          <Route path="/amount-allocation" element={<AmountAllocationPage />} />
          <Route path="/expense-claim" element={<ExpenseClaimPage />} />
          <Route path="/claim-verification" element={<ClaimVerificationPage />} />
          <Route path="/claim-approval" element={<ClaimApprovalPage />} />
          <Route path="/employee-expense-report" element={<EmployeeExpenseReportPage />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
