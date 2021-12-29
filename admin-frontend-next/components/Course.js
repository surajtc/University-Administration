import { MdDelete } from "react-icons/md"
import { Section } from "./Course.styled"
import { useRouter } from "next/router"

export default function Course({ _id, name, description }) {
  const router = useRouter()
  async function test() {
    console.log(_id)
    const res = await fetch(`http://localhost:3000/api/deleteCourse?id=${_id}`)
    console.log(res)
    router.replace(router.pathname)
  }

  return (
    <Section>
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="delete-btn" onClick={test}>
        <MdDelete />
      </button>
    </Section>
  )
}
