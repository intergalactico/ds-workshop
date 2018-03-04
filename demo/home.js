/*
 * Each page is in fact a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Icon } from '../lib/my-awesome-library'

const Home = () => {
  return (
    <div>
      <Icon name='star' color='#000' isInverted size='0.785rem' />
      <Icon name='star' color='#888888' isInverted />
      <Icon name='github' color='#1b8ceb'isInverted size='1.5rem' />
      <Icon name='gift' color='#00d1b2' isInverted size='2.0rem' />
      <Icon name='bug' color='#e91e63' isInverted size='3rem' />
    </div>
  )
}

export default Home
