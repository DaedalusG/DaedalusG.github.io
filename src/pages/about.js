import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery.js"

const About = () => {

  const data = useStaticQuery(graphql`
      {
        student: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "student"}}) {
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
        mechanic: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "mechanic"}}) {
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
        developer: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "developer"}}) {
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
      }
      `);

  const studentImages = data.student.edges;
  const mechanicImages = data.mechanic.edges;
  const developerImages = data.developer.edges;

  const studentText = [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`
  ]
  const mechanicText = [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`
  ]
  const developerText = [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`
  ]

  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h3>College</h3>
        <Gallery images={studentImages} text={studentText} />
      </div>
      <div>
        <h3>Automotive</h3>
        <Gallery images={mechanicImages} text={mechanicText} />
      </div>
      <div>
        <h3>Developer</h3>
        <Gallery images={developerImages} text={developerText} />
      </div>
    </Layout>
  )
}

export default About
