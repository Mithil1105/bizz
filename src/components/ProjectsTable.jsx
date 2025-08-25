import React from 'react';
import './ProjectsTable.css';

const ProjectsTable = ({ rows, onAdd }) => {
    return (
        <div>
            <div className="prj-header">
                <h2 className="prj-title">PROJECTS</h2>
                <button className="btn-outline" onClick={onAdd}><span style={{ fontSize: 14 }}>＋</span> Add Project</button>
            </div>
            <div className="prj-wrap">
                <table className="prj-table">
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

export default ProjectsTable;
