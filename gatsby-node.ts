import type { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions, getNode }) => {

    if (node.internal.type === `SettingsYaml` || node.internal.type === `MarkdownRemark`) {
      const { sourceInstanceName } = getNode(node.parent)
      actions.createNodeField({
        name: `sourceName`,
        node,
        value: sourceInstanceName,
      })
    }
  }