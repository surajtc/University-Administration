import styled from "styled-components"

export const Main = styled.main`
  padding: 1em 0;
  .nav-links {
    display: grid;
    gap: 1em;
  }
  .nav-links-title {
    text-align: center;
    font-weight: 700;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.SecondaryBG} 0%,
      ${(props) => props.theme.SecondaryFG} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (min-width: 600px) {
    .nav-links {
      grid-template-columns: repeat(2, 1fr);
      justify-items: stretch;
    }

    .nav-links-title {
      font-size: 2.5rem;
      padding-top: min(15em, 20vh);
      grid-column: 1 / 3;
      align-self: end;
    }
  }
`
