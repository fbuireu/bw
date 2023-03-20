import React from "react"
import { useTagsRoll } from "../../hooks/useTagsRollQuery"
import { CustomLink } from "../CustomLink"
import "../../sass/components/_blogtags.scss"

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize(`NFD`)
    .trim()
    .replace(/\s+/g, `-`)
    .replace(/[^\w-]+/g, ``)
    .replace(/--+/g, `-`)
}

function BlogTags() {
  const tags = useTagsRoll()

  return (
    <div className="row">
      <div className="col blogtags tag-button">
        {tags?.map(tag => {
          return (
            <CustomLink
              key={tag}
              link={`/tags/${slugify(tag)}`}
              title={tag}
              classNames="tag-button"
            />
          )
        })}
      </div>
    </div>
  )
}

export default BlogTags
