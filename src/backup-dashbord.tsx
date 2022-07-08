import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, FlatList, Text, Dimensions } from 'react-native';

import {
  Container,
  Header,
  Info,
  Logo,
  Icon,
  HeadWapper,
  HighlightCards,
  MainTitle,
  BackgroundHeader,
  SupporterRating,
  Title
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { ListCards } from '../../components/ListCards';
import { TopSupporterList } from '../../components/TopSupporterList';



export function Dashboard() {
  return (
    <SafeAreaView>
      <StatusBar style='light' />
      <Container>
        <BackgroundHeader>
          <Header>
            <HeadWapper>
              <Info>
                <Logo />
              </Info>
              <Icon name="logout" />
            </HeadWapper>
            <MainTitle>Olá, Hemerson</MainTitle>
          </Header>
        </BackgroundHeader>

        <HighlightCards>
          <HighlightCard
            type='supporters'
            title='Apoiadores indicados'
            labelAmount='Total'
            amount='15.000'
            labelAmountDay='Hoje'
            amountDay='300'
          />
          <HighlightCard
            type='alert'
            title='Aguardando ligação'
            labelAmount='Total'
            amount='300'
          />
        </HighlightCards>

        <SupporterRating>
          <Title>Teste</Title>
        </SupporterRating>
      </Container>
    </SafeAreaView>
  );
}