import Link from "next/link"
import Course from "@components/Course"

export default function courses() {
  return (
    <div>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>add course</h1>
      <h1>Courses</h1>

      <div className="courses-grid">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  )
}
