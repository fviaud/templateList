
const API_USERS = "https://randomuser.me/api/"
export async function getUsers(rowsPerPage = 20, page = 1) {
    const response = await fetch(`${API_USERS}?results=${rowsPerPage}&page=${page}`, { next: { revalidate: 0 } })
    return response.json()
}

const API_COMMENTS = "https://jsonplaceholder.typicode.com/comments"
export async function getComments(rowsPerPage = 20, page = 1) {
    const response = await fetch(`${API_COMMENTS}?_limit=${rowsPerPage}&_page=${page}`, { next: { revalidate: 0 } })
    return response.json()
}


