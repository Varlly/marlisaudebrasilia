import React from 'react';
import { 
    Container,
    Content,
    Order,
    InfoSupporter,
    LabelSupporter,
    Name,
    City,
    InfoIndications,
    LabelIndicaions,
    AmountIndications,
    AmountIndicationsDay,
    Icon

 } from './styles';

export function Supporter({data}) {
    return (
        <Container>
            <Content>
                <Order>
                    1
                </Order>
                <InfoSupporter>
                    <LabelSupporter>
                        {data.position}
                    </LabelSupporter>
                    <Name>
                        Fulano de Tal
                    </Name>
                    <City>Gama-DF</City>
                </InfoSupporter>
                <InfoIndications>
                    <LabelIndicaions>
                        Total indicações
                    </LabelIndicaions>
                    <AmountIndications>
                        60
                    </AmountIndications>
                    <AmountIndicationsDay>
                      Hoje: +10
                    </AmountIndicationsDay>
                </InfoIndications>
                <Icon name="arrow-forward-ios" />
            </Content>
        </Container>
    );
}