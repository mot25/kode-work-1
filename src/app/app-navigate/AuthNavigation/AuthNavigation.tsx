import { NavRootParamsType } from '@app/app-navigate/config/types';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { darkTheme } from '@shared/ui/theme';
import { AuthNumber } from 'pages /AuthNumber';
import { CodeAcces } from 'pages /CodeAcces';
import { PasswordPage } from 'pages /PasswordPage';
import { TechnicalPage } from 'pages /TechnicalPage';
import React from 'react';
import { View } from 'react-native';

const StackPayments = createNativeStackNavigator<NavRootParamsType>();
type Props = {}
const optionsScreeen: NativeStackNavigationOptions = {
    headerShown: false,
    headerShadowVisible: false,
    statusBarColor: darkTheme.palette.background.primary
}
const AuthNavigation = (props: Props) => {
    return (
        <StackPayments.Navigator
            initialRouteName='at_number'
        >
            <StackPayments.Screen
                name='at_number'
                options={optionsScreeen}
                component={AuthNumber}
            />
            <StackPayments.Screen
                name='at_code_access_number'
                options={optionsScreeen}
                component={CodeAcces}
            />
            <StackPayments.Screen
                name='at_password'
                options={optionsScreeen}
                component={PasswordPage}
            />

        </StackPayments.Navigator>
    )
}

export default AuthNavigation
