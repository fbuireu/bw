import React from "react"
import { Link } from "gatsby"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import { useAuthors } from "../../hooks/useAuthorsQuery"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../sass/components/_blogroll.scss"

function BlogRoll({ count, posts }) {
  // let posts = []
  // const postsQueried = useBlogRoll()
  // EXPLANATION: just calling the result of useAuthors and assigning it to an "authors" variable
  const authors = useAuthors()

  //This hardcopy operation is needed specifically because the component is being used w. different {count} parameters
  //Since the static query runs only once, we query all posts
  //and slice the array of posts on render time
  // posts = [...postsQueried]
  // if (count !== undefined) {
  //   posts.length = Math.min(posts.length, count)
  // }

  return (
    <>
      <div className="row">
        <div className="col">
          {posts &&
            posts.map(post => {
              /* EXPLANATION: aking advantage of the loop (because we are looping through the posts) and you are getting the exact data for each post ("post" as the iterable variable)
                 and having all authors, you just need to find which author of the post (post.frontmatter.author) is the same as the author.name (author.name is the name of the author) because the other node holds the image data (and other)
              * */
              const currentAuthor = authors.find(
                author => author.name === post.frontmatter.author
              )

              const link = Object.entries(post)[1][1].slug

              const timeToRead = Math.ceil(
                Object.entries(post)[1][1].timeToRead.minutes
              )

              const title = post.frontmatter.title || post.fields.slug
              const author = post.frontmatter.author

              return (
                <div className="mb-40px blog-card" key={post.frontmatter.title}>
                  <div className="blog-card-header">
                    <div className="meta-author">
                      {/*EXPLANATION: just calling the GatsbyImage and passing the needed data*/}
                      <GatsbyImage
                        alt={author}
                        image={
                          currentAuthor.authorimage.childImageSharp
                            .gatsbyImageData
                        }
                        className="avatar__image avatar__image--small"
                      />
                      <p>{author}</p>
                    </div>
                    <div className="vertical-separator"></div>
                    <p>{post.frontmatter.date}</p>
                  </div>
                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{title}</h3>
                    <p className="blog-card-text clr-shades-gray">
                      {post.frontmatter.description}
                    </p>
                  </div>

                  <div className="blog-card-footer">
                    <div className="blog-card-footer-first-row">
                      <div className="blog-card-footer-text tag-button single-tag-button">
                        {post.frontmatter.tags.map(tag => {
                          return (
                            <p key={post.frontmatter.date}>
                              <Link to={`/tags/${tag}`}>{tag}</Link>
                            </p>
                          )
                        })}
                      </div>
                      <p>{timeToRead} perc olvasás</p>
                    </div>

                    <div className="blog-card-footer-button">
                      <Button
                        type="button"
                        buttonStyle="btn--third--naked-orange"
                        onClick={() => {
                          navigate(`/blog${link}`)
                        }}
                      >
                        Olvasd tovább
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default BlogRoll
