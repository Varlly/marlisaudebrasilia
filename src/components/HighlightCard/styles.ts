import styled from "styled-components/native";
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
//import { UsersThree } from 'phosphor-react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    width: ${RFPercentage(42)}px;
    height: ${RFPercentage(22)}px;

    position: absolute;
    padding: ${RFPercentage(2.5)}px;
    justify-content: space-between;
    margin-top: ${RFValue(180)}px;
    margin-left: ${RFValue(24)}px;
    border: 1px ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
`;

export const Header = styled.View`
 `;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`;

export const Content = styled.View`
    margin-top: ${RFPercentage(1)}px;
    margin-bottom: ${RFPercentage(0.1)}px;
    flex-direction: row;
    justify-content: space-between;
  `;

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.label};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
`;

export const Amount = styled.Text`
    margin-top: -7px;
    color: ${({ theme }) => theme.colors.info};
    font-size: ${RFValue(38)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Footer = styled.View`
     flex-direction: row;
     align-items: baseline;
`;

export const WrappedAmount = styled.View`
     
`;

export const Icon = styled(Feather)`
   color: ${({ theme }) => theme.colors.info};
   font-size: ${RFValue(60)}px;
   
`;

export const AmountDay = styled.Text`
    color: ${({ theme }) => theme.colors.info};
    font-size: ${RFValue(18)}px;
    margin-left: 6px;
`;
