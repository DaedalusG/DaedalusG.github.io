import React from 'react';
import Image from 'gatsby-image';

// import './project-card.css';

const ProjectCard = ({ slug, title, description, imageData, url }) => {
    return (
        <div className="project-card">
            <a href={`${url}`}>
                <Image fluid={imageData} alt={title} />
            </a>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={`${url}`}>View this project &rarr;</a>
        </div>
    )
}

export default ProjectCard