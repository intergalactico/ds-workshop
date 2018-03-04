import styled, { css } from 'styled-components'

/*
 * One styled-component can re-use styles from another. The TeamMember
 * styled-component takes the styles from the Typography component
 * and re-defines them.
 */
import * as ts from '../Typography/styles.js'

export const TeamMember = styled.div`
  text-align: center;
`

/*
 * By analogy to defining an HTML tag and styles for an element,
 * in styled-component you can take an already defined element and
 * provide additional styles to it. It will use the tag of initial
 * elements.
 */
export const Title = styled(ts.Header3)`
  color: green;
`

export const IconList = styled.ul`
  color: #747d88;
  font-size: 16px;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
`

export const IconListItem = styled.li`
  display: inline-block;
  margin-right: 15px;
`

export const IconLink = styled.a`
  color: #747d88;
  text-decoration: none;
`
