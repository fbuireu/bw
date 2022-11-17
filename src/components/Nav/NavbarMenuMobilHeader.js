import * as React from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
import "../../sass/components/_navbarmenumobilheader.scss"

const NavbarMenuMobilHeader = () => {
  const mobilHeaderItems = [
    { link: "/admin", label: "LOG_IN" },
    { link: "/english", label: "ENGLISH" },
    { link: "/english", label: "日本語" },
  ]

  return (
    <div className="navbar-menu-mobil-header">
      <div className="navbar-menu-mobil-header-container">
        {mobilHeaderItems.map(({ label, link }) => (
          <Button
            key={label}
            type="button"
            buttonStyle="btn--secondary--outline"
            onClick={() => {
              navigate(link)
            }}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default NavbarMenuMobilHeader
