import React, { useState } from "react"
import Img from "gatsby-image"
import { node } from "prop-types";

const Gallery = ({ images }) => {
    const [index, setIndex] = useState(0);

    console.log(images)

    return (
        <>
            {
                images.map(({ node: image }) => {
                    return (
                        <Img fluid={image.childImageSharp.fluid} />
                    )
                })
            }
        </>
    )
}

export default Gallery