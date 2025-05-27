import styled from "styled-components"

export const ContentLayout = styled.div`
  @media only screen and (width >= 36rem) {
    display: grid;
    grid-template-columns: var(--filters-width, 16.25rem) auto;
    gap: 1.875rem;
    position: relative;
  }
`
