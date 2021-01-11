import React, { useState } from "react"
import Img from "gatsby-image"

import './styles/gallery.css'

const Gallery = ({ images }) => {
    const [index, setIndex] = useState(0);
    const length = images.length - 1;
    console.log(length)

    let image = images[index].node
    console.log('index--> ', index)
    console.log(image)

    const handleNext = () => {
        (index === length) ? setIndex(0) : setIndex(index + 1)
    }
    const handlePrevious = () => {
        (index === 0) ? setIndex(length) : setIndex(index - 1)
    }

    return (
        <gallery>
            <div className="gallery-images">
                <Img fluid={image.childImageSharp.fluid} />
            </div>
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </gallery>
    )
}

export default Gallery