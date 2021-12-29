import styled from "styled-components"

export const Div = styled.div`
  .page-selector {
    width: 80%;
    margin: 0 auto;
    color: inherit;
    background-color: inherit;
  }
  [class*="menu"] {
    background-color: ${(props) => props.theme.PrimaryBG};
    color: ${(props) => props.theme.PrimaryFG};
  }
  [class*="option"] {
    /* background-color: ${(props) => props.theme.PrimaryBG}; */
  }
  [class*="container"] {
    border-color: none;
    outline: none;
  }
  [class*="control"] {
    &:focus-visible {
      outline-color: ${(props) => props.theme.PrimaryFG};
    }
  }
  #react-select-3-live-region:focus {
    border-color: yellow;
  }
`
