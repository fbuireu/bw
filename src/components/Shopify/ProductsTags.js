import React from "react"
// import { CustomLink } from "../CustomLink"
import { useShopify } from "../../hooks/useShopifyQuery"
// import "../../sass/components/_blogtags.scss"

function ProductsTags() {
  const products = useShopify()
  const productTags = new Set()
  products.forEach(product =>
    product.node.tags.forEach(tag => {
      productTags.add(tag)
    })
  )

  return (
    <div className="row">
      <div className="col blogtags tag-button">
        {[...productTags]?.map(tag => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default ProductsTags
