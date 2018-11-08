import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Col, Nav, Row, Popover, PopoverBody, PopoverHeader, Button } from 'reactstrap';
import navItems from './pageInfo'
import NavMap from './navMap'
import '../css/Navbar.css'
import { graphql, StaticQuery } from 'gatsby';
import Draggable from 'react-draggable'
import Contact from './Contact'

class CustomNavbar extends Component {
    
    constructor(props) {
        super(props);
        this.toggle =this.toggle.bind(this);
        this.state = {
        isOpen: false,
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <StaticQuery query={graphql`
            query AllProjectsNav {
              allProject {
                edges {
                  node {
                    to
                    name
                    className
                  }
                }
              }
            }
          `} render={ data=> (

            <Col md={{size: 1}} className="nav-scroll" style={{'padding-left':'0px'}}>
                    <span className="lg-scrn"> 
                      <Navbar color="inherit" light expand="lg" style={{'padding-left':'0px'}}>
                      <Nav className="flex-column">
                          <NavMap items={data.allProject.edges} />
                      </Nav>  
                      </Navbar>
                    </span>
                    <span className="sm-scrn">
                    <Draggable onStart={(e)=>e.preventDefault()} onClick={(e)=>e.preventDefault()}>
                      <Button outline className="left-nav-button" onClick={this.toggle}>
                      {this.state.isOpen ? `>` : `<`}
                      </Button>
                    </Draggable>
                    <div className="left-nav" style={
                      {
                      'left':`${this.state.isOpen ? `0` : `100vw`}`
                      }
                    }>
                      
                      <NavMap items={data.allProject.edges} /><br />
                      <Contact />
                        
                    </div>
                    
                    
                    
                    
                    
                    </span>
                </Col>
                )}
        />)
                            }
}

export default CustomNavbar
