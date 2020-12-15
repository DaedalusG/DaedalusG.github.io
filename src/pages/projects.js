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
            {projects.map(({ node: project }) => {
                const title = project.title;
                const description = project.description;
                const slug = project.slug;
                const imageData = project.image.childImageSharp.fluid;
                return (
                    <ProjectPreview
                        title={title}
                        description={description}
                        imageData={imageData}
                        slug={slug}
                    />

                )
            })}
        </Layout>
    )
}

export default Projects