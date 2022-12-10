import { AuthNavigation } from '@app/app-navigate/AuthNavigation';
import { MainTab } from '@app/app-navigate/MainTab';
import { AuthContext } from '@app/providers/AuthProvider/AuthProvider';
import * as Notifications from 'expo-notifications';
import { PropsWithChildren, useContext, useEffect } from 'react';
import { AppState, Keyboard, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { onAppStateChange } from '../model/QuerySet';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return (
        settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
}

type Props = & PropsWithChildren & {
    onLayoutRootView: () => void
}

const Root = styled.SafeAreaView`
    background-color: ${({ theme }) => theme.palette.background.primary};
    flex: 1;
`
const WrapperApplication = ({ children, onLayoutRootView }: Props) => {
    const auth = useContext(AuthContext)
    useEffect(() => {
        allowsNotificationsAsync()
        const subscription = AppState.addEventListener('change', onAppStateChange)
        return () => subscription.remove()
    }, [])
    return (
        <>
            <StatusBar
                barStyle={'light-content'}
            />
            <Root
                onLayout={onLayoutRootView}
                onTouchStart={Keyboard.dismiss}

            >
                {
                    children ?
                        children :
                        auth?.isAuth ?
                            <MainTab />
                            :
                            <AuthNavigation />
                }
            </Root>
        </>
    )

}

export default WrapperApplication