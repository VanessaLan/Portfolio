import React from 'react';

const ProjectCard = ({source, alt, title}) => {
    return (
        <div className="project_card">
            <img src={source} alt={alt} />
            <h4>{title}</h4>
        </div>
    );
};

export default ProjectCard;
