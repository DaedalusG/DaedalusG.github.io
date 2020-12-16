import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `darkgreen`,
      marginBottom: `1.15rem`,
    }}
  >
    <h2 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: `10px`,
        }}
      >
        Home
      </Link>
      <Link
        to="/projects"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: `10px`,
        }}
      >
        Projects
      </Link>
      <Link
        to="/about"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: `10px`,
        }}
      >
        About
      </Link>
    </h2>
  </header>
)

export default Header
