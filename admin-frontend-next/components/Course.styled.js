import styled from "styled-components"

export const Section = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, auto); */
  position: relative;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
  border-radius: 0.125em;
  overflow: hidden;
  padding: 0.75em;
  grid-template-rows: min-content;
  gap: 0.5em;
  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 40%);
  }
  .delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em 0.25em;
    font-size: 1.25rem;
    background-color: inherit;
    border: none;
    cursor: pointer;
    color: inherit;
    &:hover {
      color: red;
    }
  }
`
