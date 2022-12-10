import { NavRootParamsType } from '@app/app-navigate/config/types';
import { addSnack } from '@app/providers/MyAlertProvider/model/state';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthServives } from '@shared/model/api/requests/AuthServives';
import { SimpleButton } from '@shared/ui/SimpleButton';
import { TopLogoAnimated } from '@shared/ui/TopLogoAnimated';
import { useStore } from 'effector-react';
import { TReqDtoGetCodeOpt, TResponseCodeOpt } from 'pages /AuthNumber/config/types';
import {
    $mobileNuber,
    resetMobileNumber,
    sendMobileNumber,
    setCodeOpt,
    setMobileNumber,
} from 'pages /AuthNumber/model/stateAuthNumber';
import { InputAuthNumber } from 'pages /AuthNumber/ui/molecules/InputAuthNumber';
import { TechnicalPage } from 'pages /TechnicalPage';
import { useEffect, useState } from 'react';
import { Vibration, View } from 'react-native';
import { useMutation } from 'react-query';
import styled from 'styled-components/native';

import { IconErrorPage } from '../../../../assets/icons/IconErrorPage';

const title = 'Внимание'
const subString = 'Сервер временно недоступен. Пожалуйста, повторите попытку позднее'

type NSPaymentsProps = NativeStackScreenProps<NavRootParamsType, 'at_number'>

const Root = styled.View<{ isFocus: boolean }>`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    padding: 0 16px;
    padding-bottom: 24px;
    padding-top: ${({ isFocus }) => isFocus ? 36 : 57}px;
    justify-content: space-between;
`

const AuthNumber = ({ navigation }: NSPaymentsProps) => {
    const { isLoading, isError, mutate } =
        useMutation<TResponseCodeOpt, Error, TReqDtoGetCodeOpt>(data => AuthServives.getOpt(data), {
            onSuccess(data) {
                setCodeOpt({
                    otpCode: data?.otpCode,
                    otpId: data?.otpId
                })
            }
        });
    const value = useStore($mobileNuber)
    const [error, setError] = useState<boolean>(false)
    const [mobileNuberError, setMobileNuberError] = useState(false)
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const onBlur = () => {
        setIsFocus(false)
    }
    const onFocus = () => {
        setIsFocus(true)
    }
    const nextAuth = async () => {
        
        const payload: TReqDtoGetCodeOpt = {
            phone: value || ''
        }
        sendMobileNumber(value || '')
        if (value?.length === 18) {
            navigation.navigate('at_code_access_number')
            mutate(
                payload
            )
        } else {
            addSnack({
                colorType: 'error',
                id: Date.now(),
                text: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона'
            })
            setMobileNuberError(true)
        }

    }

    if (error) {
        return (
            <TechnicalPage
                title={title}
                subString={subString}
                img={<IconErrorPage />}
                onPress={() => setError(false)}
                onClose={() => setError(false)}
            />
        )
    }
    useEffect(() => {
        setError(isError)
    }, [isError])
    useEffect(() => {
        return () => resetMobileNumber()
    }, [])
    return (
        <Root
            isFocus={isFocus}
        >
            <View>
                <TopLogoAnimated
                    isActive={isFocus}
                />
                <InputAuthNumber
                    error={mobileNuberError}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    value={value}
                    onChange={(value) => {
                        setMobileNumber(value)
                        setMobileNuberError(false)
                    }}
                    isLoading={isLoading}
                />
            </View>
            <SimpleButton
                onPress={nextAuth}
                text='Войти'
            />
        </Root>
    )
}

export default AuthNumber