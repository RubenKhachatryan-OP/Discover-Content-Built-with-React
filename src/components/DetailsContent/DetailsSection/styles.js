import styled from "styled-components"
import { BACK_URL } from "./constants"

export const DetailsSection = styled.div`
  padding: 1.25rem;
  background-color: rgb(${(props) => props.$back_color});
  background: linear-gradient(
      to right,
      rgba(${(props) => props.$back_color}, 1) calc((50vw - 170px) - 340px),
      rgba(${(props) => props.$back_color}, 0.84) 50%,
      rgba(${(props) => props.$back_color}, 0.84) 100%
    ),
    url(${BACK_URL}${(props) => props.$backdrop_path})
      calc((((100vw / 2.222222) - 20px) / 1.5) / 2) 0 / 100%
      calc((100vw / 2.222222) + 2.5rem) no-repeat;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;

  & span.certification {
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
    white-space: nowrap;
    padding: 0.06em 4px 0.15em !important;
    line-height: 1;
    border-radius: 2px;
    margin-right: 7px;
  }

  @media screen and (${(props) => props.theme.device.tablet}) {
    padding: 1.875rem 2.5rem;
    background-size: 100% calc((100vw / 2.222222) + 3.75rem);
    flex-direction: row;
    gap: 2.5rem;
  }
`
