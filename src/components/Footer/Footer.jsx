import blue_square_2 from "@assets/logos/blue_square_2.svg"
import { FOOTER_LINKS } from "./constants"
import { FooterFlex } from "./styles"

const Footer = () => {
  return (
    <FooterFlex>
      <nav>
        <div className="join">
          <img
            src={blue_square_2}
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
            className="hide-s"
          />
          <div className="rounded logged_in" href="#">
            Hi Join the Community!
          </div>
        </div>
        <>
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      </nav>

      <p className="text-center">Build 72ed5ee (8765)</p>
    </FooterFlex>
  )
}
export default Footer
