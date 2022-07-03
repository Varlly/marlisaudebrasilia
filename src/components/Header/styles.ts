import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import AntDesign from '@expo/vector-icons/AntDesign'

export const Container = styled.View`
    width: 100%;
    height: ${RFPercentage(35)}px;
    padding: ${RFValue(16)}px  ${RFValue(24)}px;

    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Title = styled.Text`
    font-size:  ${RFValue(18)}px;
    font-family:  ${({ theme }) => theme.fonts.semi_bold};
    
    text-transform: uppercase;
          
    color: ${({ theme }) => theme.colors.head_title};
`;

export const Icon = styled(AntDesign)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.head_title};
`;

export const Logo = styled.View``;

