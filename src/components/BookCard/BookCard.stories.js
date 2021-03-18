import BookCard from './BookCard'

export default {
  title: 'BookCard',
  component: BookCard,
}

const Template = args => <BookCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Schnelles Denken, langsames Denken',
  author: 'Daniel Kahneman',
  cover: '/book-cover/3.jpg',
  description:
    'Die Geschichte einer unglücklichen jungen Frau, die sterben will und erst angesichts des Todes entdeckt, wie schön das Leben sein kann, wenn man darum kämpft und etwas riskiert.',
  bookmarkedBooks: '[Becoming]',
  isDescriptionExtended: '[Herr aller Dinge]',
  nominatedBooks: [
    {
      author: 'Paulo Coelho',
      title: 'Veronika beschließt zu sterben',
      description:
        'Die Geschichte einer unglücklichen jungen Frau, die sterben will und erst angesichts des Todes entdeckt, wie schön das Leben sein kann, wenn man darum kämpft und etwas riskiert.',
      id: '21',
    },
  ],
}
