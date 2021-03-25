export default function saveNominatedBook(id, title, author, description) {
  return fetch('/api/nominatedbooks', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ id, title, author, description }),
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
