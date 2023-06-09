import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import EventsTypeOfRoll from "../components/EventsTypeOfRoll"
import EventsFeaturedRoll from "../components/EventsFeaturedRoll"

export default function Tanfolyam() {
  return (
    <Layout>
      <Seo title="TANFOLYAMOK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">TANFOLYAMOK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hirlevel_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Tradicionális astanga jóga tanfolyamok</h1>
        <EventsTypeOfRoll typeOfEvents="Tanfolyam" />
      </div>
      <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Egyéb programjaink</h1>
        <EventsTypeOfRoll typeOfEvents="Konferencia" />
      </div>
      <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Összes programunk</h1>
        <EventsFeaturedRoll showAll={true} />
      </div>
    </Layout>
  )
}
