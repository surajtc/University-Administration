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

    transition: color 50ms ease-out, 
                background-color 50ms ease-out, 
                background 50ms ease-out;
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

background: ${(props) => props.theme.SecondaryBG};
background: linear-gradient(
  90deg,
  ${(props) => props.theme.SecondaryBG} 0%,
  ${(props) => props.theme.SecondaryFG} 100%
);
}


.btn{
  padding: .25em .75em;
  font-family: inherit;
  font-weight: 500;
  font-size: inherit;
  cursor: pointer;
  color: inherit;
  background-color: inherit;
  border: none;
  border-radius: 0.125em;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);
  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 40%);
  }
  &:active{
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 30%);

  }
}
`
