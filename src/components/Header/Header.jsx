import { useEffect, useState, useContext, useRef } from "react"
import { Link, useLocation } from "react-router-dom"

import blue_short from "@assets/logos/blue_short.svg"
import blue_square_2 from "@assets/logos/blue_square_2.svg"
import basic_plus_white from "@assets/icons/basic-371-plus-white.svg"
import basic_bell_white from "@assets/icons/basic-441-bell.svg"
import basic_menu_white from "@assets/icons/basic-600-menu.svg"
import basic_close from "@assets/icons/basic-599-menu-close.svg"
import basic_search_blue from "@assets/icons/basic-28-search-blue.svg"

import { SwitchBtn } from "@components/shared/SwitchBtn"
import { VectorIcon } from "@components/shared/VectorIcon"

import { LoadBar } from "@/components/shared/LoadBar"
import { LoadStateContext } from "@/context/LoadStateContext"

import { HeaderContainer, HeaderNavbar } from "./styles"
import SearchField from "@/components/Header/SearchField"
import NavHoverLinks from "@/components/Header/NavHoverLinks"
import SubNav from "@/components/SubNav"
import onScroll from "@/utils/scroll"
import useSwitch from "@/hooks/useSwitch"

const Header = () => {
  const { fillLoadBar, setFillLoadBar } = useContext(LoadStateContext)
  const [isSearchFieldHidden, switchSearchFieldHidden] = useSwitch()
  const [isSidebarHidden, switchSidebarHidden] = useSwitch()
  const [headerHidden, setHeaderHidden] = useState("")
  const location = useLocation()

  const navbar = useRef(null)

  useEffect(() => {
    const hideShowHeader = onScroll(navbar.current)
    const handleScroll = () => {
      hideShowHeader(setHeaderHidden)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  setTimeout(() => setFillLoadBar(false), 1000)

  return (
    <HeaderContainer>
      {fillLoadBar && <LoadBar />}
      <div
        ref={navbar}
        className={
          "header flex space-between align-center w-full " + headerHidden
        }
      >
        <div className="header-container flex space-between align-center w-full">
          <Link to="/">
            <img
              src={blue_short}
              alt="blue short logo"
              className="logo-l hide-s"
            />
          </Link>
          <HeaderNavbar className={`nav sidebar fs-16 ${!isSidebarHidden && "show"}`}>
            <ul className="horizontal">
              <NavHoverLinks
                title="Movies"
                subLinks={["Popular", "Now Playing", "Upcoming", "Top Rated"]}
              />
              <NavHoverLinks
                title="TV Shows"
                subLinks={["Popular", "Airing Today", "On TV", "Top Rated"]}
              />
              <NavHoverLinks title="People" subLinks={["Popular People"]} />
              <NavHoverLinks
                title="More"
                subLinks={[
                  "Discussions",
                  "Leaderboard",
                  "Support",
                  "API Documentation",
                  "API for Business",
                ]}
                hides={true}
              />
              <NavHoverLinks
                title=""
                subLinks={[
                  "Contribution Bible",
                  "Discussions",
                  "Leaderboard",
                  "API",
                  "Support",
                  "About",
                  "Logout",
                ]}
              />
            </ul>
          </HeaderNavbar>

          <div className="nav-center flex align-center">
            <SwitchBtn onClick={switchSidebarHidden}>
              {isSidebarHidden ? (
                <VectorIcon
                  src={basic_menu_white}
                  alt="icons-basic-600-menu"
                  className="hide-l"
                />
              ) : (
                <VectorIcon
                  src={basic_close}
                  alt="icons-basic-599-menu-close"
                  className="invert hide-l"
                />
              )}
            </SwitchBtn>

            <Link to="/">
              <img
                src={blue_square_2}
                alt="blue_square_logo_2"
                className="logo-s hide-l"
              />
            </Link>

            <div className="nav-droite flex align-center">
              <VectorIcon
                src={basic_plus_white}
                alt="basic_plus_white icon"
                className="hide-s"
              />
              <div className="translate hide-s">EN</div>
              <VectorIcon src={basic_bell_white} alt="basic_bell_white" />
              <div className="user" title="Profile and Settings">
                U
              </div>

              <SwitchBtn onClick={switchSearchFieldHidden}>
                {isSearchFieldHidden ? (
                  <VectorIcon
                    src={basic_search_blue}
                    alt="show search"
                    $size="2rem"
                  />
                ) : (
                  <VectorIcon
                    src={basic_close}
                    alt="close-search"
                    $size="2rem"
                    className="invert"
                  />
                )}
              </SwitchBtn>
            </div>
          </div>
        </div>
        <SearchField isHidden={isSearchFieldHidden} />
      </div>
      {location.pathname.startsWith("/movie/") && <SubNav />}
    </HeaderContainer>
  )
}
export default Header
