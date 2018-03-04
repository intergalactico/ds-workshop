import React from 'react'
import { storiesOf } from '@storybook/react'

import Typography from '.'

/*
 * The story (documentation) for the Typography component
 * only outputs the React component. In turn, this component knows
 * what is needed to be rendered.
 */

storiesOf('Typography', module)
  .add('index', () => (
    <Typography />
  ))
