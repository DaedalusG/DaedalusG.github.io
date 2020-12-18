import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"

const Projects = () => {

    const data = useStaticQuery(graphql`
        {
            allProjectsJson {
                edges {
                    node {
                        title
                        slug
                        live
                        github
                        description
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const projects = data.allProjectsJson.edges;

    return (
        <Layout>
            <SEO title="Projects" />
            {projects.map(({ node: project }) => {
                const title = project.title;
                const description = project.description;
                const live = project.live;
                const github = project.github;
                const imageData = project.image.childImageSharp.fluid;
                return (
                    <ProjectCard
                        title={title}
                        description={description}
                        imageData={imageData}
                        live={live}
                        github={github}
                    />

                )
            })}
        </Layout>
    )
}

export default Projects