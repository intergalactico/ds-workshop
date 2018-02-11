/* Helpful imports */
import React from 'react'
import { storiesOf } from '@storybook/react'

/* The component to document */
import Box from '.';

storiesOf('Box', module)
  .add('default', () => {
    return (
      <div>
        <Box>Some text in box</Box>
        <Box color='#1b8ceb' textColor='#ffffff' tone={2}>Some text in box</Box>
        <Box color='#00d1b2' textColor='#ffffff' padding='0.4rem'>Some text in box</Box>
      </div>
    )
  })
