export default function getUsers() {
  return fetch('/api/nominatedbooks').then(res => res.json())
}
