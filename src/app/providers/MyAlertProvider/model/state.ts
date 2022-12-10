import { schedulePushNotification } from '@shared/lib/schedulePushNotification';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { useStoreMap } from 'effector-react';
import { Vibration } from 'react-native';

export type TColorType = 'success' | 'error'
type AlertType = {
    id: number
    text: string
    colorType: TColorType
    ms?: number
}
export const $arrAlert = createStore<AlertType[]>([])
export const clearSnackFx = createEffect(async (data: AlertType) => {
    const msTime = data.ms || 5000
    setTimeout(() => {
        deleteALert(data.id)
    }, msTime);
})

export const addSnack = createEvent<AlertType>()
export const deleteALert = createEvent<number>()
export const setTimer = createEvent<number>()

sample({
    clock: deleteALert,
    source: $arrAlert,
    fn(src, clk) {
        return src.filter(item => item.id !== clk)
    },
    target: $arrAlert,
})

sample({
    clock: addSnack,
    fn: (clock) => clock,
    target: clearSnackFx
})
sample({
    clock: addSnack,
    fn(clk) {
        if (clk.colorType === 'error') {
            Vibration.vibrate()
            // schedulePushNotification(
            //     clk.text
            // )
        }
        return [...$arrAlert.getState(), clk]
    },
    target: $arrAlert
})