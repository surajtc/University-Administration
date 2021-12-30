import styled from "styled-components"

export const Section = styled.section`
  .student-info {
    display: grid;
    gap: 0.5em;
    padding: 1em 0;
  }
  .course-update-form {
    margin: 0 auto;

    & > div:first-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        padding: 0.5em 0;
      }
    }

    & > div:last-of-type {
      display: grid;
      gap: 0.25em;
    }
    label {
      font-size: 1rem;
      cursor: pointer;
      position: relative;
      font-weight: 500;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      padding: 0 2rem;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .checkmark {
        position: absolute;
        top: 50%;
        right: 0;
        margin-right: 2em;
        transform: translateY(-50%);
        height: 1em;
        width: 1em;
        background-color: inherit;
        border: 2px solid;
      }
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      & .checkmark:after {
        left: 0.25em;
        top: 0;
        width: 5px;
        height: 12px;
        border: solid ${(props) => props.theme.PrimaryBG};
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      & input:checked ~ .checkmark:after {
        display: block;
      }
      &:hover input ~ .checkmark {
        background-color: ${(props) => props.theme.PrimaryFG};
      }
      & input:checked ~ .checkmark {
        background-color: ${(props) => props.theme.PrimaryFG};
      }
    }
  }
  .enrolled-courses {
    display: grid;
    padding-top: 1em;
    label {
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
      padding: 0.5em;
      margin-block: 0.25em;

      &:hover {
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 40%);
      }
      &:active {
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
      }
    }
  }
  @media only screen and (min-width: 600px) {
    .course-update-form {
      label {
        font-size: 1.25rem;
      }
    }
  }
`
