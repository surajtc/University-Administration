import { Button } from "./styles/Button.styled"
import { useRouter } from "next/router"

export default function GoHome() {
  const router = useRouter()

  function handleClick() {
    router.push("/")
  }
  return (
    <Button className="inverse-color" onClick={handleClick}>
      Home
    </Button>
  )
}
