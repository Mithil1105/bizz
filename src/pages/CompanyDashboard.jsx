import React from 'react';
import ChartCard from '../components/ChartCard';
import './CompanyDashboard.css';

const CompanyDashboard = () => {
    return (
        <div className="page">
            <div className="container-1400">
                <h1 className="page-title">Company Dashboard</h1>
                <div className="grid">
                    <ChartCard title="Amount Allocation Vs Bills Uploaded" subtitle="(Included only approved bills in calculation)">
                        <svg viewBox="0 0 320 200" width="100%" height="100%">
                            <rect x="0" y="0" width="320" height="200" fill="#ffffff" />
                            {/* Axes */}
                            <line x1="40" y1="10" x2="40" y2="170" stroke="#e5e7eb" />
                            <line x1="40" y1="170" x2="300" y2="170" stroke="#e5e7eb" />
                            {/* Bars for months Jan..Aug minimal */}
                            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                <g key={i}>
                                    <rect x={60 + i * 30} y={150} width="10" height="20" fill="#93c5fd" />
                                    <rect x={72 + i * 30} y={160} width="10" height="10" fill="#86efac" />
                                </g>
                            ))}
                            {/* August tall */}
                            <rect x="270" y="50" width="12" height="120" fill="#1976d2" />
                            <rect x="286" y="90" width="12" height="80" fill="#16a34a" />
                            <text x="260" y="185" fontSize="10" fill="#6b7280">Aug</text>
                            <text x="200" y="25" fontSize="10" fill="#1976d2">Allocated 3000</text>
                            <text x="200" y="40" fontSize="10" fill="#16a34a">Uploaded 1800</text>
                        </svg>
                    </ChartCard>

                    <ChartCard title="Employee Wise Top Balance" subtitle="(Included only approved bills in calculation)">
                        <svg viewBox="0 0 320 200" width="100%" height="100%">
                            <rect x="0" y="0" width="320" height="200" fill="#ffffff" />
                            <line x1="40" y1="10" x2="40" y2="170" stroke="#e5e7eb" />
                            <line x1="40" y1="170" x2="300" y2="170" stroke="#e5e7eb" />
                            {/* Bars */}
                            <rect x="60" y="70" width="40" height="100" fill="#1976d2" />
                            <rect x="120" y="150" width="40" height="20" fill="#1976d2" />
                            <rect x="180" y="160" width="40" height="10" fill="#1976d2" />
                            <rect x="240" y="155" width="40" height="15" fill="#1976d2" />
                            {/* Labels */}
                            <text x="60" y="185" fontSize="10" fill="#6b7280">divyangini patel</text>
                            <text x="120" y="185" fontSize="10" fill="#6b7280">kartik mistry</text>
                            <text x="180" y="185" fontSize="10" fill="#6b7280">Admin User</text>
                            <text x="240" y="185" fontSize="10" fill="#6b7280">ketan mistry</text>
                            {/* Values */}
                            <text x="65" y="65" fontSize="10" fill="#111827">1000</text>
                            <text x="125" y="145" fontSize="10" fill="#111827">191</text>
                            <text x="185" y="155" fontSize="10" fill="#111827">50</text>
                            <text x="245" y="150" fontSize="10" fill="#111827">80</text>
                        </svg>
                    </ChartCard>

                    <ChartCard title="Amount Allocation based on Expense Type" subtitle="(Included only approved bills in calculation)">
                        <svg viewBox="0 0 320 200" width="100%" height="100%">
                            <defs>
                                <radialGradient id="g1" cx="50%" cy="50%" r="60%">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="100%" stopColor="#1976d2" />
                                </radialGradient>
                            </defs>
                            <circle cx="150" cy="100" r="70" fill="#e5e7eb" />
                            {/* Fake pie slices: arcs drawn with paths */}
                            <path d="M150,100 L150,30 A70,70 0 0,1 215,60 Z" fill="#1976d2" />
                            <path d="M150,100 L215,60 A70,70 0 0,1 210,150 Z" fill="#10b981" />
                            <path d="M150,100 L210,150 A70,70 0 0,1 90,140 Z" fill="#f59e0b" />
                            <path d="M150,100 L90,140 A70,70 0 0,1 120,40 Z" fill="#ef4444" />
                            <text x="230" y="50" fontSize="10" fill="#6b7280">Food</text>
                            <text x="230" y="65" fontSize="10" fill="#6b7280">FUEL</text>
                            <text x="230" y="80" fontSize="10" fill="#6b7280">Marketing</text>
                        </svg>
                    </ChartCard>

                    <ChartCard title="Billed Amount based on Expense Type" subtitle="(Included only approved bills in calculation)">
                        <svg viewBox="0 0 320 200" width="100%" height="100%">
                            <circle cx="150" cy="100" r="70" fill="#e5e7eb" />
                            <path d="M150,100 L150,30 A70,70 0 0,1 230,110 Z" fill="#16a34a" />
                            <path d="M150,100 L230,110 A70,70 0 0,1 150,170 Z" fill="#1976d2" />
                            <path d="M150,100 L150,170 A70,70 0 0,1 110,50 Z" fill="#f59e0b" />
                            <path d="M150,100 L110,50 A70,70 0 0,1 150,30 Z" fill="#ef4444" />
                            <text x="230" y="50" fontSize="10" fill="#6b7280">FUEL (largest)</text>
                        </svg>
                    </ChartCard>
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;
