import type { GatsbyNode } from "gatsby"
const { createFilePath } = require(`gatsby-source-filesystem`)

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions, getNode }) => {

    if (node.internal.type === `ContentYaml` || node.internal.type === `MarkdownRemark`) {
      const { sourceInstanceName } = getNode(node.parent)
      actions.createNodeField({
        name: `parentFolder`,
        node,
        value: sourceInstanceName,
      })
      const fileName = createFilePath({ node, getNode });
      actions.createNodeField({
        name: `fileName`,
        node,
        value: fileName.replace(/\//g,""),
      })
    }
  }