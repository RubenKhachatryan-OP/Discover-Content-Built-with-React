import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: relative;

  & div.header-container {
    padding-inline: 2.5rem;
  }

  & div.ac_results {
    width: 100%;
  }

  & .nav-center {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    flex: 1 0;
  }

  & .nav-droite {
    justify-self: end;
    justify-content: flex-end;
    gap: 0.875rem;
  }
`

export const HeaderNavbar = styled.nav`
  @media only screen and (${(props) => props.theme.device.phone}) {
    display: inline-block;
    position: fixed;
    top: var(--header);
    left: -90%;
    width: 90%;
    height: 100vh;
    background: rgba(var(--tmdbDarkBlue), 0.9);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    z-index: 10;
    transition: ease 0.3s;
    padding: 1.25rem;
    box-sizing: border-box;
    overflow-y: auto;

    &.show {
      left: 0;
    }
  }

  @media only screen and (${(props) => props.theme.device.tablet}) {
    font-weight: 600;
    flex: 5 0;
    margin-right: auto;

    & > ul,
    & ul.horizontal {
      display: flex;
      gap: 0.9375rem;
    }
  }
`
