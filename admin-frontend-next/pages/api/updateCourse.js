import { sanityClient } from "sanity"
import { nanoid } from "nanoid"

export default async function handler(req, res) {
  const { _id, courses } = JSON.parse(req.body)
  const enrolled = courses
    .map((course) => {
      if (course.enrolled) {
        return {
          _key: nanoid(),
          _ref: course._id,
          _type: "reference",
        }
      }
    })
    .filter((course) => {
      return course !== undefined
    })

  sanityClient
    .patch(_id)
    .set({ enrolled: enrolled })
    .commit()
    .then((doc) => {
      console.log("Updated : \n", doc)
    })

  res.status(200).json({ message: "Course Added" })
}
