import Head from "next/head"
import Student from "@components/Student"
import Pager from "@components/Pager"

import GoBack from "@components/GoBack"
import GoHome from "@components/GoHome"

import { Main } from "@components/styles/Main.styled"

import { hostURL } from "utils/getHostURL"

export default function students({ page, students }) {
  return (
    <Main>
      <Head>
        <title>Students | My University</title>
      </Head>
      <div className="students-head">
        <h1 className="gradient">List of All Students</h1>
        <div className="nav-buttons">
          <GoHome />
          <GoBack />
        </div>
      </div>

      <Pager page={page} />
      <div className="students-list">
        {students.map((student, index) => {
          return <Student key={index} student={student} />
        })}
      </div>
    </Main>
  )
}

export async function getServerSideProps(context) {
  const { from, to } = context.query
  const res = await fetch(
    `${hostURL()}api/getAllStudents?from=${from}&to=${to}`
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
