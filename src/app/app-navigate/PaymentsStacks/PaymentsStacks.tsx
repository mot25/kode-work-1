import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@shared/ui/HeaderBackButton';
import { darkTheme } from '@shared/ui/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoryList from '../../../pages/CategoryList/ui/CategoryList';
import PaymentsMain from '../../../pages/PaymentsMain/ui/PaymentsMain';
import { Services } from '../../../pages/Services';

import { NavPaymentsParamsType } from '../config/types';

const styles = StyleSheet.create({
    header: {
        backgroundColor: darkTheme.palette.background.primary,
        alignItems: 'center',

    },
    header_text: {
        color: darkTheme.palette.text.primary,
        fontFamily: 'SF_PRO_SEMIBOLD_600',
        fontSize: 17,
        letterSpacing: -0.41,
        flex: 1
    }
})

const optionsScreeen: NativeStackNavigationOptions = {
    headerTitleAlign: 'center',
    headerStyle: styles.header,
    headerShadowVisible: false,
    headerTitleStyle: styles.header_text,
    statusBarColor: darkTheme.palette.background.primary
}
const StackPayments = createNativeStackNavigator<NavPaymentsParamsType>();
const PaymentsStacks = () => {
    return (
        <StackPayments.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => <HeaderBackButton onPress={navigation.goBack} />
            })}
        >
            <StackPayments.Screen
                name='pm_index'
                options={{
                    headerShown: false,
                    statusBarColor: optionsScreeen.statusBarColor
                }}
                component={PaymentsMain}
            />
            <StackPayments.Screen
                name='pm_categoryList'
                options={optionsScreeen}
                component={CategoryList}
            />
            <StackPayments.Screen
                name='pn_itemCategory'
                options={optionsScreeen}
                component={Services}
            />
        </StackPayments.Navigator>
    )
}

export default PaymentsStacks
