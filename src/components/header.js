import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `darkgreen`,
      marginBottom: `1.15rem`,
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: `6px`,
        }}
      >
        Home
      </Link>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: `6px`,
        }}
      >
        Projects
      </Link>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: `6px`,
        }}
      >
        About
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
