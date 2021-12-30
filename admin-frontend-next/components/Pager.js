import { Div } from "./Pager.styled"
import Link from "next/link"
import Select from "react-select"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Pager({ page }) {
  const pageFrom = parseInt(page.from) + 1
  const pageTo = page.to < page.count ? page.to : page.count
  function createPages(page) {
    const pageLength = page.to - page.from
    const totalPages = parseInt(
      page.count % pageLength == 0
        ? page.count / pageLength
        : page.count / pageLength + 1
    )
    var pages = []
    for (let i = 0; i < totalPages; i++) {
      var element = {}
      element.start = i * pageLength + 1
      element.end = (i + 1) * pageLength
      element.index = i + 1

      pages.push(element)
    }
    return pages
  }
  const pages = createPages(page)
  const options = pages.map((page) => {
    var url = `/students?from=${page.start - 1}&to=${page.end}`
    return {
      value: url,
      label: `Page ${page.index}`,
    }
  })
  //   console.log(pages)

  const [selectedPage, setSelectedPage] = useState(options[0])
  const router = useRouter()
  function fetchPage(page) {
    router.push(page.value)
    setSelectedPage(page)
  }
  return (
    <Div>
      <div>
        <h1>Found {page.count} Records</h1>
        <h3 className="stats">
          Dispalying results {pageFrom} to {pageTo} out of {page.count}
        </h3>
      </div>
      <div className="page-selector">
        <Select
          defaultValue={selectedPage}
          options={options}
          onChange={fetchPage}
        />
      </div>
    </Div>
  )
}
