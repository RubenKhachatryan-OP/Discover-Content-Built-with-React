import { NextNavWrapper } from "./styles"
import NextNavUl from "@components/shared/NextNavUl"

const NextNav = ({ children, ...props }) => {
  return (
    <NextNavWrapper>
      <NextNavUl {...props}>{children}</NextNavUl>
    </NextNavWrapper>
  )
}

export default NextNav
