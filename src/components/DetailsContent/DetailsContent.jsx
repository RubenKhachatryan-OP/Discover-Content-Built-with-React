import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import basic_fullscreen_white from "@assets/icons/basic-216-fullscreen-white.svg"
import basic_circle_info from "@assets/icons/basic-636-circle-info.svg"
import basic_play_icon from "@assets/icons/basic-175-play.svg"
import UserScore from "@components/UserScore"
import { DetailsSection } from "@/components/DetailsContent/DetailsSection"
import { structureData } from "@/utils/discover"
import { takeColor } from "@/utils/colors"
import { SRC_URL_1X, SRC_URL_2X, fetchCast } from "./constants"
import CastInfo from "./CastInfo"
import ToolButtons from "./ToolButtons"
import { DetailsOverview, HeaderInfo, Shuffler, Vibe } from "./styles"

const DetailsContent = () => {
  const [details, setDetails] = useState({})
  const [backColor, setBackColor] = useState([])
  const [dataIsLoaded, setDataIsLoaded] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json)
        setDataIsLoaded(true)
      })
  }, [])

  const { id } = useParams()

  const urlStr = `/movie/${id}`
  const url = new URL("/3" + urlStr, "https://api.themoviedb.org")
  const query = {
    language: "en-US",
    api_key: encodeURIComponent("1cf50e6248dc270629e802686245c2c8"),
  }
  url.search = new URLSearchParams(query).toString()

  if (!dataIsLoaded) {
    return (
      <div>
        <h3>Please wait some time....</h3>
      </div>
    )
  }

  const takeColorOnLoad = (e) => {
    setBackColor(takeColor(e.target))
  }

  const { vote_count, consensus, fullDate, year } = structureData(details)
  return (
    <>
      <main className="details-container">
        <DetailsSection
          $backdrop_path={details.backdrop_path}
          $back_color={backColor.join(",")}
        >
          <div className="poster-container">
            <img
              className="details-poster w-full"
              src={`${SRC_URL_1X}${details.poster_path}`}
              srcSet={`${SRC_URL_1X}${details.poster_path} 1x, ${SRC_URL_2X}${details.poster_path} 2x`}
              alt={details.title}
              crossOrigin="Anonymous"
              onLoad={takeColorOnLoad}
            />
            <div className="expand-overlay zoom">
              <img
                className="fullscreen-icon"
                src={basic_fullscreen_white}
                alt="fullscreen-icon"
              />
              <span className="fullscreen-text">Expand</span>
            </div>
          </div>
          <div className="details-box">
            <h2 className="h24">
              {details.title} <span className="release_date"> ({year})</span>
            </h2>

            <Shuffler>
              <div className="vibe-section flex w-full">
                <div>
                  <UserScore
                    vote_count={vote_count}
                    consensus={consensus}
                    $chartSize={"L"}
                  />
                  <span>User Score</span>
                </div>
                <div className="v-line"></div>
                <Vibe>
                  <span className="your-vibe">What's your Vibe ?</span>
                  <img
                    className="invert info-icon"
                    src={basic_circle_info}
                    alt="What's your Vibe"
                  />
                </Vibe>
              </div>

              <div className="facts flex wrap space-between">
                <span className="certification">
                  {details.adult ? "R" : "PG-13"}
                </span>

                <span className="release">
                  {fullDate} ({details.origin_country?.join(", ")})
                </span>

                <span className="genres">
                  {details.genres.map((obj, index, full) => (
                    <a
                      key={obj.id}
                      href={`https://www.themoviedb.org/genre/${
                        obj.id
                      }-${obj.name.toLowerCase()}/movie`}
                    >
                      {obj.name}
                      {index < full.length - 1 ? <>,&nbsp;</> : ""}
                    </a>
                  ))}
                </span>

                <span className="runtime">
                  {Math.floor(details.runtime / 60)}h {details.runtime % 60}m
                </span>
                <div className="trailer flex align-center ml-2 hide-l">
                  <img
                    className="fullscreen-icon invert"
                    src={basic_play_icon}
                    alt="trailer"
                  />
                  <span className="play fw-semi-bold">Play Trailer</span>
                </div>
              </div>
              <ToolButtons />
            </Shuffler>

            <HeaderInfo>
              <h4 className="tagline" dir="auto">
                {details.tagline}
              </h4>

              <h3 dir="auto">Overview</h3>
              <DetailsOverview>
                <p>{details.overview}</p>
              </DetailsOverview>

              <CastInfo cast={fetchCast} />
            </HeaderInfo>
          </div>
        </DetailsSection>
      </main>
    </>
  )
}
export default DetailsContent
