import { createNavContent } from "@/utils/nextNav"
import NextNavLink from "@/components/shared/NextNavUl/NextNavLink"

const NextNavUl = ({
  current = 1,
  total = 1,
  onPageChange,
  previousLabel = "Previous",
  nextLabel = "Next",
  breakLabel = "...",
  marginPagesDisplayed = 1, // Number of pages to show at the beginning and end
  pageRangeDisplayed = 5, // Number of pages to show around the current page
}) => {
  const content = createNavContent({
    previousLabel,
    nextLabel,
    breakLabel,
    marginPagesDisplayed,
    pageRangeDisplayed,
    toNext: onPageChange,
    current,
    total,
  })
  return (
      <ul>
        {content.map(
          ({ label, handleClick, args, active, disabled, dots }, index) => (
            <NextNavLink
              key={"li" + index}
              handleClick={handleClick}
              args={args}
              active={active}
              disabled={disabled}
              dots={dots}
            >
              {label}
            </NextNavLink>
          )
        )}
      </ul>
  )
}
export default NextNavUl
