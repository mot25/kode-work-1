import { NavRootParamsType } from '@app/app-navigate/config/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthServives } from '@shared/model/api/requests/AuthServives';
import { useEvent, useStore } from 'effector-react';
import { CustomKeyboard } from 'features /CustomKeyboard';
import { TReqDtoGetCodeOpt, TResponseCodeOpt } from 'pages /AuthNumber/config/types';
import { $codeOpt, $mobileNuber, resetMobileNumber, setCodeOpt } from 'pages /AuthNumber/model/stateAuthNumber';
import { getSecondFromMinutes, secondToTime } from 'pages /CodeAcces/lib/secondToTime';
import {
    $attemptsLeft,
    $codeAccesStatus,
    $optCodeInput,
    $optCodeInputError,
    clearEndCode,
    getCodeOptFx,
    resetAllAccesCode,
    setAttemptsLeft,
    setOptCode,
    setOptCodeInputError,
} from 'pages /CodeAcces/model/stateCodeAcces';
import { PageLoader } from 'pages /CodeAcces/ui/molecules/PageLoader';
import { CodeCellsWithTitle } from 'pages /CodeAcces/ui/organisms/CodeCellsWithTitle';
import { TechnicalPage } from 'pages /TechnicalPage';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useMutation } from 'react-query';
import styled from 'styled-components/native';

import { IconErrorPage } from '../../../../assets/icons/IconErrorPage';


const Root = styled.View`
justify-content: flex-end;
align-items: center;
flex: 1;
background-color: ${({ theme }) => theme.palette.background.primary};
`
type NSPaymentsProps = NativeStackScreenProps<NavRootParamsType, 'at_code_access_number'>
const title = 'Внимание'
const subString = 'Сервер временно недоступен. Пожалуйста, повторите попытку позднее'


const CodeAcces = ({ navigation }: NSPaymentsProps) => {

    const { error } = useStore($codeAccesStatus)
    const loading = useStore(getCodeOptFx.pending)
    const optCodeInput = useStore($optCodeInput)
    const optCode = useStore($codeOpt)
    const optCodeInputError = useStore($optCodeInputError)
    const attemptsLeft = useStore($attemptsLeft)
    const getCodeOpt = useEvent(getCodeOptFx)
    const timerRef = useRef<number>(Date.now())
    const [timeStart, setTimeStart] = useState<number>(180)
    let interval: NodeJS.Timer
    const begindTimer = () => {
        if (timeStart > 0) {
            interval = setInterval(() => {
                setTimeStart(
                    getSecondFromMinutes(3, timerRef.current)
                )
            }, 1000)
        } else {
            endTimer()
        }
    }
    const endTimer = () => {
        clearInterval(interval)
    }

    const textLeftButton = useMemo((): string => timeStart > 0 ? `Повторить через ${secondToTime(timeStart)}` : 'Выслать код повторно', [timeStart])

    const repeatTimer = () => {
        getCodeOpt()
        setTimeStart(180)
        timerRef.current = Date.now()
    }


    if (error) {
        return (
            <TechnicalPage
                title={title}
                subString={subString}
                img={<IconErrorPage />}
                onPress={getCodeOpt}
                onClose={getCodeOpt}
            />
        )
    }
    useEffect(() => {
        if (optCodeInput.length === 4) {
            if (optCode?.otpCode === optCodeInput) {
                navigation.navigate('at_password')
            } else {
                setOptCodeInputError(true)
                setAttemptsLeft({
                    action: 'minus'
                })
            }
        }
    }, [optCodeInput])
    useEffect(() => {
        if (attemptsLeft < 1) {
            Alert.alert(
                "Вы ввели неверно код 5 раз",
                "Данная сессия авторизации будет сброшена!",
                [
                    {
                        text: "Выход", onPress: () => {
                            navigation.navigate('at_number')
                            resetMobileNumber()
                            resetAllAccesCode()
                        }
                    }
                ]
            );
        }
    }, [attemptsLeft])

    useEffect(() => {
        begindTimer()
        return () => {
            endTimer()
        }
    }, [])
    return (
        loading
            ?
            <PageLoader />
            :
            <Root>
                <CodeCellsWithTitle
                    attemptsLeft={attemptsLeft}
                    error={optCodeInputError}
                />
                <CustomKeyboard
                    leftText={{
                        fnLeft: repeatTimer,
                        text: textLeftButton,
                        disabled: timeStart > 0
                    }}
                    returnNumber={n => setOptCode(n.toString())}
                    rightImg={{
                        fnRight: clearEndCode,
                        type: 'clear'
                    }}
                />
            </Root>
    )
}


export default CodeAcces