import { Link } from "gatsby"
import React from "react"

import "./styles/header.css"

const Header = () => {
  return (
    <header>
      <h2>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </h2>
    </header>
  )
}

export default Header
