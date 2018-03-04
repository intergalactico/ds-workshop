/*
 * The stories (documentaion) can also be used without React component and
 * without styled-component. In here, you can see that a color set is
 * defined as an JavaScript Object. There is no React component for that and
 * no styles. But this story demonstrates how to import the set of colors
 * and use its values.
 * Similarly, the values can be used in styled-components. Look into the styles
 * of the TeamMember componet as an instance.
 */

import React from 'react'
import { storiesOf } from '@storybook/react'

/* The components to use in the stories */
import Box from '../Box'

import set from './colorset'

storiesOf('Colors', module)
  .add('index', () => {
    const colorItems = Object.keys(set).map(key => {

      return(<Box color={set[key]}>{key}</Box>)
    })
    return (
      <div>
        {colorItems}
      </div>
    )
  })
