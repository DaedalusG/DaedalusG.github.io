import { Link } from "gatsby"
import React from "react"
import PuzzlePiece from "./puzzle-piece"
import LinkedIn from "./LinkedIn"
import GitHub from "./GitHub"

import "./styles/header.css"

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link className="link" to="/">
          <div className={"header-icon"}>
            <PuzzlePiece />
          </div>
        </Link>
        <h2>
          <divider />
          <Link className="link" to="/projects">
            Projects
          </Link>
          <divider />
          <Link className="link" to="/about">
            About
          </Link>
          <divider />
          <a
            className="link"
            href={"https://docs.google.com/document/d/1BkSH78dngxDJ6Orl9NjTnjH6z9l_GLE770Tv4IXvHdA/edit?usp=sharing"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Resume
          </a>
        </h2>
      </div>
      <div className="header-container">
        <div className="header-icon">
          <a
            href={"https://www.linkedin.com/in/warren-gifford-he-him-b1141a1b4/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <LinkedIn />
          </a>
        </div>
        <div className="header-icon">
          <a
            href={"https://github.com/DaedalusG"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {/* <GitHub /> */}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
