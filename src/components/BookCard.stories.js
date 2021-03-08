import BookCard from './BookCard'

export default {
  title: 'BookCard',
  component: BookCard,
}

const Template = args => <BookCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Book1',
  author: 'Max Mustermann',
}
