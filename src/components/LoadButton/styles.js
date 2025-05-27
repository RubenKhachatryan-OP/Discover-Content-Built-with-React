import styled from "styled-components"
import { BtnBlue } from "@/components/shared/Buttons.styles"

export const LoadBtn = styled(BtnBlue)`
  margin-top: 30px;
  grid-column: 1 / -1;
  height: 50px;
  border-radius: var(--imageBorderRadius);
`

export const LoadBtnText = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: rgb(var(--tmdbDarkBlue));
  }
`
