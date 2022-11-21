import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"
// import { Helmet } from "react-helmet"
// import { ElfsightWidget } from "react-elfsight-widget"
// import Calendar from "../components/Calendar"

export default function Orarend() {
  return (
    <Layout>
      <Seo title="ÓRAREND" />
      <div className="row">
        <h1>ÓRAREND</h1>
        {/* <ElfsightWidget widgetID="elfsight-app-fb5099a3-5f9f-48b6-944a-44e4eaad58cf" /> */}
        {/* <Calendar /> */}
      </div>
    </Layout>
  )
}
