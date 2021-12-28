import Link from "next/link"
import { Div } from "./Navigation.styled"
import { MdDoubleArrow } from "react-icons/md"
export default function Navigation({ title, link }) {
  return (
    <Div>
      <Link href={link}>
        <a>
          <p>{title}</p>
          <span>
            <MdDoubleArrow />
          </span>
        </a>
      </Link>
    </Div>
  )
}
