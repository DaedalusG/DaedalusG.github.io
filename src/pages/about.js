import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery.js"

import "./about.css"

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
  /*a*/  `I was late to driving and didn't actually get a lisence until midway through college,
    I could always be found biking between work and classes, even in snow! When I graduated,
    as a treat, a friend and I did a a bike tour from Portland to SF via HWY 101.`,
  /*b*/  `b`,
  /*c*/  `c`,
  /*d*/  `d`,
  /*e*/  `e`
  ]
  const mechanicText = [
  /*a*/  `a`,
  /*b*/  `b`,
  /*c*/  `c`,
  /*d*/  `d`,
  /*e*/  `e`
  ]
  const developerText = [
  /*a*/  `a`,
  /*b*/  `b`,
  /*c*/  `c`,
  /*d*/  `d`,
  /*e*/  `e`
  ]

  return (
    <Layout>
      <SEO title="About" />
      <div className="intro">
        <h3>Learn About Me!</h3>
        <p>
          Here I've chosen some pictures from what I will consider my adult life,
          and I've provided a little context for each so you can get to know me
          a little better.
        </p>
      </div>
      <div>
        <div className="intro">
          <h3>Student</h3>
          <p>
            As a student I was motivated by curiousity, and approached education
            idealistically rather than pragmatically. I studied physics, history, music theory, math,
            and philosophy. I was especially fond of the system science and
            philosophy departments at Portland State University.
          </p>
        </div>
        <Gallery images={studentImages} text={studentText} />
      </div>
      <div>
        <div className="intro">
          <h3>Mechanic</h3>
          <p></p>
        </div>
        <Gallery images={mechanicImages} text={mechanicText} />
      </div>
      <div>
        <div className="intro">
          <h3>Developer</h3>
          <p></p>
        </div>
        <Gallery images={developerImages} text={developerText} />
      </div>
    </Layout>
  )
}

export default About
