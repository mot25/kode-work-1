import { NavPaymentsParamsType } from '@app/app-navigate/config/types';
import { addSnack, setTimer } from '@app/providers/MyAlertProvider/model/state';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { thousand } from '@shared/lib/helpers';
import { SafeAreaKeyboard } from '@shared/ui/SafeAreaKeyboard';
import { SimpleButton } from '@shared/ui/SimpleButton';
import { useStore } from 'effector-react';
import { InputCardNumberServicesItem } from 'features /InputCardNumber';
import { SelectCardItemOrganisms } from 'features /SelectCardItem';
import { SumCardItemTempaltes } from 'features /SumCardItem';
import { useEffect } from 'react';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import styled from 'styled-components/native';

import { $selectServicesById, clearAllCategory } from '../../../CategoryList/model/state/modelCategory';
import {
    $errorService as $error,
    $localStateService as $localState,
    $serviceName,
    changeErrorService as changeError,
    clearAllService as clearAll,
    clearInputService as clearInput,
    editLocalStateService as editLocalState,
    setServices,
} from '../../model/state';




const Root = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.primary};

`

const Top = styled.ScrollView`
    flex: 1;
`

const Bottom = styled.View`
padding: 0 16px;
padding-bottom: 24px;

`

const Button = styled(SimpleButton)`
 padding:0 16px;
`

const timeInMs = Date.now();

type Props = {}

const balanced = 457334.00
type NSServicesItemProps = NativeStackScreenProps<NavPaymentsParamsType, 'pn_itemCategory'>
const Services = ({ navigation }: NSServicesItemProps) => {
    const localState = useStore($localState)
    const error = useStore($error)
    const servicesName = useStore($serviceName)
    const selectServicesById = useStore($selectServicesById)
    setTimer(50000)
    const openSelectCards = () => {
        let flagError = false
        
        if (localState.number.length === 0 && localState.sum === '0') {
            addSnack(
                {
                    text: 'Поля не могут быть пустыми',
                    colorType: 'error',
                    id: timeInMs,
                    ms: 10000
                }
            )
            changeError({ value: true, key: 'number' })
            flagError = true
        }
        if (parseInt((localState.sum || '')?.split(' ').join('')) > balanced) {
            addSnack(
                {
                    text: 'Недостаточно средств на счету',
                    colorType: 'error',
                    id: timeInMs,
                }
            )
            changeError({ value: true, key: 'sum' })
            flagError = true
        }
        if (localState.number.length < 18 && localState.number.length > 0) {

            addSnack(
                {
                    text: 'Неправильно введен номер телефона',
                    colorType: 'error',
                    id: timeInMs,
                }
            )
            changeError({ value: true, key: 'number' })
            flagError = true

        }
        if (!flagError) {
            const rand = Boolean(Math.round(Math.random()));
            Dialog.show({
                type: rand ? ALERT_TYPE.SUCCESS : ALERT_TYPE.DANGER,
                title: rand ? 'Отправлено' : 'Какой-то сверхразум все сломал',
                textBody: rand ? `Платеж на сумму ${thousand(localState.sum)} ₽ отправлен` : 'Постараемся быстро починить',
                button: 'Закрыть',
            })
        }
        flagError = false

    }
    useEffect(() => {
        navigation.setOptions({
            headerTitle: selectServicesById?.service_name
        })
    }, [servicesName])
    useEffect(() => {
        setServices(selectServicesById || {
            service_icon: 'https://',
            service_id: '1',
            service_name: ''
        })
    }, [selectServicesById])
    navigation.addListener('transitionEnd', () => clearAllCategory())
    useEffect(() => {
        return () => clearAll()
    }, [])
    return (
        <Root
        >
            <Top
                keyboardShouldPersistTaps='handled'
            >
                <SafeAreaKeyboard>
                    <SelectCardItemOrganisms
                        balance={balanced}
                        fourNumberCard={7789}
                        title={'Карта зарплатная'}
                        typeCard={'MASTERCARD'}
                    />
                    <InputCardNumberServicesItem
                        onChange={(e) => editLocalState({ value: e, key: 'number' })}
                        value={localState.number}
                        uri={selectServicesById?.service_icon}
                        clearInput={clearInput}
                        error={error.number}
                    />
                    <SumCardItemTempaltes
                        onChange={(e) => editLocalState({ value: e, key: 'sum' })}
                        value={localState.sum}
                        error={error.sum}
                    />
                </SafeAreaKeyboard>
            </Top>
            <Bottom >
                <Button
                    text='Продолжить'
                    onPress={openSelectCards}
                />
            </Bottom>
        </Root>

    )
}


export default Services