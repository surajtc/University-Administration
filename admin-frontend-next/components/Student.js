import { MdDoubleArrow } from "react-icons/md"
import { Section } from "./Student.styled"
import Link from "next/link"

export default function Student({ student }) {
  const link = `students/${student.name}`
  return (
    <Section>
      <Link href={link}>
        <a className="student-grid">
          <h3>{student.name}</h3>
          <h3>{student.email}</h3>
          <h3>{student.enrolled}</h3>
          <span>
            <MdDoubleArrow />
          </span>
        </a>
      </Link>
    </Section>
  )
}
