export default function postNominatedBook(
  id,
  title,
  author,
  description,
  votes
) {
  return fetch('/api/nominatedbooks', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ id, title, author, description, votes }),
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
