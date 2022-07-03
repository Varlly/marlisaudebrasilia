import { StatusBar } from 'expo-status-bar';
import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as  Font from 'expo-font'
import { ThemeProvider } from 'styled-components/native';
import {
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
} from '@expo-google-fonts/roboto';

import { Dashboard } from './src/screens/Dashboard';
import theme from './src/global/styles/theme';

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    Roboto_300Light,
                    Roboto_400Regular,
                    Roboto_500Medium,
                    Roboto_700Bold,
                    Roboto_900Black
                });
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (


        <ThemeProvider theme={theme}>
            <View onLayout={onLayoutRootView}>
                <StatusBar style="light" />
                <Dashboard />
            </View>
        </ThemeProvider>

    );
}

