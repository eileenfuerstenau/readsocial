import React from 'react'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const HeaderWithSubtitle = Template.bind({})

HeaderWithSubtitle.args = {
  title: 'Lass dich inspirieren',
}
