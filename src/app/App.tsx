import { AuthNavigation } from '@app/app-navigate/AuthNavigation';
import { AuthProvider } from '@app/providers/AuthProvider';
import { AuthContext } from '@app/providers/AuthProvider/AuthProvider';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { useAuth } from '@shared/lib/hook/useAuth';
import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import { WrapperApplication } from '@shared/ui/WrapperApplication';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useContext, useState } from 'react';
import { Text } from 'react-native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import styled from 'styled-components/native';

import { Storybook } from '../../.storybook';
import { MyALertProvider } from '../features/MyALertProvider';
import { MainTab } from './app-navigate/MainTab';
import { ApiProvider } from './providers/ApiProvider';
import { AppThemeProvider } from './providers/AppThemeProvider';
import { RouterProvider } from './providers/RouterProvider';

SplashScreen.preventAutoHideAsync();
const customFonts = {
    SF_PRO_BOLD_700: require('../../assets/fonts/SFProDisplay-Bold.ttf'),
    SF_PRO_SEMIBOLD_600: require('../../assets/fonts/SFProDisplay-Semibold.ttf'),
    SF_PRO_MEDIUM_500: require('../../assets/fonts/SFProDisplay-Medium.ttf'),
    SF_PRO_REGULAR_400: require('../../assets/fonts/SFProDisplay-Regular.ttf'),
};
const StorybookButton = styled(CTouchableOpacity)`
  height: 32px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.button.primary};
`;
const StorybookButtonText = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
`;

function App({ }) {
    const [isFontsLoaded] = useFonts(customFonts);
    const [isStorybookClosed, setStorybookClosed] = useState(false);

    const onLayoutRootView = useCallback(async () => {
        if (isFontsLoaded) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            // Не украл, а по взаимствовал
            await SplashScreen.hideAsync();
        }
    }, [isFontsLoaded]);

    if (!isFontsLoaded) {
        return null;
    }

    if (!isStorybookClosed) {
        return (
            // <ErrorBoundary>
            <AlertNotificationRoot>
                <ApiProvider>
                    <RouterProvider>
                        <AppThemeProvider>
                            <WrapperApplication
                                onLayoutRootView={onLayoutRootView}
                            >
                                <Storybook />
                                <StorybookButton onPress={() => setStorybookClosed(true)}>
                                    <StorybookButtonText>OPEN APP</StorybookButtonText>
                                </StorybookButton>
                            </WrapperApplication>
                        </AppThemeProvider>
                    </RouterProvider>
                </ApiProvider>
            </AlertNotificationRoot>
            // </ErrorBoundary>
        );
    }
    return (
        <ErrorBoundary>
            <AuthProvider>
                <AlertNotificationRoot>
                    <ApiProvider>
                        <RouterProvider>
                            <AppThemeProvider>
                                <MyALertProvider>
                                    <WrapperApplication
                                        onLayoutRootView={onLayoutRootView}
                                    />
                                </MyALertProvider>
                            </AppThemeProvider>
                        </RouterProvider>
                    </ApiProvider>
                </AlertNotificationRoot>
            </AuthProvider>
        </ErrorBoundary>
    )
}
export default App