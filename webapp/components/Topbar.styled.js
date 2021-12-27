import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em 0.5em;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);

  background: ${(props) => props.theme.SecondaryBG};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.SecondaryBG} 0%,
    ${(props) => props.theme.SecondaryFG} 100%
  );
`
