import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { SvgUri } from "react-native-svg";
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_menu};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;

    background-color: ${({ theme }) => theme.colors.primary};
`;


export const HeadWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    
    justify-content: space-between;
    align-items: center;

    padding: 0 ${RFValue(24)}px;
    margin-top: ${getStatusBarHeight() + RFValue(12)}px;
`;

export const Logo = styled(SvgUri).attrs({
    width: `${RFValue(50)}px`,
    height: `${RFValue(25)}px`,
    uri: "https://marlisaudebrasilia.com.br/wp-content/uploads/mobile/imgs/brand-white-head_logo.svg"
})``;

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.head_title};
    font-size:  ${RFValue(22)}px;
`;

export const HighlightCars = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingHorizontal: 12
    }
})`
    width: 100%;

    position: absolute;

    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    font-size:  ${RFValue(22)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    margin-bottom: 16px;
`;

