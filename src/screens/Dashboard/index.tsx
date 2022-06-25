import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
import {
  Container,
  Header,
  Head,
  HeadTitle,
} from './styles';

const Brand = SvgUri;

export function Dashboard() {
  return (
    <Container>
      <Head>
        <Header>
         
          <HeadTitle>Dashboard</HeadTitle>
        </Header>
        <AntDesign name="logout" size={RFValue(24)} color="white" />
      </Head>
    </Container>
  );
}