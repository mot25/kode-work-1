import { ReactNode } from 'react';

export type NavMainTabsParamsType = {
    CashMachine: undefined
    MainPage: undefined
    PaymentsListStack: undefined
    Profile: undefined
}
export type NavPaymentsParamsType = {
    pm_index: undefined
    pm_categoryList: { id: string }
    pn_itemCategory: undefined
}
export type NavRootParamsType = {
    at_number: undefined
    at_code_access_number: undefined
    at_password: undefined
}
export enum ERouteName {
    MAINPAGE = 'MainPage',
    PAYMENTSLISTSTACK = 'PaymentsListStack',
    CASHMACHINE = 'CashMachine',
    PROFILE = 'Profile',
}
export const translateLabel: TTranslateRoutePayment = {
    'CashMachine': 'Банкоматы',
    'MainPage': 'Главная',
    'PaymentsListStack': 'Платежи',
    'Profile': 'Профиль',
}

type TTranslateRoutePayment = Record<ERouteName, string>