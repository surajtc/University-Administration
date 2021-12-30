import { useForm } from "react-hook-form"
import { Section } from "@styles/StudentPage.styled"
import { hostURL } from "utils/getHostURL"
import { Main } from "@components/styles/Main.styled"
import GoHome from "@components/GoHome"
import GoBack from "@components/GoBack"
import { Button } from "@components/styles/Button.styled"
export default function Student({ student, courses }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const courses = Object.keys(data).map((key) => {
      return {
        _id: key,
        enrolled: data[key],
      }
    })
    const body = {
      _id: student._id,
      courses: courses,
    }
    try {
      await fetch("/api/updateCourse", {
        method: "POST",
        body: JSON.stringify(body),
        type: "application/json",
      }).then((res) => {
        // reset()
        // router.push(router.pathname)
      })
    } catch (err) {
      console.log(err)
    }
  }

  const enrolledCourses = courses.map((course) => {
    var enrolled = 0
    student.enrolled.forEach((studentEnrolled) => {
      if (studentEnrolled._id == course._id) {
        enrolled = 1
      }
    })
    return {
      enrolled,
      _id: course._id,
      name: course.name,
    }
  })
  return (
    <Main>
      <div className="students-head">
        <h1 className="gradient">Student Information</h1>
        <div className="nav-buttons">
          <GoHome />
          <GoBack />
        </div>
      </div>
      <Section>
        <div className="student-info">
          <h2>Name : {student.name}</h2>
          <h3>DOB &emsp;&nbsp; : {student.dob}</h3>
          <h3>Email &emsp;: {student.email}</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="course-update-form">
          <div>
            <h2>Enrolled Courses</h2>
            <Button className="inverse-color">Update</Button>
          </div>
          <div className="enrolled-courses">
            {enrolledCourses.map((course, index) => {
              return (
                <label key={index} htmlFor={course._id}>
                  {course.name}
                  <input
                    type="checkbox"
                    id={course._id}
                    defaultChecked={course.enrolled}
                    placeholder={course.name}
                    {...register(course._id, {})}
                  />
                  <span className="checkmark"></span>
                </label>
              )
            })}
          </div>
        </form>
      </Section>
    </Main>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${hostURL()}api/getStudent?id=${id}`)
  const { student, courses } = await res.json()

  return {
    props: {
      student,
      courses,
    },
  }
}
