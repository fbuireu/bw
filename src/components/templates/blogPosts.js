import React, { useRef, useState, useEffect } from "react"
import { graphql, Link, navigate } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import ButtonIcon from "../Buttons/ButtonIcon"
import Icons from "../Icons/Icons"
import LayoutBlog from "../Layouts/LayoutBlog"
import Seo from "../seo"
import { GatsbyImage } from "gatsby-plugin-image"
import BlogSidebar from "../../components/Blog/BlogSidebar"
import useSiteMetadata from "../../hooks/use-site-metadata"
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share"
import "../../sass/components/_blogposts.scss"

const BlogPosts = ({ data, children, pageContext, location }) => {
  const breakpoints = useBreakpoint()
  const [articleProperties, setArticleProperties] = useState({})
  const post = data.mdx
  const { tags } = post.frontmatter
  const timeToRead = Math.ceil(post.fields.timeToRead.minutes)
  const { authorsJson: author } = data
  const { siteURL } = useSiteMetadata()
  const sectionRef = useRef(null)
  useEffect(() => setArticleProperties(sectionRef.current), [])

  return (
    <LayoutBlog articleProperties={articleProperties}>
      <div className="blog-posts-wrapper">
        <div className="row gap-2">
          <div ref={sectionRef} className="col-12-xs col-9-md col-9-xl">
            <Seo
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              // thumbnail={src}
            />
            <div
              className={`${
                breakpoints.md
                  ? "blog-post-image container-fluid"
                  : "blog-post-image"
              }`}
            >
              {!pageContext.postThumbnail ? (
                <img src={pageContext.frontmatter.thumbnail} />
              ) : (
                <GatsbyImage
                  image={
                    pageContext.postThumbnail.node.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.frontmatter.title ?? "some value"}
                />
              )}
            </div>
            <div className="blog-post-header mt-20px">
              <div className="row">
                <div className="col">
                  <h1>{post.frontmatter.title}</h1>
                </div>
              </div>
              <div className="meta mt-20px">
                <div className="blog-posts-meta-first-line">
                  <div className="meta-author">
                    <GatsbyImage
                      image={author.authorimage.childImageSharp.gatsbyImageData}
                      className="avatar-image"
                    />
                    <p>{post.frontmatter.author}</p>
                  </div>
                  <div className="vertical-separator"></div>
                  <p>{post.frontmatter.date}</p>
                </div>
                <div className="blog-posts-meta-second-line">
                  <div className="vertical-separator"></div>
                  <p>{timeToRead} perc olvasás</p>
                  <div className="blog-card-footer-text tag-button blogposts-tag-button">
                    {tags.map(tag => {
                      return (
                        <p key="tag" className="blogposts-tag-button">
                          <Link to={`/tags/${tag}`}>{tag}</Link>
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="separator-horizontal-full mt-40px"></div>
            <article className="mb-20px blog-posts-body-style">
              {children}
            </article>

            <FacebookShareButton url={`${siteURL}${location.pathname}`}>
              <FacebookIcon size={40} />
            </FacebookShareButton>

            <ButtonIcon
              buttonType="icon-text"
              className=""
              text="Vissza az összes bejegyzéshez"
              icon={<Icons.ArrowLeft color="orange" />}
              onClick={() => {
                navigate("/blog")
              }}
            />
          </div>
          <div className="col-12-xs col-3-md col-3-xl hide-blogsidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </LayoutBlog>
  )
}

export default BlogPosts

export const query = graphql`
  query PostsBySlug($slug: String!, $author: String) {
    authorsJson(name: { eq: $author }) {
      name
      email
      authorimage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }

    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fields {
        slug
        timeToRead {
          minutes
        }
      }
      frontmatter {
        author
        title
        date(formatString: "YYYY MMMM DD.", locale: "hu-HU")
        tags
        thumbnail
      }
    }
  }
`
