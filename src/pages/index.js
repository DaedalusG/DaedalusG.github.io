import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headshot from "../components/headshot"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome consumers!</h1>
    <Headshot style={{ width: `500px` }} />
    <p>Welcome to my portfolio page</p>
    <p>Here you can find out a little bit about me, and see some of the projects I've worked on.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/about/">About</Link> <br />
  </Layout>
)

export default IndexPage
