import React from 'react';

import {
  Container,
  Header,
  Info,
  Logo,
  User,
  UserGreting,
  UserName,
  Icon,
  HeadWapper,
  HighlightCards
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';



export function Dashboard() {
  return (
    <Container>
      <Header>
        <HeadWapper>
          <Info>
            <Logo />
            <User>
              <UserGreting>Olá, </UserGreting>
              <UserName>Hemerson</UserName>
            </User>
          </Info>
          <Icon name="logout" />
        </HeadWapper>
      </Header>
      <HighlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}