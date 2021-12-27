import { Global } from "@styles/Global.styled"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
