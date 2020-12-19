import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headshot from "../components/headshot"

import "./index.css"

const IndexPage = () => (
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
        <p>Get in touch with me on <a href={"https://www.linkedin.com/in/warren-gifford-he-him-b1141a1b4/"}>LinkedIn</a></p>
      </div>
    </article>
  </Layout>
)

export default IndexPage
