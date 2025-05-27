import { LoadBtn, LoadBtnText } from "./styles"

const LoadButton = ({ showLoadButton, startLoad }) => {
  return (
    <>
      {showLoadButton && (
        <LoadBtn onClick={startLoad}>
          <LoadBtnText>Load More</LoadBtnText>
        </LoadBtn>
      )}
    </>
  )
}
export default LoadButton
