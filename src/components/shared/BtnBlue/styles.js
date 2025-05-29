import styled from "styled-components"
import { Btn } from "@components/shared/Btn/styles"

export const BtnBlue = styled(Btn)`
  height: 44px;
  border-radius: 20px;
  min-width: var(--filters-width, 16.25rem);
  width: 100%;
  align-content: center;
  color: var(--white, #fff);
  background: rgb(var(--tmdbLightBlue, (0, 118, 241)));
`
