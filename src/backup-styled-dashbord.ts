import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const BackgroundHeader = ({ children }) => {
    return (
        <LinearGradient
            colors={['rgba(186,28,70,1) 100%', 'transparent']}
            style={{ backgroundColor: 'rgba(122,24,62,1) 100%' }}
        >
            {children}
        </LinearGradient>
    );
}

export const Container = styled.View`
    flex: 1;
    background-color:${({ theme }) => theme.colors.background_menu};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(38)}px;
    background-color:${({ theme }) => theme.colors.primary}; 
    /* padding: 0 ${RFValue(24)}px; */
`;

export const HeadWapper = styled.View`
    /* width: 100%; */
    margin-top: ${getStatusBarHeight() + RFValue(12)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Info = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;
export const Logo = styled(SvgUri).attrs({
    width: `${RFValue(50)}px`,
    height: `${RFValue(25)}px`,
    uri: "https://marlisaudebrasilia.com.br/wp-content/uploads/mobile/imgs/brand-white-head_logo.svg"
})``;

export const User = styled.View`
    /* margin-left: 12px; */
`;
export const UserGreting = styled.Text`
    color: ${({ theme }) => theme.colors.head_title};
    font-family: ${({ theme }) => theme.fonts.light};
    /* font-size:  ${RFValue(14)}px; */
`;
export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.head_title};
    font-family: ${({ theme }) => theme.fonts.bold};
    /* font-size:  ${RFValue(14)}px; */
    /* margin-top: ${RFValue(-7)}px; */
`;

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.head_title};
    font-size:  ${RFValue(22)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: true,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(28)}px;
`;

export const MainTitle = styled.Text`
     color: ${({ theme }) => theme.colors.head_title};
     font-family: ${({ theme }) => theme.fonts.bold};
     font-size:  ${RFValue(24)}px;
     margin-top: ${RFValue(36)}px;
`;

export const SupporterRating = styled.View``;

export const Title = styled.Text``;
