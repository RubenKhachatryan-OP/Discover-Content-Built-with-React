import styled from "styled-components"

export const SettingsPanel = styled.div`
  display: block;
  box-sizing: border-box;
  min-width: 16.25rem;
  border: 1px solid rgba(var(--lightGrey), 1);
  border-radius: var(--imageBorderRadius);
  overflow: hidden;

  h3 {
    margin: 0;
    font-size: 1.2em;
    font-weight: 600;
    padding: 1.25rem;
    color: #fff;
    background-color: rgba(var(--accountLightBlue), 1);
  }
`

export const SearchWithCounts = styled.ul`
  padding: 0.5rem 0;

  li {
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.625rem 1.25rem;
  }

  li span {
    line-height: 1.4em;
    display: inline-flex;
    align-items: center;
    font-size: 0.8em;
    font-weight: 300;
    font-family: "Roboto Mono", monospace;
    background-color: rgba(0, 0, 0, 0.08);
    padding: 0 10px;
    border-radius: 8px;
    white-space: nowrap;
  }

  & li[data-selected] {
    font-weight: 600;
    background: rgba(0, 0, 0, 0.08);
    margin: 0;
    padding: 0.625rem 1.25rem;
  }

  & li[data-selected] span {
    background-color: #fff;
    color: #000;
  }
`

export const SearchTip = styled.p`
  margin-block: 1.25rem;
  color: #666;

  img {
    position: relative;
    top: 0.375rem;
    width: 1.4em;
    height: 1.4em;
  }
`
