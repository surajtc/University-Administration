import styled from "styled-components"

export const Div = styled.div`
  min-width: 15rem;
  position: relative;
  border-radius: 0.125em;
  font-size: 1.75rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
  transition: box-shadow 100ms ease-in-out;
  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 40%);

    &::after {
      content: ">";
      font-weight: 700;
      position: absolute;
      padding-right: 0.75em;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      animation: fade-in 200ms ease-in forwards;
    }
  }
  &:active {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
  }
  a {
    width: 100%;
    display: block;
    height: 100%;
    padding: 0.5em;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
