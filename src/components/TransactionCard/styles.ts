import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    border-radius: 6px;

    padding: 12px 24px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    ${({theme}) => theme.fonts.regular};
`;

export const Amount = styled.Text`
    font-size: ${RFValue(20)}px;
    ${({theme}) => theme.fonts.regular};

    margin-top: 2px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text_info_reverse};
`;

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text_info_reverse};
    margin-left: 17px;
`;

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text_info_reverse};
`;
