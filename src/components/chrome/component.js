import React from 'react'
import { Chrome, Body, Content } from '@zendeskgarden/react-chrome'
import { Nav } from '../nav'
import { Header } from '../header'

import { ContentWrapper } from './styles'

export default props => (
  <Chrome style={{ width: '100vw' }}>
    <Nav />
    <Body>
      <Header />
      <Content>
        <ContentWrapper>{props.children}</ContentWrapper>
      </Content>
    </Body>
  </Chrome>
)
