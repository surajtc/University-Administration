import { useForm } from "react-hook-form"
import { Section } from "@styles/StudentPage.styled"
import { hostURL } from "utils/getHostURL"

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
    console.log(body)
    try {
      await fetch("/api/updateCourse", {
        method: "POST",
        body: JSON.stringify(body),
        type: "application/json",
      }).then((res) => {
        console.log(res.json())
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
    <Section>
      <div className="student-info">
        <h2>{student.name}</h2>
        <h3>{student.dob}</h3>
        <h3>{student.email}</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="course-update-form">
        <div>
          <h3>Enrolled Courses</h3>
          <button className="btn">Update</button>
        </div>

        <div>
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
