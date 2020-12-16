import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image'

const ProjectCard = ({ slug, title, description, imageData }) => {
    return (
        <div className="project-preview">
            <Link to={`/${slug}/`}>
                <Image fluid={imageData} alt={title} />
            </Link>
            <h2>
                <Link to={`/${slug}/`}>{title}</Link>
            </h2>
            <p>{description}</p>
            <Link to={`/${slug}/`}>View this project &rarr;</Link>
        </div>
    )
}

export default ProjectCard