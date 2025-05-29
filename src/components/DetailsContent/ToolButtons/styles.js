import styled, { css } from "styled-components"
import { Btn } from "@/components/shared/Btn"

export const ButtonsContainer = styled.div`
  @media only screen and (${(props) => props.theme.device.phone}) {
    position: fixed;
    bottom: 0;
    left: 0;
    height: auto;
    z-index: 2;
    margin-bottom: 0;
    background: rgba(var(--tmdbDarkBlue), 0.8);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    flex-wrap: wrap;
    transition: padding-bottom 0.3s;
    width: 100%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
  }

  @media only screen and (${(props) => props.theme.device.tablet}) {
    margin-bottom: 20px;
    /* width: 100%; */
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`

export const DarkBlueBtn = styled(Btn)`
  width: 50px;
  height: 50px;
  font-size: 1.2em;

  @media only screen and (${(props) => props.theme.device.tablet}) {
    box-sizing: border-box;
    background: rgba(var(--tmdbDarkBlue), 1);
    border-radius: 50%;
    width: 46px;
    height: 46px;
    padding: 3px 0;
    margin-right: 1.25rem;

    ${(props) =>
      props.$hideL &&
      css`
        display: none;
      `}
  }
`
