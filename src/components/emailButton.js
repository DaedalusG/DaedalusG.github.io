import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EmailButton = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "email.png" }) {
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
        <a href={"mailto:warrenbruceg@gmail.com"}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </a>
    )
}

export default EmailButton