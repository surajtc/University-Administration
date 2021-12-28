import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  h1 {
    padding: 0.5em 0.125em;
  }
  .nav-right {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 1em;
  }
`
