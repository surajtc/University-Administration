import Link from "next/link"
import { Div } from "./Navigation.styled"

export default function Navigation({ title, link }) {
  return (
    <Div>
      <Link href={link}>
        <a> {title} </a>
      </Link>
    </Div>
  )
}
