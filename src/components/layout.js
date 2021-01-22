import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

import "./styles/layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className='layout-container'>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
