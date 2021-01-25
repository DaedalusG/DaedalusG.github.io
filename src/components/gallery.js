import React, { useState } from "react"
import Img from "gatsby-image"

import ArrowButton from "./arrowButton.js"

import './styles/gallery.css'

const Gallery = ({ images, text }) => {
    const [index, setIndex] = useState(0);
    const length = images.length - 1;

    let image = images[index].node
    let indexText = text[index]

    const handleNext = () => {
        (index === length) ? setIndex(0) : setIndex(index + 1)
    }
    const handlePrevious = () => {
        (index === 0) ? setIndex(length) : setIndex(index - 1)
    }

    return (
        <div className="gallery-c">
            <div className="gallery-images">
                <Img fluid={image.childImageSharp.fluid} />
            </div>
            <div className="buttons-c">
                <button onClick={handlePrevious}>
                    <ArrowButton direction="left" />
                </button>
                <button onClick={handleNext}>
                    <ArrowButton direction="right" />
                </button>
            </div>
            <p className="story-text">{indexText}</p>
        </div>
    )
}

export default Gallery