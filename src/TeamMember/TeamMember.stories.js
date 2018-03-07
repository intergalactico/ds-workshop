/*
 * The stories (documentation) for the TeamMember component render two different
 * cases: with and without providing a list of social networks.
 */

import React from 'react'
import { storiesOf } from '@storybook/react'
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info'

import TeamMember from '.'

const avatar = require('../../assets/avatar.jpg')

storiesOf('TeamMember', module)
  .add('index',
    withInfo()(() => (
      <TeamMember
        name="Mikko Häkkinen"
        title="Main Organizer"
        social={{
          twitter: 'mikkohakkinen',
          linkedin: 'https://linkedin.com/in/mikkohakkinen'
        }}
        avatar={avatar}
      />
  )))
  .add('no social networks',
    withInfo()(() => (
      <TeamMember
        name="Mikko Häkkinen"
        title="Main Organizer"
      />
  )))
