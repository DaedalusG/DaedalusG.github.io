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
        <LinkedIn />
      </div>
      <div className="header-icon">
        <GitHub />
      </div>
    </header>
  )
}

export default Header
