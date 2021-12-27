import Link from "next/link"
import { sanityClient } from "sanity"

export default function students({ students }) {
  console.log(students[0].name)

  return (
    <div>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>students</h1>
    </div>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == "student"]`
  const students = await sanityClient.fetch(query)

  if (!students.length) {
    return {
      props: {
        students: [],
      },
    }
  } else {
    return {
      props: {
        students,
      },
    }
  }
}
