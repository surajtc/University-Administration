import styled from "styled-components"

export const Section = styled.section`
  .course-form {
    display: grid;
    width: 100%;
    gap: 0.5em;
    span {
      color: red;
    }
    & > div {
      display: grid;
      gap: 0.5em;
      input,
      textarea {
        padding: 0.75em 0.5em;
        font-family: inherit;
        font-weight: 600;
        border-radius: 0.125em;
        border-style: none;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
      }
      &:first-of-type {
        grid-template-columns: 4fr 1fr;
      }
    }
  }
`
