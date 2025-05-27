import styled from "styled-components"

export const DetailsOverview = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`

export const HeaderInfo = styled.div`
  padding-block: 1.25rem;

  & h3 {
    margin: 10px 0 8px;
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 8px;
  }

  & h4.tagline {
    margin-bottom: 0;
    font-size: 1.1em;
    font-weight: 400;
    font-style: italic;
    opacity: 0.7;
  }
`

export const Shuffler = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (${(props) => props.theme.device.tablet}) {
    & .facts {
      order: -1;
      justify-content: flex-start;
      margin-bottom: 1.5rem;
    }
  }
`

export const Vibe = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (${(props) => props.theme.device.tablet}) {
    padding: 0.5rem 0.5rem 0.5rem 0.75rem;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    background-color: rgba(3, 37, 65, 1);
    border-radius: 9999px;
  }
`
