import { NavLink, NavItem, Nav } from 'reactstrap';
import  Link  from './Link'
import React from 'react'
import { graphql, StaticQuery  } from 'gatsby';

const NavMap = ({items}) => (
        <div>
              {items.map(({node}) => (
                <NavItem key={node.name} className={node.className}>
                  <Link to={node.to}>
                    {node.name}
                  </Link>
                </NavItem>
              ))}
        </div>
)
  
export default NavMap;


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  