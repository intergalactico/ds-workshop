import React from 'react'

import * as s from './styles.js'
import * as ts from '../Typography/styles.js'

import Icon from '../Icon'

const TeamMember = (props) => {
  const { name, title, social, avatar } = props;

  const socialItems = social ? Object.keys(social).map(key => {
      let link = social[key]
      if (key === 'twitter') {
        link = `https://twitter.com/@${social[key]}`
      }

      return (<s.IconListItem>
          <s.IconLink href={link} target="_blank"><Icon name={key}/></s.IconLink>
        </s.IconListItem>)
    }) : null
  const socialList = social ? <s.IconList>{socialItems}</s.IconList> : null;

  return (
    <s.TeamMember>
      <img src={avatar} width="200" />
      <ts.Header2>{name}</ts.Header2>
      TODO: show title
      {socialList}
    </s.TeamMember>
  )
}

export default TeamMember
