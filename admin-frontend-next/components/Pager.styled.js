import styled from "styled-components"

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  h3 {
    font-weight: normal;
  }
  .page-selector {
    color: inherit;
    background-color: inherit;
  }
  [class*="menu"] {
    background-color: ${(props) => props.theme.PrimaryBG};
    color: ${(props) => props.theme.PrimaryFG};
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
  .stats {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    .stats {
      display: block;
    }
  }
`
