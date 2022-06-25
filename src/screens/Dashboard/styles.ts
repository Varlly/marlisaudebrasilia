import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color:${({ theme }) => theme.colors.background};
   
`;

export const Head = styled.View`
    width: 100%;
    height: ${RFValue(76)}px;
    padding:${RFValue(12)}px;

    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
 `;

export const Header = styled.View` 
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    
`;


export const HeadTitle = styled.Text`
    font-size:  ${RFValue(16)}px;
    font-family:  ${({ theme }) => theme.fonts.regular};
    font-weight: bold;

    text-transform: uppercase;
          
    color: ${({ theme }) => theme.colors.head_title};
    padding-left: ${RFValue(12)}px;
`;

