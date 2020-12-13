import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome consumers!</h1>
    <ProjectCard style={{ width: `500px` }} />
    <p>Welcome to my portfolio page</p>
    <p>My gatsby-cli is messed up. I think its an issue with my nvm prefix</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
