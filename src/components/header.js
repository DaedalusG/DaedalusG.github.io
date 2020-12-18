import { Link } from "gatsby"
import React from "react"
import PuzzlePiece from "./puzzle-piece"
import LinkedIn from "./linkedin"
import GitHub from "./github"

import "./styles/header.css"

const Header = () => {
  return (
    <header>
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
      </h2>
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
          <GitHub />
        </a>
      </div>
    </header>
  )
}

export default Header
