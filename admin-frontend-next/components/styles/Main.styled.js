import styled from "styled-components"

export const Main = styled.main`
  padding: 1em 0;
  .index-head {
    display: grid;
    place-items: center;
    font-weight: 500;
    span {
      text-align: center;
      font-weight: 800;
      display: block;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .nav-links {
    display: grid;
    gap: 1em;
  }
  .nav-links-title {
    text-align: center;
    font-weight: 700;
    margin-top: 2em;
    border-radius: 0.125em;
    padding: 0.25em 0;
    /* background: linear-gradient(
      45deg,
      ${(props) => props.theme.SecondaryBG} 0%,
      ${(props) => props.theme.SecondaryFG} 100%
    ); */
    /* background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }

  .students-head {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-auto-flow: row;
    padding: 1em 0 3em 0;
    & > div {
      display: flex;
      gap: 1em;
      grid-row: 1 / 2;
    }
    h1 {
      font-size: 2rem;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .students-list {
    padding: 0.5em 0;
  }
  .courses {
    display: grid;
    gap: 1em;
  }
  .courses-grid {
    display: grid;
    gap: 1em 0.5em;
  }
  .nav-buttons {
    visibility: hidden;
  }
  .red {
    color: red;
  }
  @media only screen and (min-width: 600px) {
    .nav-links {
      grid-template-columns: repeat(2, 1fr);
      justify-items: stretch;
    }
    .index-head {
      font-size: 3rem;
      margin-top: min(15em, 20vh);
    }
    .nav-links-title {
      font-size: 2.5rem;
      grid-column: 1 / 3;
      margin-top: 1em;
      align-self: end;
    }
    .students-head {
      grid-auto-flow: column;
      justify-content: space-between;
    }
    .courses-grid {
      grid-template-columns: repeat(2, auto);
    }
    .nav-buttons {
      visibility: visible;
    }
  }
`
