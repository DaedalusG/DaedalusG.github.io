import React from 'react';
import Image from 'gatsby-image';

import './styles/project-card.css';

const ProjectCard = ({ title, description, technologies, imageData, live, github }) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a href={`${live}`}>
                    <Image fluid={imageData} alt={title} />
                </a>
            </div>
            <div className="info">
                <h2>{title}</h2>
                <p>{description}</p>
                {/* {technologies.map((technology) => {
                    return (
                        <li>{technology}</li>
                    )
                })} */}
                <div>
                    <a
                        href={`${github}`}
                        style={{ textDecoration: `none`, color: `darkgreen`, marginRight: `16px` }}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        GitHub Repo &rarr;
                    </a>
                    <a
                        href={`${live}`}
                        style={{ textDecoration: `none`, color: `darkgreen`, marginRight: `16px` }}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Live Site &rarr;
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard