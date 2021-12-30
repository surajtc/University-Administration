import Course from "@components/Course"
import CourseForm from "@components/CourseForm"
import { hostURL } from "utils/getHostURL"
import GoHome from "@components/GoHome"
import GoBack from "@components/GoBack"
import { Main } from "@components/styles/Main.styled"

export default function courses({ courses, count }) {
  return (
    <Main>
      <div className="students-head">
        <h1 className="gradient">List of Courses</h1>
        <div className="nav-buttons">
          <GoHome />
          <GoBack />
        </div>
      </div>

      <div className="courses">
        <h1>Add a Course</h1>
        <CourseForm />
        <h1>Avaliabe Courses {`(${count})`}</h1>
        <p className="red">
          NOTE : A courses can be deleted only if no students are enrolled to
          it.
        </p>
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
    </Main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${hostURL()}api/getAllCourses`)
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
