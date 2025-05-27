import styled from "styled-components"

export const Btn = styled.button`
  all: unset;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  line-height: 100%;
  width: fit-content;
`

export const BtnBlue = styled(Btn)`
  height: 44px;
  border-radius: 20px;
  min-width: var(--filters-width, 16.25rem);
  width: 100%;
  align-content: center;
  color: var(--white, #fff);
  background: rgb(var(--tmdbLightBlue, (0, 118, 241)));
`
