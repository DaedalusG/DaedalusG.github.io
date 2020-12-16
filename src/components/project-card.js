import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

// import './project-card.css';

const ProjectCard = ({ slug, title, description, imageData, url }) => {
    return (
        <div className="project-card">
            <a href={`${url}`}>
                <Image fluid={imageData} alt={title} />
            </a>
            <h2>
                <Link to={`/${slug}/`}>{title}</Link>
            </h2>
            <p>{description}</p>
            <Link to={`/${slug}/`}>View this project &rarr;</Link>
        </div>
    )
}

export default ProjectCard