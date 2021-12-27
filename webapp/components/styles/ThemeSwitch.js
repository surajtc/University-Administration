import styled from "styled-components"
import { useState } from "react"

import { FaSun, FaMoon } from "react-icons/fa"

const Div = styled.div`
  display: grid;
  place-items: center;
  input {
    visibility: hidden;
    height: 0;
    width: 0;
    position: absolute;
  }

  span {
    font-size: 1.125rem;
    display: grid;
    place-items: center;
    transition: transform 100ms ease-in-out;
  }
  input:checked + label > span {
    transform: rotate(-120deg);
  }
  label {
    width: 100%;
    height: 1rem;
    display: inline-block;
    border-radius: 1rem;
  }
`

export default function ThemeSwitch({ theme, setTheme }) {
  const [switchIcon, changeIcon] = useState(<FaSun />)

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark")
      changeIcon(<FaMoon />)
    } else {
      setTheme("light")
      changeIcon(<FaSun />)
    }
  }
  return (
    <Div>
      <input type="checkbox" onChange={toggleTheme} id="switch" />
      <label htmlFor="switch">
        <span>{switchIcon}</span>
      </label>
    </Div>
  )
}
