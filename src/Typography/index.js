/*
 * Typography component is needed to provide global CSS such as
 * font and styles to use across all the other components.
 * As other components, it consists of a React commponent, styled
 * component and a story (documentation). But unlike others this
 * React component is not supposed to be re-used. The code below
 * is only needed to render the texts with specific styles. Other
 * components that need typography styles can directly use
 * the Typography styled component. You can see an example of that
 * in TeamMember component.
 */


import React from 'react'

import * as s from './styles.js'

const Typography = () => {
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
