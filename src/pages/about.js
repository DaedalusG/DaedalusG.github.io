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
  /*b*/  `I loved taking notes in big journals with unruled paper, often with mixed
    subjects. This one was probably from an entry level computer science class, or maybe
    from Minds & Machines, a philosophy class on cognition through the lense of systems and modeling attempts.
     These notes are on turing universal machines.`,
  /*c*/  `Here we have one of my little studying nooks, I worked in the service  
  industry through college, and moved a lot. It was chaotic but fun. 
  I got through it all with coffee. This is of Vector Calculus course work.`,
  /*d*/  `Yes all my pictures are just books and notes. All I did in college was
   work and study. Any other pictures from this time wouldn't be appropriate for
    the internet. For the record please don't ask me about Heidegger. Phenomenology wasn't my thing.`,
  /*e*/  `I got my first car in my last year of college. It was a busted 1980 Toyota Corona,
  which is like a little japanese muscle car. It was always breaking down, and I was always broke, so
  I rode my bike a lot and tried to fix it myself as best I could. This a picture of its
  funky old carburetor, which I replaced with the help of a friend. `
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
