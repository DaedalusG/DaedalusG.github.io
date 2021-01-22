import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import EmailButton from "./emailButton"
import "./styles/layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className='layout-container'>
        <main>{children}</main>
      </div>
      <div>
        <EmailButton />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
