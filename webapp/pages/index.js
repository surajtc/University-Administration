import Navigation from "@components/Navigation"
import { Main } from "@styles/Main.styled"

export default function Home() {
  return (
    <Main>
      <div className="nav-links">
        <h1 className="nav-links-title">Administration Dashboard</h1>
        <Navigation title={"List Students"} link={"/students"} />
        <Navigation title={"View Avaliable Courses"} link={"/courses"} />
      </div>
    </Main>
  )
}
