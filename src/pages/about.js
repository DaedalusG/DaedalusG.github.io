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
  /*a*/  `Here I am laboring inside a big old Ford. Learning to be a mechanic
  was a trial by fire for me. With no formal training, and only a years driving 
  experience, I was thrust into a shop environment where I had to do a little of
   everything.`,
  /*b*/  `I was so excited and proud when I got the chance to do big jobs. At my first shop,
  we worked on everything, it was a great way to learn, and always kept me on my toes.`,
  /*c*/  `Alright so again, its a lot of pictures of me and cars. Again, I was always working!
  I thought being a mechanic was going to afford me a better lifestyle than service industry work,
  but, while I was learning I worked for cheap, and actually held a restaurant job in the evening.`,
  /*d*/  `There absolutely was a lot of gratification in fixing cars. 
  It was hard work, but, at the end of the day I knew exactly how I was helping people. 
  That was great.`,
  /*e*/  `Eventually, I realized that I didn't want to fix cars long term.
  I was never going to get out from under my student loans on a mechanics income,
  and I was starting to miss those abstractions from college. I had always had an
  interest in computers, and decided maybe it was time to get serious.`
  ]
  const developerText = [
  /*a*/  `I went to AppAcademy's fullstack web development bootcamp.
  There I learned javascript, python, SQL, and react. Plus a bunch of other technologies.
  It was a great experience, and I made a ton of friends along the way. 
  We pair programmed every day, and studied hard for weekly exams.`,
  /*b*/  `My dog Bajor was happy I was always home over the six month bootcamp, but,
  he quickly learned that it wasn't going to be playtime all the time, and he often
  gave me these looks of dissapointment. I DO IT ALL FOR YOU BAJOR!`,
  /*c*/  `Here you can see me doing a proof of concept for my Lifebox app. I had wanted,
  to do my own Conway's Game of Life since I learned about it in college. Its totally
  the kind of thing that gets me excited about computers. I hope my future has more
  projects like this in store.`,
  /*d*/  `Remote graduation! I really love the people I've met in the technology community. I learn
  a lot through conversation, and pair programming through bootcamp was a ton of fun.
  I've always thought the idea of open source was cool, and I'm excited to
  meet new people, and continue learned about the world of web technologies. Hit me up!`,
  /*e*/  `The biggest shocker for me learning to code via bootcamp, was just how rough
  sitting all day could be. When I started I had a little wooden desk, and a little
  wooden chair. Coding all day was a totally different kind of tired than I was used to.
  A standing desk and another screen have been HUGE upgrades. When I make my first money
  in tech, I'll reward myself with a chair.`
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
      <div className="story-c">
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
      <div className="story-c">
        <div className="intro">
          <h3>Mechanic</h3>
          <p>
            When I graduated college I was worn out with abstractions and academia.
            I was feeling disillusioned and wanted to learn some practical skills.
            I had been learning to fix my car with a little help from a mechanic friend.
            Not sure how to use my philosophy degree, when my friend offered
            me a job at his little two bay shop, I jumped at the opportunity.
          </p>
        </div>
        <Gallery images={mechanicImages} text={mechanicText} />
      </div>
      <div className="story-c">
        <div className="intro">
          <h3>Developer</h3>
          <p>
            When covid-19 hit the shop I was working at furloughed me, I was broke
            and had a puppy to take care of, but I'd put away enough to get by for awhile.
            I sold some of my project cars and signed up for a coding bootcamp!
          </p>
        </div>
        <Gallery images={developerImages} text={developerText} />
      </div>
    </Layout>
  )
}

export default About
