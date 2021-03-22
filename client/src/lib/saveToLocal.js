export default function setLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
