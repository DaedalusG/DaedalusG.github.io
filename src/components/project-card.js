import React from 'react';
import Img from 'gatsby-image';

import './styles/project-card.css';

const ProjectCard = ({ title, description, technologies, imageData, live, github }) => {
    return (
        <projectcard>
            <div className="image-container">
                <a href={`${live}`}>
                    <Img fluid={imageData} alt={title} />
                </a>
            </div>
            <div className="info">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="technologies">
                    {technologies.map((technology) => {
                        return (
                            <h5>{technology}</h5>
                        )
                    })}
                </div>
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
            </div>
        </projectcard>
    )
}

export default ProjectCard