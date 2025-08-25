import React, { useState } from 'react';
import ProjectsTable from '../components/ProjectsTable';
import { projects } from '../data/projects';
import './ProjectsPage.css';

const ProjectsPage = () => {
    const [showMock, setShowMock] = useState(false);

    return (
        <div className="page">
            <div className="container-1400">
                <ProjectsTable rows={projects} onAdd={() => setShowMock(true)} />
                {showMock && <div className="mock">Add Project (mock)</div>}
            </div>
        </div>
    );
};

export default ProjectsPage;
