export default function saveNominatedBook(
  id,
  title,
  author,
  description,
  isbn
) {
  return fetch('/api/nominatedbooks', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ id, title, author, description, isbn }),
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
