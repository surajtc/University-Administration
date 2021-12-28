import { ThemeProvider } from "styled-components"
import { useState } from "react"

import Topbar from "@components/Topbar"
import { Global } from "@styles/Global.styled"
import { themes } from "@styles/Theme"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Global />
        <section className="inverse-color gradient">
          <Topbar theme={theme} setTheme={setTheme} />
        </section>
        <section className="container">
          <Component {...pageProps} />
        </section>
      </ThemeProvider>
    </>
  )
}

export default MyApp
