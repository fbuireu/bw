import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useStore from "./StoreContext"
import CartAmountToggle from "./CartAmountToggle"
import Icons from "../Icons/Icons"
import "../../sass/components/_productrow.scss"

const ProductRow = ({ item }) => {
  const { product, quantity } = item
  const { removeLineItem } = useStore()
  const [amount, setAmount] = useState(1)

  const setDecrease = () => {
    setAmount(prevAmount => Math.max(prevAmount - 1, 1))
  }

  const setIncrease = () => {
    setAmount(prevAmount => prevAmount + 1)
  }

  const handleRemove = () => {
    removeLineItem(product.variants[0]?.shopifyId)
  }

  return (
    <div className="product-row mt-40px row">
      <div className="product-row--left col-8-xs col-7-md">
        <div className="product-row--image">
          <GatsbyImage
            image={
              product.featuredMedia.preview.image.localFile
                .childrenImageSharp[0].gatsbyImageData
            }
            alt={product.title}
          />
        </div>
        <div className="product-row--title">
          <p>{product.title}</p>
          <p className="small">
            {product.priceRangeV2.maxVariantPrice.amount} Ft.
          </p>
          <div className="product-row--title__quantity-mobil mt-20px">
            <CartAmountToggle
              amount={quantity}
              setDecrease={setDecrease}
              setIncrease={setIncrease}
            />
            <button
              className="product-row--right__remove"
              onClick={handleRemove}
            >
              <Icons.Close color="white" />
            </button>
          </div>
        </div>
      </div>
      <div className="product-row--right col-4-xs col-5-md">
        <div className="product-row--right__quantity">
          <CartAmountToggle
            amount={quantity}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
          <button className="product-row--right__remove" onClick={handleRemove}>
            <Icons.Close color="white" />
          </button>
        </div>
        <div className="product-row--right__price">
          <p>{product.priceRangeV2.maxVariantPrice.amount} Ft.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductRow

// import React, { useState } from "react"
// import useStore from "./StoreContext"
// import { GatsbyImage } from "gatsby-plugin-image"
// import CartAmountToggle from "./CartAmountToggle"
// import Icons from "../Icons/Icons"
// import "../../sass/components/_productrow.scss"

// const ProductRow = ({ item }) => {
//   const { product, quantity } = item
//   const { removeLineItem } = useStore()
//   const [amount, setAmount] = useState(1)

//   const setDecrease = () => {
//     amount > 1 ? setAmount(amount - 1) : setAmount(1)
//   }
//   const setIncrease = () => {
//     setAmount(amount + 1)
//   }

//   return (
//     <div className="product-row mt-40px row">
//       <div className="product-row--left col-8-xs col-7-md">
//         <div className="product-row--image">
//           <GatsbyImage
//             image={
//               product.featuredMedia.preview.image.localFile
//                 .childrenImageSharp[0].gatsbyImageData
//             }
//             alt={product.title}
//           />
//         </div>
//         <div className="product-row--title">
//           <p>{product.title}</p>
//           <p className="small">{product.priceRangeV2.maxVariantPrice.amount}</p>
//         </div>
//       </div>

//       <div className="product-row--right col-4-xs col-5-md">
//         <div className="product-row--right__quantity">
//           <CartAmountToggle
//             amount={quantity}
//             setDecrease={setDecrease}
//             setIncrease={setIncrease}
//           />
//           <button
//             className="product-row--right__remove"
//             onClick={() => removeLineItem(product.variants[0]?.shopifyId)}
//           >
//             <Icons.Close color="white" />
//           </button>
//         </div>
//         <div>
//           <p className="product-row--right__price">
//             {product.priceRangeV2.maxVariantPrice.amount} Ft.
//           </p>
//         </div>
//       </div>

//       {/* <div>
//         <p className="small">{product.priceRangeV2.maxVariantPrice.amount}</p>
//       </div> */}

//       {/* <p>{quantity}</p> */}
//     </div>
//   )
// }

// export default ProductRow
