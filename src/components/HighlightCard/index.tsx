import React from 'react';

import {
    Container,
    Header,
    Title,
    Content,
    Label,
    Amount,
    Footer,
    AmountDay,
    WrappedAmount,
    Icon
} from './styles';

export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>Apoiadores indicados</Title>
            </Header>
            <Content>
                <WrappedAmount>
                    <Label>Total</Label>
                    <Amount>15.000</Amount>
                </WrappedAmount>
                <Icon name="users" />
            </Content>
            <Footer>
                <Label>Hoje:</Label>
                <AmountDay>300</AmountDay>
            </Footer>
        </Container>
    );
}