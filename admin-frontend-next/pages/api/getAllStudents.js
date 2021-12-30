import { sanityClient } from "sanity"

export default async function handler(req, res) {
  const { from, to } = req.query
  const count = await sanityClient.fetch(`count(*[_type=='student'])`)
  const query = `*[_type=='student'][${from}...${to}]{_id, name, email, "enrolled": count(enrolled)}`
  const students = await sanityClient.fetch(query)
  const response = {
    count,
    students,
  }

  res.status(200).json(response)
}
