import React from 'react'

import * as s from './styles.js'

const Typography = (props) => {
  return (
    <div>
      <s.FuturaBold>In Futura Bold: The quick brown fox jumps over the lazy dog.</s.FuturaBold>
      <s.Lato>In Lato: The quick brown fox jumps over the lazy dog.</s.Lato>
      <div>
        <s.Header1>I am Header1</s.Header1>
        <s.Header2>I am Header2</s.Header2>
        <s.Header3>I am Header3</s.Header3>
        <s.P>I am a paragraph</s.P>
      </div>
    </div>
  )
}

export default Typography
