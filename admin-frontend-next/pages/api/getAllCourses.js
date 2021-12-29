import { sanityClient } from "sanity"

export default async function handler(req, res) {
  const count = await sanityClient.fetch(`count(*[_type=='course'])`)

  const query = `*[_type=='course']{_id, name, description}`
  const courses = await sanityClient.fetch(query)
  const response = {
    count,
    courses,
  }

  res.status(200).json(response)
}
