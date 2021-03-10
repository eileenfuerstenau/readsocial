import BookCard from './BookCard'

export default {
  title: 'BookCard',
  component: BookCard,
}

const Template = args => <BookCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Title of Book',
  author: 'Max Mustermann',
  cover: '/book-cover/2.jpg',
  description:
    'Als Hemingway 1956 nach Paris zurückkehrte, ließ er sich aus dem Keller des Hotel Ritz seine alten Koffer bringen. Sie enthielten Tagebücher und Notizen aus seiner Zeit als Auslandskorrespondent. Aus diesen Aufzeichnungen formte Hemingway den Roman seiner Pariser Jahre. Für ihn war es eine glückliche, prägende Zeit, als er an der Seine angelte, bescheidene Gewinne beim Pferderennen in Champagner umsetzte, mit Gertrude Stein, James Joyce, Ezra Pound und Scott F. Fitzgerald zusammentraf.',
}
