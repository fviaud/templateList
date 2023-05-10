const API_COMMENTS = "https://jsonplaceholder.typicode.com/comments"

export async function getComments(rowsPerPage = 50, page = 1) {
  const response = await fetch(`${API_COMMENTS}?_limit=${rowsPerPage}&_page=${page}`, { next: { revalidate: 0 } })
  return response.json()
}
