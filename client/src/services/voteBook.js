export default function voteBook(id) {
  return fetch(`/api/nominatedbooks/${id}/vote`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
