import * as React from "react"
import LayoutBlog from "../components/Layouts/LayoutBlog"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Oktatok() {
  return (
    <LayoutBlog>
      <Seo title="OKTATÓK" />
      <div className="row">
        <h1>OKTATÓK</h1>
      </div>
    </LayoutBlog>
  )
}
