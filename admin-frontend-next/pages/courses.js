import Link from "next/link"
import Course from "@components/Course"
import CourseForm from "@components/CourseForm"

import { useRouter } from "next/router"
export default function courses({ courses, count }) {
  const router = useRouter()

  return (
    <div>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>add course</h1>
      <h1>Avaliabe Courses {`(${count})`}</h1>
      <CourseForm />
      <div className="courses-grid">
        {courses.map((course, index) => {
          return (
            <Course
              key={index}
              _id={course._id}
              name={course.name}
              description={course.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/getAllCourses`)
  const { count, courses } = await res.json()

  if (!courses.length) {
    return {
      props: {
        courses: [],
      },
    }
  } else {
    return {
      props: {
        courses,
        count,
      },
    }
  }
}
