import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery.js"

const About = () => {

  const data = useStaticQuery(graphql`
      {
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
      }
      `);

  const studentImages = data.student.edges;
  const mechanicImages = data.mechanic.edges;

  const studentText = [
    `I've always been a bit of a day dreamer, and the last time I took a
          Meiers Briggs test, I scored INFP. I grew up playing imagination games,
          things like D&D, and Shadowrun.`,
    `This was my first real exposure to an
          abstract system used to contain the objects of my imagination. By the
          time I made it to college I was, predictably, a bit of a romantic.`,
    `I studied physics because it was (secret laws of the universe), then
          mathematics (because those were maybe deeper laws), and finally ended
          up with a BS of philosophy.`,
    `While taking philosophy classes, I had the
          opportunity to take a number of classes with system science faculty,
          and became fascinated with cognition, computational models of cognition,
          and just generally emergence and complexity theories.`,
    `During this time
          I also started learning about computers, and volunteering at Free Geek,
          a computer recycling nonprofit in Portland.`
  ]

  const test = ["test", "smest", "blesst", "pressesst", "blep"]

  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h3>College</h3>
        <Gallery images={studentImages} text={studentText} />
      </div>
      <div>
        <h3>Automotive</h3>
        <Gallery images={mechanicImages} text={test} />
        <p>
          Like I said, I'm a bit of a romantic, and after working my way through
          college in resteraunts and grocery stores, I decided I wanted to take
          advantage of my youth, and do some work that was more concrete, and less abstract.
          I had recently aquired my first car, a 1980 Toyota Corona, in desperate need
          of repair. A mechanic friend of mine let me hang around while fixing it.
          He was about to open his own shop, and by the time I graduated college,
          he had a job waiting for me. Learning to be a mechanic was engaging, the
          work was fun, and different everyday. After getting some certifications,
          I sought out more lucrative roles at more established companies, but, after
          a few years as a mechanic I began to miss thinking abstractly, and being around
          like minded day dreamers. I still sometimes miss working on cars sometimes,
          and would love to have a little home shop someday.
      </p>
      </div>
      <div>
        <h3>Developer</h3>
        <p>
          When 2020 hit I was furloughed from the shop I was working at until our
          customer count got back to normal, but I was already thinking about bootcamps.
          Since college software development had always seemed like my end career, and
          automotive work was just a little detour. I decided to enroll in AppAcademy's
          fullstack web development bootcamp. Over the next six months I dodged covid-19,
          and built on the little bits of programming knowledge I picked up as a hobbyist
          and in college. Now I've cast out into the world wide web, and I'm seeking my
          first role as a software developer.
      </p>
      </div>
    </Layout>
  )
}

export default About
