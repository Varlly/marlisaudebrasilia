import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
 
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: ${RFValue(6)}px;
    padding: ${RFValue(12)}px  ${RFValue(24)}px;
   `;

export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
`;

export const Order = styled.Text`
    width: ${RFValue(24)}px;
    height: ${RFValue(24)}px;
    
    border: 1px ${({ theme }) => theme.colors.stroke.default};
    border-radius: ${RFValue(18)}px;

    margin-right: ${RFValue(12)}px;

    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    text-align: center;
 `;

export const InfoSupporter = styled.View`
    flex: 2;
`;

export const LabelSupporter = styled.Text`
    color: ${({ theme }) => theme.colors.label_light};
    
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(10)}px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`;

export const City = styled(LabelSupporter)``;

export const InfoIndications = styled.View`
 flex: 2;
    flex-direction: column;
`;

export const LabelIndicaions = styled(LabelSupporter)``;

export const AmountIndications = styled(Name)``;

export const AmountIndicationsDay = styled(LabelSupporter)``;

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.label};
    font-size: ${RFValue(18)}px;
`;