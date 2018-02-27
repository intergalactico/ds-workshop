import styled, { css } from 'styled-components'

import * as ts from '../Typography/styles.js'

export const TeamMember = styled.div`
  text-align: center;
`

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
