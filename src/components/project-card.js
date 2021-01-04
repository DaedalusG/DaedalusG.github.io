import React from 'react';
import Img from 'gatsby-image';

import './styles/project-card.css';

const ProjectCard = ({ title, description, technologies, imageData, live, github }) => {
    return (
        <projectcard>
            <h1>{title}</h1>
            <div className="image-container">
                <a href={`${live}`}>
                    <Img fluid={imageData} alt={title} />
                </a>
            </div>
            <div className="technologies">
                {technologies.map((technology) => {
                    return (
                        <h5>{technology}</h5>
                    )
                })}
            </div>
            <p>{description}</p>
            <div>
                <a
                    href={`${github}`}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                >
                    GitHub Repo &rarr;
                        </a>
                <a
                    href={`${live}`}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                >
                    Live Site &rarr;
                        </a>
            </div>
        </projectcard>
    )
}

export default ProjectCard