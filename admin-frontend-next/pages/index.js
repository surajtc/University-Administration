import Navigation from "@components/Navigation"
import { Main } from "@styles/Main.styled"

export default function Home() {
  return (
    <Main>
      <ul>
        <li>go back / home component next router</li>
      </ul>
      <div className="nav-links">
        <h1 className="nav-links-title">Administration Dashboard</h1>
        <Navigation
          title={"List of All Students"}
          link={"/students?from=0&to=5"}
        />
        <Navigation title={"View Avaliable Courses"} link={"/courses"} />
      </div>
    </Main>
  )
}
