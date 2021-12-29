import { sanityClient } from "sanity"

export default async function handler(req, res) {
  const { id } = req.query
  try {
    // Use our Client to create a new document in Sanity with an object
    await sanityClient.delete(id)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: `Couldn't submit request`, err })
  }
  res.status(200).json({ message: "Course Deleted" })
}
