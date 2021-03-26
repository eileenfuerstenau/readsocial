export default function submitVote(id) {
  return fetch(`/api/nominatedbooks/${id}/vote`, {
    method: 'Patch',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
