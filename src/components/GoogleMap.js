import React from "react"
import GoogleMapReact from "google-map-react"
import Icon from "./Icons/Icon"
import "../sass/components/_googlemap.scss"

const defaultProps = {
  center: {
    lat: 47.51416,
    lng: 19.03734,
  },
  zoom: 15,
  mapId: "ba947539ac0c1ace",
}

const GoogleMap = () => (
  <div className="googleMap__box">
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      defaultMapId={defaultProps.mapId}
    >
      <Icon.Minilogo lat={47.51416} lng={19.03734} text={"Bandha Works"} />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
