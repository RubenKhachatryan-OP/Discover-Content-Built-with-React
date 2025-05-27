import {
  SearchStickyBtnIndicator,
  SortFilterButton,
} from "./styles"

const SortFilterSearchButton = ({ disabled, stickyButtonRef, isSticky }) => {
  return (
    <SearchStickyBtnIndicator ref={stickyButtonRef}>
      <SortFilterButton disabled={disabled} $isSticky={isSticky}>
        Search
      </SortFilterButton>
    </SearchStickyBtnIndicator>
  )
}
export default SortFilterSearchButton
