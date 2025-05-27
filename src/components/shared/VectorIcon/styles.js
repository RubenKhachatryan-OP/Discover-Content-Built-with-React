import styled from "styled-components"

export const VectorIcon = styled.img`
  width: ${(props) => props.$size ?? "1.4em"};
  height: ${(props) => props.$size ?? "1.4em"};
  filter: invert(${(props) => (props.$invert ? "100%" : "0%")});
`
