import { NavRootParamsType } from '@app/app-navigate/config/types';
import { addSnack } from '@app/providers/MyAlertProvider/model/state';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AStorage } from '@shared/lib/AStorage';
import { useAuth } from '@shared/lib/hook/useAuth';
import { AuthServives } from '@shared/model/api/requests/AuthServives';
import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import { InputWithPassword } from '@shared/ui/InputWithPassword';
import { SimpleButton } from '@shared/ui/SimpleButton';
import { darkTheme } from '@shared/ui/theme';
import { TopLogoAnimated } from '@shared/ui/TopLogoAnimated';
import { useEvent, useStore } from 'effector-react';



import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useMutation } from 'react-query';
import styled from 'styled-components/native';

import { IconCloseErrorPage } from '../../../../assets/icons/IconCloseErrorPage';
import { IconCompleteAuth } from '../../../../assets/icons/IconCompleteAuth';
import { IconErrorPage } from '../../../../assets/icons/IconErrorPage';
import { resetMobileNumber } from '../../AuthNumber/model/stateAuthNumber';
import { resetAllAccesCode } from '../../CodeAcces/model/stateCodeAcces';
import { TechnicalPage } from '../../TechnicalPage';
import { $categoryGetStatus, $fPasswordAuth, authPasswordFx, setFPasswordAuth } from '../model/statePasswordPage';

type Props = {}
type NSPaymentsProps = NativeStackScreenProps<NavRootParamsType, 'at_password'>
const reg1 = /[A-z]/
const reg2 = /[0-9]/
const reg3 = /(?=.*[!@#$%^&*])/
const Root = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    padding: 18px 16px;
`
const Body = styled.View`
    flex: 1;

`
const CancelWrapper = styled(CTouchableOpacity)`
    padding: 7px;
`
const titleError = 'Внимание'
const subStringError = 'Сервер временно недоступен. Пожалуйста, повторите попытку позднее'
const titleComleted = 'Все готово'
const subStringComleted = 'Теперь вы можете использовать мобильное приложение Kode bank'

const PasswordPage = ({ navigation }: NSPaymentsProps) => {


    const { data, error, loading } = useStore($categoryGetStatus)
    const value = useStore($fPasswordAuth)
    const auth = useAuth()
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const authPassword = useEvent(authPasswordFx)
    const onBlur = () => {
        setIsFocus(false)
    }
    const onFocus = () => {
        setIsFocus(true)
    }
    const exitPage = () => {
        Alert.alert(
            "Вы точно хотите выйти?",
            undefined,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Выйти", onPress: () => {
                        resetMobileNumber()
                        resetAllAccesCode()
                        navigation.navigate('at_number')
                    }
                }
            ]
        );
    }
    const enter = () => {
        let flagError = true;
        if (value.length <= 5) {
            addSnack({
                colorType: 'error',
                text: "Длина пароля должна быть не менее 5 символов",
                id: Date.now()
            })
            flagError = false
        }
        if (!value.match(reg1) || !value.match(reg2) || value.match(reg3)) {
            addSnack({
                colorType: 'error',
                text: "Пароль может содержать только цифры и буквы",
                id: Date.now()
            })
            flagError = false
        }
        if (flagError) authPassword(value || '')
        flagError = true;
    }
    if (!!error) {
        return (
            <TechnicalPage
                title={titleError}
                subString={subStringError}
                img={<IconErrorPage />}
                onPress={enter}
                onClose={enter}
            />
        )
    }

    useEffect(() => {
        navigation.setOptions({
            statusBarColor: darkTheme.palette.background.secondary
        })
    }, [])
    return (
        !!data?.accessToken ?
            <TechnicalPage
                title={titleComleted}
                subString={subStringComleted}
                img={<IconCompleteAuth />}
                onPress={() => auth.signin()}
                textButton='Продолжить'
            />
            :
            <Root>
                <View>
                    <CancelWrapper
                        onPress={exitPage}
                    >
                        <IconCloseErrorPage />
                    </CancelWrapper>
                    <TopLogoAnimated
                        isActive={isFocus}
                    />
                </View>
                <Body>
                    <InputWithPassword
                        onChange={setFPasswordAuth}
                        value={value}
                        onBlur={onBlur}
                        onFocus={onFocus}
                    />
                </Body>
                <View>
                    <SimpleButton
                        onPress={enter}
                        text='Войти'
                    />
                </View>
            </Root>
    )
}

export default PasswordPage