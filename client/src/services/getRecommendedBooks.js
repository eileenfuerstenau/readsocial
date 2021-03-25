export default function getRecommendedBooks() {
  return fetch('/api/recommendedbooks').then(res => res.json())
}
