import { AStorage } from '@shared/lib/AStorage';
import { resetCodeOpt } from 'pages /AuthNumber/model/stateAuthNumber';
import { resetAllAccesCode } from 'pages /CodeAcces/model/stateCodeAcces';
import React, { createContext, PropsWithChildren, PropsWithRef, useState } from 'react';

type TAuthContextType = {
    isAuth: boolean;
    signin: VoidFunction
    signout: VoidFunction
    loadingApp: (load: boolean) => void
    isLoading: boolean
}

export const AuthContext = createContext<TAuthContextType>(null!);

type Props = PropsWithChildren & {}

const AuthProvider = ({ children }: Props) => {
    // почему не эффектор, потому мне кажется будет хорошим тоном, изменять такую
    // информацию как авторизация, через определенный метод 
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const signin = () => {
        resetAllAccesCode()
        setIsAuth(true)
    };

    const signout = () => {
        AStorage.removeItem('accessToken')
        AStorage.removeItem('refreshToken')
        resetCodeOpt()
        setIsAuth(false)
    };
    const loadingApp = (load: boolean) => setIsLoading(load)
    const value = { isAuth, signin, signout, isLoading, loadingApp };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider