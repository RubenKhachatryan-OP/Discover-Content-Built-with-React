import { ButtonsContainer, DarkBlueBtn } from "./styles"
import { VectorIcon } from "@components/shared/VectorIcon"
import basic_thumbnails_list from "@assets/icons/basic-159-thumbnails-list.svg"
import favorite from "@assets/icons/favorite.svg"
import basic_bookmark from "@assets/icons/basic-73-bookmark.svg"
import basic_star from "@assets/icons/basic-star.svg"
import basic_play_icon from "@assets/icons/basic-175-play.svg"

export default function ToolButtons() {
  return (
    <ButtonsContainer>
      <DarkBlueBtn>
        <VectorIcon
          src={basic_thumbnails_list}
          alt="basic_thumbnails_list"
          $size="1em"
          $invert={true}
        />
      </DarkBlueBtn>
      <DarkBlueBtn>
        <VectorIcon src={favorite} alt="favorite" $size="1em" $invert={true} />
      </DarkBlueBtn>
      <DarkBlueBtn>
        <VectorIcon
          src={basic_bookmark}
          alt="basic_bookmark"
          $size="1em"
          $invert={true}
        />
      </DarkBlueBtn>
      <DarkBlueBtn $hideL={true}>
        <VectorIcon
          src={basic_star}
          alt="basic_star"
          $size="1em"
          $invert={true}
        />
      </DarkBlueBtn>
      <div className="trailer flex align-center ml-2 hide-s">
        <img
          className="fullscreen-icon invert"
          src={basic_play_icon}
          alt="trailer"
        />
        <span className="play fw-semi-bold">Play Trailer</span>
      </div>
    </ButtonsContainer>
  )
}
