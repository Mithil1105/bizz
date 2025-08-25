import React from 'react';
import './ChartCard.css';

const ChartCard = ({ title, subtitle, children }) => {
    return (
        <div className="chart-card">
            <h3 className="chart-title">{title}</h3>
            {subtitle ? <div className="chart-subtitle">{subtitle}</div> : null}
            <div className="chart-canvas">
                {children}
            </div>
            <div className="chart-icons">⬇️ 🔍 🔄 ⓘ</div>
        </div>
    );
};

export default ChartCard;
