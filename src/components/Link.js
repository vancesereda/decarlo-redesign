import { Link as GatsbyLink } from "gatsby"
import React, { component } from 'react'

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink activeStyle={{color: "blue"}} to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  } else if (to === '') {
    return (
    <span {...other}>
    {children}
    </span>
    )
  }
  return (
    
    <a href={to} {...other}>
      {children}
    </a>
    
  )
}

export default Link;