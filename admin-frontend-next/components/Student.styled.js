import styled from "styled-components"

export const Section = styled.section`
  .student-grid {
    display: grid;

    grid-template-columns: repeat(2, minmax(auto, 4fr)) minmax(auto, 4rem) minmax(
        auto,
        3rem
      );
    & > * {
      padding: 0.5em;
      border-inline-end: 1px solid;

      &:nth-of-type(3) {
        border: none;
        text-align: center;
      }
    }

    span {
      border: none;
      display: grid;
      place-items: center;
    }
  }
  border-radius: 0.125em;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);

  overflow: hidden;
  /* text-align: center; */
  margin: 0.75em 0;

  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 40%);
    span {
      color: ${(props) => props.theme.PrimaryBG};
      background-color: ${(props) => props.theme.PrimaryFG};
    }
  }

  @media only screen and (min-width: 600px) {
    width: 80%;
    margin: 0.75em auto;
  }
`
