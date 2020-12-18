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
        <h1>Welcome consumers!</h1>
        <p>Welcome to my portfolio page</p>
        <p>Here you can find out a little bit about me, and see some of the projects I've worked on.</p>
        <Link to="/about/">About</Link> <br />
      </div>
    </article>
  </Layout>
)

export default IndexPage
