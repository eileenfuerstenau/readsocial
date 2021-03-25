export default function getNominatedBooks() {
  return fetch('/api/nominatedbooks').then(res => res.json())
}
