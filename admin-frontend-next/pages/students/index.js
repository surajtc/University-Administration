import Link from "next/link"

import Student from "@components/Student"
import Pager from "@components/Pager"

import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function students({ page, students }) {
  const { data, error } = useSWR("/api/hello", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  // console.log(page.count)
  return (
    <div>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>Found total {page.count} records</h1>
      <Pager page={page} />
      <div className="student-list">
        {students.map((student, index) => {
          return <Student key={index} student={student} />
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { from, to } = context.query
  const res = await fetch(
    `http://localhost:3000/api/getAllStudents?from=${from}&to=${to}`
  )
  const { count, students } = await res.json()
  const page = {
    count: count,
    from: from,
    to: to,
  }
  if (!students.length) {
    return {
      props: {
        students: [],
      },
    }
  } else {
    return {
      props: {
        students,
        page,
      },
    }
  }
}
