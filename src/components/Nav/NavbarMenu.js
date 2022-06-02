import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import "../../sass/components/_navbarmenu.scss"
import Separator from "../Separator"
// import Button from "../Button"
// import { navigate } from "gatsby"
import NavbarMenuFooter from "./NavbarMenuFooter"
import NavbarMenuLanguageOptions from "./NavbarMenuLanguageOptions"

const NavbarMenu = ({ open, setOpen }) => {
  const menuItemsJogaorak = [
    { link: "/orarend", label: "ÓRAREND" },
    { link: "/arak", label: "ÁRAK" },
    { link: "/mysore-program", label: "MYSORE PROGRAM" },
    { link: "/tanfolyam", label: "TANFOLYAMOK" },
    { link: "/oktatok", label: "OKTATÓK" },
    { link: "/vinyasza-jogairanyzatok", label: "JÓGAIRÁNYZATOK" },
    { link: "/galeria", label: "GALÉRIA", extraClass: "disabled" },
  ]

  const menuItemsTudnivalok = [
    { link: "/rolunk", label: "RÓLUNK" },
    { link: "/elso-alkalom", label: "ELSŐ ALKALOM" },
    { link: "/hazirend", label: "HÁZIREND" },
    { link: "/mantra", label: "MANTRÁK" },
    { link: "/sorozatabrak", label: "SOROZATÁBRÁK" },
    { link: "/holdnapok", label: "HOLDNAPOK" },
    { link: "/osztondij", label: "ÖSZTÖNDÍJ", extraClass: "disabled" },
  ]

  const menuGroupsFomenu = [
    { title: "JÓGAÓRÁK", items: menuItemsJogaorak },
    { title: "TUDNIVALÓK", items: menuItemsTudnivalok },
  ]

  const menuItemsFomenu = [
    { link: "/blog", label: "BLOG" },
    { link: "https://bandha-payments.hu", label: "SHOP", isExtenal: true },
    { link: "/kapcsolat", label: "KAPCSOLAT" },
  ]

  // const menuItemsFooter = [
  //   { link: "/english", label: "ENGLISH" },
  //   { link: "/english", label: "日本語" },
  //   { link: "/mysore-program", label: "MYSORE PROGRAM" },
  //   { link: "/tanfolyam", label: "TANFOLYAMOK" },
  //   { link: "/orarend", label: "ÓRAREND" },
  // ]

  return (
    <div className={`${open ? "mobil-menu-open" : "mobil-menu-closed"}`}>
      <ul className="nav-links">
        <NavbarMenuLanguageOptions />
        <Separator />
        {menuGroupsFomenu.map(({ title, items }) => (
          <li className="nav-item dropdown" key={title}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {title}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {items.map(({ link, label, extraClass }) => (
                <Nav.Item as="li" key={label}>
                  <Link
                    className={`dropdown-item ${extraClass}`}
                    to={link}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </Nav.Item>
              ))}
            </ul>
          </li>
        ))}
        {menuItemsFomenu.map(({ link, label, isExternal }) => (
          <Nav.Item as="li" key={label}>
            {isExternal ? (
              <a
                className="nav-link"
                href={link}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                className="nav-link"
                to={link}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )}
          </Nav.Item>
        ))}
        <Separator />
        {/* {menuItemsFooter.map(({ link, label }) => (
          <div className="menuFooter--box" key={label}>
            <ul>
              <li>
                <Button
                  type="button"
                  buttonStyle="btn--mobil--secondary--outline--menu"
                  buttonSize="btn--small"
                  onClick={() => {
                    navigate({ link })
                  }}
                >
                  {label}
                </Button>
              </li>
            </ul>
          </div>
        ))} */}
        <NavbarMenuFooter />
      </ul>
    </div>
  )
}

export default NavbarMenu
