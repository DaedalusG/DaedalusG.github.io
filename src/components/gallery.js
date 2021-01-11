import React, { useState } from "react"
import Img from "gatsby-image"

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
        (index === 0) ? setIndex(0) : setIndex(index - 1)
    }

    return (
        <div>
            <div>
                <Img fluid={image.childImageSharp.fluid} />
            </div>
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Gallery