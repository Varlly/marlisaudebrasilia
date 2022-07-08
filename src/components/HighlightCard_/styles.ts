import styled, { css } from "styled-components/native";
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface CardsProps {
    type: 'supporters' | 'alert';
}


export const Container = styled.View`
    flex: 1%;
    width: ${RFPercentage(42)}px;
    //height: ${RFPercentage(22)}px;
    margin-right: ${RFValue(12)}px;
    padding: ${RFPercentage(2.5)}px;
    justify-content: space-between;
    
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px ${({ theme }) => theme.colors.stroke.primary};
    border-radius: 16px;
`;

export const Header = styled.View`
 `;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12)}px;
`;

export const Content = styled.View`
    margin-top: ${RFPercentage(1)}px;
    flex-direction: row;
    justify-content: space-between;
  `;

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.label};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(10)}px;
`;

export const Amount = styled.Text<CardsProps>`
    margin-top: ${RFValue(-7)}px;
    
    font-size: ${RFValue(28)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

    ${(props) => props.type === 'alert' && css`
        color: ${({ theme }) => theme.colors.warning};
   `};

   ${(props) => props.type === 'supporters' && css`
        color: ${({ theme }) => theme.colors.info};
   `};
`;

export const Footer = styled.View`
     flex-direction: row;
     align-items: baseline;
`;

export const WrappedAmount = styled.View``;

export const Icon = styled(Feather)<CardsProps>`
   color: ${({ theme }) => theme.colors.primary};
   font-size: ${RFValue(48)}px;

   ${(props) => props.type === 'alert' && css`
    color: ${({ theme }) => theme.colors.warning};
   `};

   ${(props) => props.type === 'supporters' && css`
    color: ${({ theme }) => theme.colors.info};
   `};
`;

export const AmountDay = styled.Text<CardsProps>`
    
    ${(props) => props.type === 'alert' && css`
        color: ${({ theme }) => theme.colors.warning};
   `};

   ${(props) => props.type === 'supporters' && css`
        color: ${({ theme }) => theme.colors.info};
   `};
    font-size: ${RFValue(14)}px;
    margin-left: ${RFValue(3)}px;
`;
