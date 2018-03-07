/* Helpful imports */
import React from 'react'
import { storiesOf } from '@storybook/react'
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info'

/* The component to document */
import Box from '.';

storiesOf('Box', module)
  .add('default',
    withInfo()(() => {
      return (
        <div>
          <Box>Some text in box</Box>
          <Box color='#1b8ceb' textColor='#ffffff' tone={2}>Some text in box</Box>
          <Box color='#00d1b2' textColor='#ffffff' padding='0.4rem'>Some text in box</Box>
        </div>
      )
  }))
