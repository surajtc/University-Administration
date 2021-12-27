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
`
