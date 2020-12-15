import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPreview from "../components/project-preview"

const Projects = () => {

    const data = useStaticQuery(graphql`
        {
            allProjectsJson {
                edges {
                    node {
                        title
                        slug
                        url
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
            <h1>This is the projects page</h1>
            <h3>Lifebox</h3>
            {projects.map(({ node: project }) => {
                const title = project.title;
                const description = project.description;
                const slug = project.slug;
                const imageData = project.image.childImageSharp.fluid;
                return (
                    <ProjectPreview
                        title={ }
                        description={ }
                        imageData={ }
                        slug={ }
                    />

                )
            })}
            <p>The section on LifeBox with links and gif</p>
            <h3>Chatter</h3>
            <p>The section on Chatter with links and gif</p>
            <h3>NoiseWave</h3>
            <p>The section on NoiseWave with links and gif</p>
        </Layout>
    )
}

export default Projects