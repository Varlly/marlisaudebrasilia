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

interface PropsCards {
    title: string;
    labelAmount: string;
    labelAmountDay?: string;
    amount: string;
    amountDay?: string;
    type: 'supporters' | 'alert';
}

const icon = {
    supporters: 'users',
    alert: 'alert-octagon'
}

export function HighlightCard({
    title,
    labelAmount,
    labelAmountDay,
    amount,
    amountDay,
    type
}: PropsCards) {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
            </Header>
            <Content>
                <WrappedAmount>
                    <Label>{labelAmount}</Label>
                    <Amount type={type}>{amount}</Amount>
                </WrappedAmount>
                <Icon name={icon[type]} type={type} />
            </Content>
            <Footer>
                <Label>{labelAmountDay}</Label>
                <AmountDay type={type}>{amountDay}</AmountDay>
            </Footer>
        </Container>
    );
}