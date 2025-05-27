import sub_hover_black from "@assets/icons/sub-hover-black.svg"
import { VectorIcon } from "@components/shared/VectorIcon"
import { DetailsNavbar, DetailsNav, SubNavLink, SubLink } from "./styles"
import { SUB_NAV_LINKS } from "./constants"
import { SubNavHoverDeck } from "./styles"

const SubNav = () => {
  return (
    <DetailsNavbar>
      <DetailsNav className="details-nav flex">
        {SUB_NAV_LINKS.map((link, index) => (
          <SubNavLink key={index + link.title}>
            {link.title}
            <VectorIcon src={sub_hover_black} $size="1rem" />
            <SubNavHoverDeck>
              <ul>
                {link.links.map((subLink, index) => (
                  <SubLink key={index + subLink}>{subLink}</SubLink>
                ))}
              </ul>
            </SubNavHoverDeck>
          </SubNavLink>
        ))}
      </DetailsNav>
    </DetailsNavbar>
  )
}

export default SubNav
