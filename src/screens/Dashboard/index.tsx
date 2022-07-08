import React from 'react';


import {
    Container,
    Header,
    HeadWrapper,
    Logo,
    Icon,
    HighlightCars,
    Transactions,
    Title
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <Header>
                    <HeadWrapper>
                        <Logo />
                        <Icon name="logout" />
                    </HeadWrapper>
                </Header>
            </Header>

            <HighlightCars>
                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.4000,00"
                    lastTransaction='Ultima entrada do dia 13 de abril'
                />
                <HighlightCard
                    type='down'
                    title="Saidas"
                    amount="R$ 1.259,00"
                    lastTransaction='Ultima saida do dia 03 de abril'
                />
                <HighlightCard
                    type='total'
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction='01 a 19 de abril'
                />
            </HighlightCars>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionCard />
            </Transactions>
        </Container>
    );
}
