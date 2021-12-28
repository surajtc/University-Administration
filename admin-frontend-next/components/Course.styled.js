import styled from "styled-components"

export const Section = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, auto); */
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
  border-radius: 0.125em;
  overflow: hidden;
  padding: 0.75em;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 40%);
  }
`
