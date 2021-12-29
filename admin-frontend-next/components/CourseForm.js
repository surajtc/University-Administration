import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { Section } from "./CourseForm.styled"

export default function CourseForm() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await fetch("/api/addCourse", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      }).then((res) => {
        console.log(res.json(), router.pathname)
        reset()
        router.push(router.pathname)
      })
    } catch (err) {
      console.log(err)
    }
  }

  //   console.log(watch("description")) // watch input value by passing the name of it

  return (
    <Section>
      <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            name="course"
            placeholder="Course Name"
            {...register("name", { required: true })}
          />
          <input type="submit" />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Course Description"
            rows="4"
            {...register("description", { required: true })}
          ></textarea>
          {(errors.description || errors.course) && (
            <span>All fields are required</span>
          )}
        </div>
      </form>
    </Section>
  )
}
