import Navigation from "@components/Navigation"
import { Main } from "@styles/Main.styled"
import Head from "next/head"

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Welcome to My University</title>
      </Head>
      <h1 className="index-head">
        Welcome to <span className="gradient">MY UNIVERSITY.</span>
      </h1>
      <div className="nav-links">
        <h1 className="nav-links-title inverse-color">Admin Dashboard</h1>
        <Navigation
          title={"List of All Students"}
          link={"/students?from=0&to=5"}
        />
        <Navigation title={"View Avaliable Courses"} link={"/courses"} />
      </div>
    </Main>
  )
}
