import type { GatsbyNode } from "gatsby"
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

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
            value: fileName.replace(/\//g, ""),
        })

        actions.createNodeField({
            name: `rawFileName`,
            node,
            value: fileName,
        })


    }
}

type Data = {
    errors?: any,
    data?: {
        allMarkdownRemark: {
            edges?: any[]
        }
    }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {

    const result: Data = await graphql(
        `
      query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  rawFileName
                }
                id
              }
            }
          }
        }
      `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.fields.rawFileName;
        actions.createPage({
            path: slug,
            component: path.resolve(`./src/templates/blog.tsx`),
            context: {
                pagePath: slug,
                pageId: node.id,
                slug: slug,
                rawFileName: slug,
            },
        })
    })
}