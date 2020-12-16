import React from 'react';
import Image from 'gatsby-image';

import './project-card.css';

const ProjectCard = ({ title, description, imageData, url }) => {
    return (
        <div className="project-card">
            <div style={{
                width: `360px`
            }}>
                <a href={`${url}`}>
                    <Image fluid={imageData} alt={title} />
                </a>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={`${url}`}>View this project &rarr;</a>
            </div>
        </div>
    )
}

export default ProjectCard