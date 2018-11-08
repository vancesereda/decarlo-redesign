import Layout from '../components/layout'
import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import ContentMap from '../components/contentMap'
import '../css/pageDetail.css'
import Parser from 'html-react-parser'

export default class PageDetail extends Component {
  render() {
      const { project } = this.props.data;
    return (
      <Layout>
        <h1>{project.className ==='tags' ? '' : project.id}</h1>
        {Parser(`${project.text}`)}
        
        <ContentMap 
            slideshow={project.slideshow}
            setNumber={project.setNumber}/>
      </Layout>
    )
  }
}

export const query = graphql`
      query ProjectQuery($id: String) {
        project(id: {eq: $id}) {
          id
          text
          slideshow
          thumbnail
          setNumber
          captions
          className
        }
      }
`
