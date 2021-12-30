import { Button } from "./styles/Button.styled"
import { useRouter } from "next/router"

export default function GoBack() {
  const router = useRouter()

  function handleClick() {
    router.back()
  }
  return (
    <Button className="inverse-color" onClick={handleClick}>
      Go Back
    </Button>
  )
}
