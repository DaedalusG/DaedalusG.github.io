import React from 'react';
import Image from 'gatsby-image';

import './styles/project-card.css';

const ProjectCard = ({ title, description, imageData, live, github }) => {
    return (
        <div className="project-card">
            <div style={{
                width: `360px`
            }}>
                <a href={`${live}`}>
                    <Image fluid={imageData} alt={title} />
                </a>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <a
                    href={`${github}`}
                    style={{ textDecoration: `none`, color: `darkgreen` }}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                >
                    GitHub Repo &rarr;
                </a>
            </div>
        </div>
    )
}

export default ProjectCard