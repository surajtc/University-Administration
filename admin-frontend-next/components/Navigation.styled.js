import styled from "styled-components"

export const Div = styled.div`
  min-width: 15rem;
  position: relative;
  border-radius: 0.125em;
  overflow: hidden;
  font-size: 1.75rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
  transition: box-shadow 100ms ease-in-out;
  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 40%);
    span {
      background-color: ${(props) => props.theme.PrimaryFG};
    }
  }
  &:active {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
  }
  a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    p {
      padding: 0.5em;
    }
    span {
      display: grid;
      place-items: center;
      padding: 0.5em;
      height: 100%;
      color: ${(props) => props.theme.PrimaryBG};
    }
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
