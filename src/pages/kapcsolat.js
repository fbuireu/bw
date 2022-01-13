import * as React from "react"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "../sass/components/_kapcsolat.scss"
// import GoogleMap from '../components/GoogleMap'
import Navbar from "../components/navbarBW"
import SnazzyGoogleMap from "../components/SnazzyGoogleMap"

export default function Kapcsolat() {
  return (
    <>
      <Navbar />
      <SnazzyGoogleMap />
      <Container>
        <Seo title="Kapcsolat" />
        <Row>
          <Col>
            <h1>Bandha Works Jógaiskola</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <address>
              <strong>1027. Budapest, Frankel Leó út. 18. </strong>
              <p>
                A bejárat az utcafrontról nyílik, a főbejárattól balra található
                ajtón tudsz bejönni hozzánk.
              </p>
            </address>
          </Col>
        </Row>

        <form
          name="contact bandhaworks"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact bandhaworks" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <Row>
            <Col md={6}>
              <input type="text" name="name" placeholder="Név" required />
              <br />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </Col>
            <Col md={6}>
              <textarea
                className="kapcsolat__textarea"
                name="comments"
                rows="2"
                placeholder="Üzenet"
                required
              ></textarea>
            </Col>
          </Row>

          <Row>
            <Col className="d-grid gap-2">
              <Button
                type="submit"
                buttonStyle="btn--mobil--secondary--solid"
                buttonSize="btn--small"
              >
                KÜLDÉS
              </Button>

              <label>
                <input type="checkbox" className="styled__checkbox" required />{" "}
                Megismertem és elfogadom az
                <Link href="/adatvedelem"> adatvédelmi tájékoztatót</Link>,
                hozzájárulok e-mail címem kezeléséhez.
              </label>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}
