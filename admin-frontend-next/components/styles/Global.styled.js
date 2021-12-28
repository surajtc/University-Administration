import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
body{
    min-height: 100vh;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.PrimaryFG};
    background-color: ${(props) => props.theme.PrimaryBG};
}

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    transition: color 100ms ease-in-out, 
                background-color 100ms ease-in-out;
}
a {
    color: inherit;
    text-decoration: none;
  }
.container{
  width: auto;
  max-width: 992px;
  min-width: 320px;
  padding: 0 0.5rem;
  margin: 0 auto;
  }

.inverse-color{
    background-color: ${(props) => props.theme.PrimaryFG};
    color: ${(props) => props.theme.PrimaryBG};
}
.gradient{
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);

background: ${(props) => props.theme.SecondaryBG};
background: linear-gradient(
  90deg,
  ${(props) => props.theme.SecondaryBG} 0%,
  ${(props) => props.theme.SecondaryFG} 100%
);
}

.courses-grid{
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1em .5em;
}
`
