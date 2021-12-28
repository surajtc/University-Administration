import Link from "next/link"

import { Header } from "./Topbar.styled"
import ThemeSwitch from "@styles/ThemeSwitch"

export default function Topbar({ theme, setTheme }) {
  return (
    <Header className="container">
      <Link href="/">
        <a>
          <h1>BU.</h1>
        </a>
      </Link>
      <ThemeSwitch theme={theme} setTheme={setTheme} />
    </Header>
  )
}
