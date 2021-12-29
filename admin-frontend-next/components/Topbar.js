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
      <div className="nav-right">
        <Link href="/students?from=0&to=5">
          <a>Students</a>
        </Link>
        <Link href="/courses">
          <a>Courses</a>
        </Link>
        <ThemeSwitch theme={theme} setTheme={setTheme} />
      </div>
    </Header>
  )
}
