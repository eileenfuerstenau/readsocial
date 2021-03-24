export default function deleteBook(id) {
  return fetch(`/api/nominatedbooks/${id}`, {
    method: 'Delete',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
