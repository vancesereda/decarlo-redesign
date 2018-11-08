import React from 'react'
import PropTypes, { node } from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import '../css/layout.css'
import 'bootstrap/dist/css/bootstrap.css';
import Typography from 'typography'
import { TypographyStyle, GoogleFont } from 'react-typography'
import CustomNav from './customNav'
import Contact from './Contact'

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.3,
  headerFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue','Verdana', 'Helvetica', 'Arial','sans-serif'],
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[]}
        >
          <html lang="en" />
        </Helmet>
        <TypographyStyle typography = {typography} />
        <Container className="main-container">
          
          <Row>
            
            <CustomNav />
            
          
          

            <Col sm={{size: 7}} className="page-detail">
              <span className="sm-scrn">
                <div>
                  {children}
                </div>
              </span>
              
              <span className="lg-scrn">
                <div className="page">
                {children}
                </div>
                <Contact />
              
              </span>
            </Col>
            </Row>
          
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: node.isRequired
}



export default Layout

