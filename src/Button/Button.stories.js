/* Helpful imports */
import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

/* The components to use in the stories */
import Box from 'Box'
import Icon from 'Icon'

/* The component to document */
import Button from '.'

storiesOf('Button', module)
  .add('index',
    withTheme(withInfo()(() => {
      return (
        <div>
          <Box>
            <Button onClick={function(){ alert('You clicked!')}}>I am just a button</Button>
          </Box>
          <Box>
            <Button color='primary' href="http://sc5.io">I am a link button</Button>
            <Button color='primary' disabled href="http://sc5.io">Disabled button with link</Button>
          </Box>
          <Box>
            <Button color='success' size='normal'>
              <Icon name='stack-overflow' />
               Button with Icon
            </Button>
          </Box>
          <Box>
            <Button color='black' label='2048'>Like</Button>
            <Button color='success' label='2048'>Like</Button>
          </Box>
        </div>
      )
  })))
  .add('colors',
    withTheme(withInfo()(() => {
      return (
        <div>
          <Box>
            <Button>Normal</Button>
            <Button color='primary'>Primary</Button>
            <Button color='success'>Success</Button>
            <Button color='danger'>Danger</Button>
            <Button color='gray'>Gray</Button>
            <Button color='gray' tone={2}>Light</Button>
            <Button color='black'>Black</Button>
          </Box>
          <Box color='success'>
            <Button as='div' isInverted>Normal</Button>
            <Button color='primary' isInverted>Primary</Button>
            <Button color='success' isInverted>Success</Button>
            <Button color='danger' isInverted>Danger</Button>
            <Button color='gray' isInverted>Gray</Button>
            <Button color='gray' tone={2} isInverted>Light</Button>
            <Button color='black' isInverted>Black</Button>
          </Box>
          <Box>
            <Button color='primary' isOutlined>Primary</Button>
            <Button color='success' isOutlined>Success</Button>
            <Button color='danger' isOutlined>Danger</Button>
            <Button color='gray' isOutlined>Grayscale</Button>
            <Button color='black' isOutlined>Black</Button>
          </Box>
        </div>
      )
    })))
  .add('with different size',
    withTheme(withInfo()(() => {
      return (
        <Box>
          <Button color='primary' size='tiny'>Tiny</Button>
          <Button color='success' size='small'>Small</Button>
          <Button color='danger' size='normal'>Normal</Button>
          <Button color='gray' size='large'>Large</Button>
          <Button color='black' size='xlarge'>XLarge</Button>
        </Box>
    )
  })))
  .add('with icon',
    withTheme(withInfo()(() => {
    return (
      <Box>
        <Button color='primary' size='normal'>
          <Icon name='star' />
          Some text
        </Button>
        <Button color='success' size='small' isOutlined>
          <Icon name='star' />
          Some text
        </Button>
        <Button color='gray' tone={2} size='normal' isIcon>
          <Icon name='stack-overflow' />
        </Button>
      </Box>
    )
  })))
