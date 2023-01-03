import React from "react"
import { useEventsRoll } from "../hooks/useEventsRollQuery"
import Button from "../components/Buttons/Button"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../sass/components/_eventsroll.scss"

export default function EventsRoll() {
  let events = useEventsRoll()

  return events.map(
    ({ title, date, day, Shortdescription, teacher, teacherimage }) => {
      // console.log("ezaz", teacherimage.childrenImageSharp[0].fixed)

      return (
        <div className="event-card" key={date}>
          <div className="event-card-content-wrapper">
            <div className="event-card-header">
              <h3>{title}</h3>
              <div className="event-card-header-secondline">
                <GatsbyImage
                  image={teacherimage.childrenImageSharp[0].fixed}
                  alt={day}
                  className="avatar-image"
                />
                <p>{teacher}</p>
                <div className="blog-card-header-separator"></div>
                <p>
                  {date} {day}
                </p>
              </div>
            </div>
            <div className="event-card-body">
              <p>{Shortdescription}</p>
            </div>
            <div className="event-card-footer">
              <Button
                type="button"
                buttonStyle="btn--third--naked-orange"
                onClick={() => {
                  navigate("/mysore-program")
                }}
              >
                Részletek
              </Button>
              {/* <Button
              type="button"
              buttonStyle="btn--third--naked-gray"
              onClick={() => {
                navigate("/mysore-program")
              }}
            >
              Jelentkezés
            </Button> */}
            </div>
          </div>
        </div>
      )
    }
  )
}
