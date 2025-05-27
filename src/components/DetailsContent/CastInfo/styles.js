import styled from "styled-components"

export const BilledCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`

export const CastLi = styled.li`
  min-width: 140px;

  width: 33%;
  flex-basis: 33%;
  text-align: left;
  margin-bottom: 14px;
  margin-right: 0;
  box-sizing: border-box;
  padding-right: 20px;

  & p:first-of-type {
    font-weight: 700;
    font-size: 1em;
  }

  & p:last-of-type {
    font-size: 0.9em;
  }
`
