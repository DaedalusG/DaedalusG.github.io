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
        allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "technologies"}}) {
          edges {
            node {
              base
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        allProjectsJson {
          edges {
            node {
              title
              slug
              live
              github
              description
              technologies
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
  const technologies = data.allFile.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <greeting>
        <h1>Welcome to my portfolio!</h1>
        {/* <p>Here you can access links to my projects, and learn a little bit about my interests and background. This site was developed with Gatsby</p> */}
        <div className="headshot-c">
          <Headshot />
        </div>
        <p>My name is Warren, I write code, research new technologies, and hangout with my dog Bajor.</p>
        <p>Get in touch with me on <a href={"https://www.linkedin.com/in/warren-gifford-he-him-b1141a1b4/"}>LinkedIn</a>, or shoot me an <a href={"mailto:warrenbruceg@gmail.com"}>email</a>.</p>
        <h2 className='direction'>Behold my technologies</h2>
        <div className="technologies">

        </div>
        <div className="right">
          <p>Currently I get excited about deFi, NLP, progressive web apps, infosec, and pretty much everything else. I'm learning more all the time, and if you want you can keep up with me here. </p>
        </div>
      </greeting>
      <h2 className="direction">See my most recent projects below </h2>
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
