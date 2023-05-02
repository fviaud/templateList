import Table from "./table"
import { getComments } from "./api"

async function getData() {
  const data = await getComments()
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

export default async function Page() {
  const data = await getData()
  return <Table data={data} />
}
