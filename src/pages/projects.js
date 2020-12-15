import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPreview from "../components/project-preview"

const Projects = () => {
    return (
        <Layout>
            <SEO title="Projects" />
            <h1>This is the projects page</h1>
            <h3>Lifebox</h3>
            <p>The section on LifeBox with links and gif</p>
            <h3>Chatter</h3>
            <p>The section on Chatter with links and gif</p>
            <h3>NoiseWave</h3>
            <p>The section on NoiseWave with links and gif</p>
        </Layout>
    )
}

export default Projects