/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const pageInfo = require(`./src/components/pageInfo`);

exports.sourceNodes = async ({ actions, createContentDigest}) => {
    const { createNode } = actions;
    
        pageInfo.forEach(content => {
          const projectNode = {
            id: content.name,
            parent: null,
            children: [],
            internal: {
              type: `Project`,
              mediaType: `text/html`,
              content: JSON.stringify(content),
              contentDigest: createContentDigest(content)
            },
          }
          const node = Object.assign({}, content, projectNode)
          createNode(node)
        })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProject {
          edges {
            node {
              setNumber
              id
              to
              slideshow
              text
              className
              captions
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allProject.edges.forEach(({ node }) => {
      if (node.to.length) {
        createPage({
          path: `${node.to}`,
          component: path.resolve(`./src/templates/pageDetail.js`),
          context: {
            id: node.id,
            to: node.to,
            captions: node.captions,
            slideshow: node.slideshow,
            setNumber: node.setNumber,
            text: node.text,
            className: node.className
          },  
        })
      }
    })
    resolve();
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};