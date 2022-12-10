import { PaymentsStacks } from '@app/app-navigate/PaymentsStacks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { isShowTabBarFromName } from '@shared/lib/helpersByNavigation';
import { TabOptionsLabel } from '@shared/lib/TabOptionsLabel';
import { darkTheme } from '@shared/ui/theme';
import { CashMachine } from 'pages /CashMachine';
import { MainPage } from 'pages /MainPage';
import { Profile } from 'pages /Profile';
import React from 'react';
import { StyleSheet } from 'react-native';

import { IconCashMachine } from '../../../../assets/icons/IconCashMachine';
import { IconMainPage } from '../../../../assets/icons/IconMainPage';
import { IconPayments } from '../../../../assets/icons/IconPayments';
import { IconProfile } from '../../../../assets/icons/IconProfile';
import { ERouteName, NavMainTabsParamsType, NavPaymentsParamsType, translateLabel } from '../config/types';




const Tab = createBottomTabNavigator<NavMainTabsParamsType>();


const MainTab = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
      defaultScreenOptions={{

}}
      sceneContainerStyle={styles.root}
      initialRouteName='PaymentsListStack'
    >
      <Tab.Screen name={ERouteName.MAINPAGE}
        options={{
          tabBarIcon: ({ focused }) => <IconMainPage focused={focused} />,
          tabBarLabel: ({ focused }) => TabOptionsLabel(focused, translateLabel.MainPage),         
        }}
        component={MainPage} />
      <Tab.Screen name={ERouteName.PAYMENTSLISTSTACK}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <IconPayments focused={focused} />,
          tabBarLabel: ({ focused }) => TabOptionsLabel(focused, translateLabel.PaymentsListStack),
          tabBarStyle: ((route) => isShowTabBarFromName<NavPaymentsParamsType, NavMainTabsParamsType>(['pm_categoryList', 'pn_itemCategory'], route, styles.tabBar))(route),
        })}
        component={PaymentsStacks} />
      <Tab.Screen name={ERouteName.CASHMACHINE}
        options={{
          tabBarIcon: ({ focused }) => <IconCashMachine focused={focused} />,
          tabBarLabel: ({ focused }) => TabOptionsLabel(focused, translateLabel.CashMachine)
        }}
        component={CashMachine} />
      <Tab.Screen name={ERouteName.PROFILE}
        options={{
          tabBarIcon: ({ focused }) => <IconProfile focused={focused} />,
          tabBarLabel: ({ focused }) => TabOptionsLabel(focused, translateLabel.Profile)
        }}
        component={Profile} />
    </Tab.Navigator>
  )
}

export default MainTab



const styles = StyleSheet.create({
  root: {
    backgroundColor: darkTheme.palette.background.primary,
  },
  tabBar: {
    paddingTop: 13,
    height: 56,
    paddingBottom: 6,
    borderTopColor: 'transparent',
    backgroundColor: darkTheme.palette.background.primary,
  }
})