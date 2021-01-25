import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './styles/arrow.css'

const ArrowButton = ({ direction }) => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Picture not found</div>
    }

    return (
        <div className={`${direction}`}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
    )
}

export default ArrowButton