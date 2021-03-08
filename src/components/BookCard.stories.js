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
}
