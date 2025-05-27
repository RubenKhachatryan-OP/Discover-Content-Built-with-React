import styled, { css } from "styled-components"
import { BtnBlue } from "@/components/shared/Buttons.styles"

// Sort Filter Sticky Blue Button
export const SearchStickyBtnIndicator = styled.div`
  margin-top: 20px;
  min-width: 100%;
  min-height: 44px;
`

export const SortFilterButton = styled(BtnBlue).attrs((props) => ({
  type: "submit",
  disabled: props.disabled,
}))`
  font-size: 1.2em;
  line-height: 1;
  font-weight: 600;

  &:hover {
    background: rgb(var(--tmdbDarkBlue, (6, 37, 65)));
    cursor: pointer;
  }

  &:disabled,
  &:disabled:hover {
    background-color: rgba(228, 228, 228, 0.7);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    cursor: default;
    color: rgba(0, 0, 0, 0.5);
  }

  ${(props) =>
    props.$isSticky &&
    css`
      &:not([disabled]) {
        border-radius: 0;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 1;
      }
    `}
`
