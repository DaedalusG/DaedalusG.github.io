import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby'


import Header from "./header"
import "./styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='layout-container'>
        <main>{children}</main>
      </div>
      <div className="email-c">
        <Img />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
