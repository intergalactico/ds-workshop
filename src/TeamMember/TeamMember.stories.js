import React from 'react'
import { storiesOf } from '@storybook/react'

import TeamMember from '.'

const avatar = require('../../assets/avatar.jpg')

storiesOf('TeamMember', module)
  .add('index', () => (
    <TeamMember
        name="Mikko Häkkinen"
        title="Main Organizer"
        social={{
          twitter: 'mikkohakkinen',
          linkedin: 'https://linkedin.com/in/mikkohakkinen'
        }}
        avatar={avatar}
      />
  ))
  .add('no social networks', () => (
    <TeamMember
        name="Mikko Häkkinen"
        title="Main Organizer"
      />
  ))
