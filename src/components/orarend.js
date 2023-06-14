import React from "react"
import { graphql } from "gatsby"
import { CustomLink } from "./CustomLink"
import Layout from "./Layouts/Layout"
import Seo from "./seo"
import Accordion from "./Accordions/Accordion"
import Icons from "./Icons/Icons"
import Button from "../components/Buttons/Button"
import { navigate } from "gatsby"
import "../sass/components/_orarend.scss"

const Orarend = ({ data }) => {
  return (
    <Layout>
      <Seo title="ÓRAREND" />
      <div className="row mt-80px mb-20px">
        <h1>ÓRAREND</h1>
      </div>
      <ul>
        {data.allScheduleJson.edges
          .sort((a, b) => {
            const dateA = new Date(a.node.date)
            const dateB = new Date(b.node.date)
            return dateA - dateB
          })
          .map(({ node }) => {
            const {
              date,
              class1,
              class2,
              class3,
              class4,
              description1,
              description2,
              description3,
              description4,
              signup1,
              signup2,
              signup3,
              signup4,
              time1,
              time2,
              time3,
              time4,
              teacher1,
              teacher2,
              teacher3,
              teacher4,
              teacherlink1,
              teacherlink2,
              teacherlink3,
              teacherlink4,
              fullmoon,
              newmoon,
              ekadashi,
            } = node
            if (new Date(date).getTime() > new Date()) {
              let daysArray = [
                "vasárnap",
                "hétfő",
                "kedd",
                "szerda",
                "csütörtök",
                "péntek",
                "szombat",
              ]
              let day = new Date(date).getDay()
              let dayName = daysArray[day].toUpperCase()
              let monthDay = new Date(date)
                .toLocaleDateString("hu-HU", {
                  month: "long",
                  day: "numeric",
                })
                .toUpperCase()
              return (
                <div className="schedule-wrapper">
                  <div className="bg-shades-darkGray container-fluid">
                    <div className="container">
                      <div className="schedule-date-line clr-shades-gray tight--desktop--container">
                        <div>
                          <p>{dayName}</p>
                          {fullmoon && <Icons.Fullmoon url="/holdnapok" />}
                          {newmoon && <Icons.Newmoon url="/holdnapok" />}
                          {ekadashi && (
                            <CustomLink
                              link="/holdnapok"
                              title="ekadashi"
                              classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                            />
                          )}
                        </div>
                        <p>{monthDay}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper tight--desktop--container">
                    <div className="schedule-card">
                      <div className="schedule-main-row">
                        <div className="schedule-class">
                          <p>{time1}</p>
                          <div className="schedule-class-second-line">
                            <h3>{class1}</h3>
                            <CustomLink
                              link={teacherlink1}
                              classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                              title={teacher1}
                            />
                          </div>
                          <div className="schedule-details">
                            <Accordion
                              content={description1}
                              text="Részletek"
                              className="clr-shades-white span"
                            />
                          </div>
                        </div>
                        <div className="schedule-buy-ticket link-decoration-remove">
                          <CustomLink
                            link={signup1}
                            classNames="body clr-brand-orange"
                            title="Vásárlás"
                          />
                        </div>
                      </div>
                    </div>
                    {class2 !== "null" && (
                      <div
                        className={
                          class2 === "null" ? "hide-class" : "schedule-card"
                        }
                      >
                        <div>
                          <div className="schedule-main-row">
                            <div className="schedule-class">
                              <p>{time2}</p>
                              <div className="schedule-class-second-line">
                                <h3>{class2}</h3>
                                <div className="vertical-separator" />
                                <CustomLink
                                  link={teacherlink2}
                                  classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                                  title={teacher2}
                                />
                              </div>
                              <div className="schedule-details">
                                <Accordion
                                  content={description2}
                                  text="Részletek"
                                  className="clr-shades-white span"
                                />
                              </div>
                            </div>
                            <div className="schedule-buy-ticket link-decoration-remove">
                              <CustomLink
                                link={signup2}
                                classNames="body clr-brand-orange"
                                title="Vásárlás"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {class3 !== "null" && (
                      <div
                        className={
                          class3 === "null" ? "hide-class" : "schedule-card"
                        }
                      >
                        <div className="schedule-main-row">
                          <div className="schedule-class">
                            <p>{time3}</p>
                            <div className="schedule-class-second-line">
                              <h3>{class3}</h3>
                              <div className="vertical-separator" />
                              <CustomLink
                                link={teacherlink3}
                                classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                                title={teacher3}
                              />
                            </div>
                            <div className="schedule-details">
                              <Accordion
                                content={description3}
                                text="Részletek"
                                className="clr-shades-white span"
                              />
                            </div>
                          </div>
                          <div className="schedule-buy-ticket link-decoration-remove">
                            <CustomLink
                              link={signup3}
                              classNames="body clr-brand-orange"
                              title="Vásárlás"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {class4 !== "null" && (
                      <div className="schedule-card">
                        <div className="schedule-main-row">
                          <div className="schedule-class">
                            <p>{time4}</p>
                            <div className="schedule-class-second-line">
                              <h3>{class4}</h3>
                              <div className="vertical-separator" />
                              <CustomLink
                                link={teacherlink4}
                                classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                                title={teacher4}
                              />
                            </div>
                            <div className="schedule-details">
                              <Accordion
                                content={description4}
                                text="Részletek"
                                className="clr-shades-white span"
                              />
                            </div>
                          </div>
                          <div className="schedule-buy-ticket link-decoration-remove">
                            <CustomLink
                              link={signup4}
                              classNames="body clr-brand-orange"
                              title="Vásárlás"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            }
          })}
      </ul>
      <div className="separator-horizontal-full"></div>
      <div className="row mt-40px">
        <Button
          type="button"
          buttonStyle="btn--secondary--solid--full"
          onClick={() => {
            navigate("/programok")
          }}
        >
          Egyéb programjaink
        </Button>
      </div>
    </Layout>
  )
}

export default Orarend

export const scheduleListQuery = graphql`
  query scheduleListQuery {
    allScheduleJson(sort: { date: ASC }) {
      edges {
        node {
          date
          class1
          class2
          class3
          class4
          description1
          description2
          description3
          description4
          signup1
          signup2
          signup3
          signup4
          time1
          time2
          time3
          time4
          teacher1
          teacher2
          teacher3
          teacher4
          teacherlink1
          teacherlink2
          teacherlink3
          teacherlink4
          fullmoon
          newmoon
          ekadashi
        }
      }
    }
  }
`
