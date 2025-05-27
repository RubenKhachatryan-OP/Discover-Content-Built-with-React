import styled from "styled-components"

export const SubLink = styled.li`
  font-weight: 400;
  font-size: 0.9em;
  color: #000;
  padding: 0.5rem 3rem 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: #212529;
    background-color: #dee2e6;
  }
`

export const SubNavHoverDeck = styled.div`
  position: absolute;
  background-color: #fff;
  display: none;

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid rgba(33, 37, 41, 0.2);
  border-radius: 0.375rem;
  top: calc(100% - 0.33rem);
  padding-block: 0.33rem;

  &:hover {
    display: block;
  }
`

/*  Details 
    site 
    styles */
export const DetailsNavbar = styled.nav`
  width: 100%;
  margin: var(--header) auto 0;
  height: 46px;
  background-color: #fff;
  overflow-x: auto;
`

export const DetailsNav = styled.ul`
  display: flex;
  gap: 1.25rem;
  margin-right: 3rem;
`

export const SubNavLink = styled.li`
  padding: 0.6rem 0.5rem;
  gap: 0.5rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover div,
  &:focus-within div {
    display: block;
  }
`

export const BilledCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const CastLi = styled.li`
  
`