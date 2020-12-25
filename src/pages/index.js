import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headshot from "../components/headshot"
import ProjectCard from "../components/project-card"


import "./index.css"

const IndexPage = () => {
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
      <SEO title="Home" />
      <article>
        <div className="left">
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Headshot style={{ width: `500px` }} />
          </div>
        </div>
        <div className="right">
          <h1>Welcome to my portfolio!</h1>
          <p>Hey my names Warren, I'm a software developer.</p>
          <p>This page is intended as a way to get to know me a little better.</p>
          <p>Here you can access links to my projects, and learn a little bit about my interests and background.</p>
          <p>This site was developed with Gatsby</p>
          <p>Get in touch with me on <a href={"https://www.linkedin.com/in/warren-gifford-he-him-b1141a1b4/"}>LinkedIn</a>, or shoot me an <a href={"mailto:warrenbruceg@gmail.com"}>email</a>.</p>
        </div>
      </article>
      <h2 className="projects-head">See my most recent projects below </h2>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const live = project.live;
        const github = project.github;
        const technologies = project.technologies
        const imageData = project.image.childImageSharp.fluid;
        return (
          <ProjectCard
            title={title}
            description={description}
            technologies={technologies}
            imageData={imageData}
            live={live}
            github={github}
          />

        )
      })}
    </Layout>
  )
}

export default IndexPage
