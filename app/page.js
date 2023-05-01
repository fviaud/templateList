import Users from "./tableUsers"
import { getUsers } from "./api"

async function getData() {
  const data = await getUsers()
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.results)
    }, 1000)
  })
}

export default async function Page() {
  const data = await getData()
  return (
    <>
      <Users users={data} />
    </>
  )
}
