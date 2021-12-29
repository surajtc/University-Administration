import { sanityClient } from "sanity"

export default async function handler(req, res) {
  const { name, description } = JSON.parse(req.body)
  try {
    // Use our Client to create a new document in Sanity with an object
    await sanityClient.create({
      _type: "course",

      name: name,
      description: description,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: `Couldn't submit request`, err })
  }
  res.status(200).json({ message: "Course Added" })
}
