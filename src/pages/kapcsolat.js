import * as React from "react"
import Seo from "../components/seo"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import GoogleMap from "../components/GoogleMap/GoogleMap"
import Layout from "../components/Layouts/Layout"
import SocialBlock from "../components/Icons/SocialBlock"
import InputField from "../components/InputField"
import TextArea from "../components/TextArea"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "../sass/pages/_kapcsolat.scss"

export default function Kapcsolat() {
  const breakpoints = useBreakpoint()

  return (
    <Layout>
      <Seo title="Kapcsolat" />
      <GoogleMap />

      <div className="row gap-1 kapcsolat-navigation">
        <div className="col-6-xs kapcsolat-navigation-button">
          <Button type="submit" buttonStyle="btn--secondary--outline">
            Google Maps
          </Button>
        </div>
        <div className="col-6-xs kapcsolat-navigation-button">
          <Button type="submit" buttonStyle="btn--secondary--outline">
            Waze
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="kapcsolat-title mb-20px">Kapcsolat</h1>
        </div>
      </div>
      <div className="row gap-2">
        <div className="col-12-xs col-6-md kapcsolat-body">
          <address>
            <h3 className="mb-0">Bandha Works Jógaiskola</h3>
            <div className="kapcsolat-address">
              <p>Cím: </p>
              <p className="clr-brand-orange">
                1027. Budapest, Frankel Leó út. 18.
              </p>
            </div>
          </address>
          <p className="clr-shades-lightGray span span--bold mt-20px kapcsolat-text">
            A bejárat az utcafrontról nyílik, a társasházi főbejárattól balra
            található barna ajtón tudsz bejönni hozzánk.
          </p>
          <p className="clr-shades-lightGray span span--bold mt-20px">
            Parkoló zóna kód az utcában: 0201. Hétfőtől péntekig 8:30-22:00-ig
            kell fizetni a parkolásért.
          </p>
          {breakpoints.md ? null : <SocialBlock />}
        </div>
        <div className="col-12-xs col-6-md kapcsolat-uzenet">
          <div className="row">
            <h3 className="mb-20px">Üzenj nekünk</h3>
          </div>
          <form
            name="contact bandhaworks"
            action="/message-sent"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact bandhaworks" />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div className="row gap-five">
              <div className="col-12-xs col-6-md">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Név"
                  required="required"
                />
              </div>
              <div className="col-12-xs col-6-md">
                <InputField
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required="required"
                  className="form-control col-12-xs col-6-md mb-20px"
                />
              </div>
            </div>
            <div className="row massage-wrapper mb-2">
              <TextArea
                className="kapcsolat__textarea"
                name="comments"
                rows="4"
                placeholder="Üzenet"
                required
              ></TextArea>
            </div>
            <div className="row">
              <div className="col contact_checkbox">
                <label className="form-control span span--bold clr-shades-lightGray bw-checkbox">
                  <input type="checkbox" name="checkbox" required />
                  <span>
                    Megismertem és elfogadom az
                    <Link to="/adatvedelem"> adatvédelmi tájékoztatót</Link>,
                    hozzájárulok e-mail címem kezeléséhez.
                  </span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12-xs col-4-md mb-2 kapcsolat-button mt-20px">
                <Button type="submit" buttonStyle="btn--secondary--solid">
                  KÜLDÉS
                </Button>
              </div>
            </div>
          </form>
          {breakpoints.md ? <div className="separator-horizontal"></div> : null}
          {breakpoints.md ? <SocialBlock /> : null}
        </div>
      </div>
    </Layout>
  )
}
