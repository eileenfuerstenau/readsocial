export default function getUsers() {
  return fetch('/api/recommendedbooks').then(res => res.json())
}
