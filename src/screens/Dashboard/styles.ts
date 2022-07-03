import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { SvgUri } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color:${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(38)}px;
    background-color:${({ theme }) => theme.colors.primary};
   
`;

export const HeadWapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Info = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;
export const Logo = styled(SvgUri).attrs({
    width: `${RFValue(80)}px`,
    height: `${RFValue(37)}px`,
    uri: "https://marlisaudebrasilia.com.br/wp-content/uploads/mobile/imgs/brand-white-head_logo.svg"
})``;

export const User = styled.View`
    margin-left: 12px;
`;
export const UserGreting = styled.Text`
    color: ${({ theme }) => theme.colors.head_title};
    font-family: ${({ theme }) => theme.fonts.light};
    font-size:  ${RFValue(18)}px;
`;
export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.head_title};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size:  ${RFValue(18)}px;
    margin-top: -7px;
`;

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.info};
    font-size:  ${RFValue(32)}px;
`;