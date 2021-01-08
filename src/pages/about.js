import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>In development</h1>
    <college>
      <h3>College</h3>
      <p>
        I've always been a bit of a day dreamer. For those that are into it my
        Meiers Briggs personality type (when last I took the test) is INFP. Suffice
        to say I grew up playing imagination games, things like D&D, and Shadowrun.
        This was my first real exposure to an abstract sysytem used to contain
        the objects of my imagination. By the time I made it to college I was,
        predictably, a bit of a romantic. I studied physics because it was (secret
        laws of the universe), then mathematics (because those were maybe deeper laws),
        and finally ended up with a philosophy degree.
      </p>
    </college>
    <automotive>
      <h3>Automotive</h3>
      <p>Little story about working in automotive</p>
    </automotive>
    <developer>
      <h3>Developer</h3>
      <p>Little bit about AppAcademy and graduation</p>
    </developer>
  </Layout>
)

export default About
