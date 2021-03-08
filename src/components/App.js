import data from '../material/bookdata.json'
import BookCard from './BookCard'

function App() {
  data.books.map(card => (
    <BookCard
      key={card.id}
      cover={card.cover}
      title={card.title}
      author={card.author}
    />
  ))
}

export default App
