import styled, { keyframes } from "styled-components"

// Create the keyframes
const fill = keyframes`
  from {
    transform: translate(-100%, 0);
  }

  to {
    transform: translate(0, 0);
  }
`

export const LoadBar = styled.div`
  height: 0.2rem;
  width: 100vw;
  background: rgb(var(--tmdbLightBlue));
  position: fixed;
  transform: translate(-100%, 0);
  animation: ${fill} 1s linear infinite backwards;
  top: 0;
  left: 0;
  z-index: 1000;
`
