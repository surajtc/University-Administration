import styled from "styled-components"

export const Button = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 0.75rem;

  border: none;
  border-radius: 0.125em;

  cursor: pointer;
  padding: 0.5em 0.75em;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);

  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 40%);
  }
  &:active {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
  }

  @media only screen and (min-width: 600px) {
    font-size: inherit;
  }
`
