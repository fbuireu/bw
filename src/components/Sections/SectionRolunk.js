import React from "react"
import Button from "../Button"
import { navigate } from "gatsby"
import "../../sass/components/_sectionrolunk.scss"

const SectionRolunk = () => {
  return (
    <section className="section--rolunk">
      <div className="row mt-20px">
        <div className="col">
          <p>
            A Bandha Works jógaiskolát három mérnök alapította. Összeköt
            bennünket a törekvés, hogy a tradicionális astanga vinyásza jógát
            népszerűsítsük Magyarországon. Mi maguk is elkötelezett gyakorlói
            vagyunk az irányzatnak, minden évben az astanga jóga fővárosába, a
            dél-indiai Mysore-ba utazunk, ahol a legkiválóbb tanároktól tanulunk
            és mélyítjük tudásukat.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col mt-20px">
          <Button
            type="button"
            buttonStyle="btn--mobil--primary--outline"
            buttonSize="btn--small"
            onClick={() => {
              navigate("/rolunk")
            }}
          >
            Tudj meg többet rólunk
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SectionRolunk
