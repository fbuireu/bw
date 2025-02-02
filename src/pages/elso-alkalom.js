import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Elsoalkalom() {
  const needed = [
    {
      needed:
        "kényelmes sportruházat, rövid nadrág (hogy lássuk a térded), rövid ujjú póló",
    },
    {
      needed:
        "egy nagyobb (matracra teríteni) és egy kisebb törülköző (igazításokhoz)",
    },
    {
      needed: "matracot tudunk biztosítani de ha van sajátod hozd bátran",
    },
  ]
  const moreInfos = [
    {
      moreInfo:
        "a jógaórák előtt 3-4 órával már ne egyél és fél órával ne igyál",
    },
    {
      moreInfo:
        "a cipődet hagyd a bejárat mellett a kijelölt helyen, ha szeretnél, hozz magaddal papucsot",
    },
    {
      moreInfo:
        "értékeidet zárd be az öltöző szekrénybe, a törölközőkön kívűl mást ne hozz be a terembe",
    },
    {
      moreInfo:
        "mindig jelezd óra előtt, ha bármilyen sérülésed vagy betegséged van",
    },
    {
      moreInfo:
        "kérjük ne beszélgess a teremben, és a terem előtt is csendben készülődj, ha bent óra van",
    },
    { moreInfo: "óra előtt és/vagy után lehetőség van zuhanyozni" },
    {
      moreInfo: "kérünk vizet és egyéb folyadékot ne hozz be a gyakorlóterembe",
    },
  ]

  return (
    <Layout>
      <Seo title="ELSŐ ALKALOM" />
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">ELSŐ ALKALOM</h1>
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
      <div className="elsoalkalom-wrapper tight--desktop--container">
        <div className="row mt-40px mb-20px">
          <p>
            Ha először jársz nálunk, érkezz legalább 15 perccel órakezdés előtt,
            hogy legyen elég idő a regisztrációra (tanfolyami részvétel esetén
            nincs szükség regisztrációra). A regisztrációs űrlap kitöltése után
            rövid elbeszélgetés következik az oktatóval (egyelőre csak a Mysore
            programosokkal) a hatékony együttműködés érdekében. Ekkor mindenképp
            jelezd, ha bármilyen különös odafigyelést igénylő állapotban vagy
            (például: sérülés, betegség, terhesség).
          </p>
        </div>
        <div className="row mb-20px">
          <p>Amire szükséged lesz:</p>
        </div>
        <div className="row unordered-list-style mb-40px">
          <ul>
            {needed &&
              needed.map(({ needed }) => (
                <li key={needed}>
                  <p>{needed}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="row mb-20px">
          <p>Egyéb tudnivalók:</p>
        </div>
        <div className="row unordered-list-style mb-40px">
          <ul>
            {moreInfos &&
              moreInfos.map(({ moreInfo }) => (
                <li key={moreInfo}>
                  <p>{moreInfo}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="row mb-20px">
          <p>Várunk szeretettel!</p>
        </div>
      </div>
    </Layout>
  )
}
