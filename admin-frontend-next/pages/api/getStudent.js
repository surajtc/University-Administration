import { sanityClient } from "sanity"

export default async function handler(req, res) {
  const { id } = req.query
  console.log("api", id)
  const query = `*[_id=="${id}"]{_id, name, dob, email, "enrolled": enrolled[]->{ _id, name }}`
  const response = await sanityClient.fetch(query)
  const student = response[0]
  const courses = await sanityClient.fetch(`*[_type=="course"]{_id, name}`)
  res.status(200).json({ student, courses })
}
