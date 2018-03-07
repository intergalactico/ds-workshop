/*
 * Section component provides a container with paddings.
 */
import React from 'react'

/*
 * For it's styles, Section component uses plain CSS.
 * Change it to styled-components, if you want.
 */
import s from './styles.css'

/*
 * Even though the component is using plain CSS, it still can re-use
 * styled-components from other patterns.
 */
import * as ts from '../Typography/styles.js'

/*
 * Note! When using plain CSS, the class names have to be provided manually.
 */
const Section = ({ children, ...props }) => {
  return (
    <div className="section">
      <div className="section__inner">
        {children}
      </div>
    </div>
  )
}

export default Section

/*
 * For re-use of Typogrpahy styles, Section component has a couple of subcomponents to be
 * used as wrappers for texts and headers. Check out the story (documentation) to see how
 * these wrappers are used.
 */
export const SectionHeader = ({ children, ...props }) => {
  return (<ts.Header1>{children}</ts.Header1>)
}
export const SectionText = ({ children, ...props }) => {
  return (<ts.P>{children}</ts.P>)
}

