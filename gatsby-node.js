const slugify = require(`./src/utils/slugify`)
const readingTime = require(`reading-time`)
const {
  fmImagesToRelative: fmImagesToRelative2,
} = require(`gatsby-remark-relative-images-v2`)

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const _ = require("lodash")

exports.onCreateWebpackConfig = helper => {
  const { stage, actions, getConfig } = helper
  if (stage === "develop" || stage === "build-javascript") {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(
    "./src/components/templates/blogPosts.js"
  )
  const tagsTemplate = path.resolve("./src/components/templates/tags.js")

  return graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            author
            thumbnail
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMdx.nodes
    let tags = []
    posts.forEach(({ frontmatter }) => {
      tags.push(...frontmatter.tags)
    })
    tags = Array.from(new Set(tags))

    tags.forEach(tag => {
      createPage({
        path: `tags/${slugify(tag)}`,
        component: tagsTemplate,
        context: { tag },
      })
    })

    // create page for each mdx node
    posts.forEach(post => {
      const imageName = post.frontmatter.thumbnail
        .split("/")
        .pop()
        .split(".")[0]

      const postThumbnail = result.data.allFile.edges.find(({ node }) =>
        node.childImageSharp?.gatsbyImageData?.images?.sources[0].srcSet.includes(
          imageName
        )
      )

      createPage({
        path: `blog${post.fields.slug}`,
        component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          slug: post.fields.slug,
          postThumbnail,
          author: post.frontmatter.author,
        },
      })
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative2(node) // convert image paths for gatsby images

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type Mdx implements Node @infer {
    frontmatter: Frontmatter!
  }
  type Frontmatter @infer {
    title: String!
    date: Date! @dateformat
    description: String!
    authorFull: AuthorsJson @link(by: "email", from: "author")
  }
`
  createTypes(typeDefs)

  createTypes(`#graphql
    type Mdx implements Node {
        # You can also use other keys from fields.timeToRead if you don't want "minutes"
        timeToRead: Float @proxy(from: "fields.timeToRead.minutes")
    }
  `)
}
