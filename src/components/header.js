import { Link } from "gatsby"
import React from "react"
import PuzzlePiece from "./puzzle-piece"

import "./styles/header.css"

const Header = () => {
  return (
    <header>
      <h2>
        <Link className="link" to="/">
          <div className={"header-puzzle-piece"}>
            <PuzzlePiece />
          </div>
        </Link>
        <divider />
      </h2>
      <h2>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <divider />
        <Link className="link" to="/about">
          About
        </Link>
      </h2>
    </header>
  )
}

export default Header
