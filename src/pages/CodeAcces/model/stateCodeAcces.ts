import { AuthServives } from '@shared/model/api/requests/AuthServives';
import { combine, createEffect, createEvent, createStore, restore, sample } from 'effector';
import { $codeOpt, $mobileNuber } from '../../AuthNumber/model/stateAuthNumber';
import { TSetAttemptsLeft } from '../config/types';


export const $optCodeInput = createStore<string>('')
export const $optCodeInputError = createStore<boolean>(false)
export const $attemptsLeft = createStore<number>(5)

export const getCodeOptFx = createEffect(async () => {
    try {
        const response = await AuthServives.getOpt({ phone: $mobileNuber.getState() || '' })
        return response
    } catch (error) {
        throw Error('code opt error ')
    }
})


export const setOptCode = createEvent<string>()
export const setOptCodeInputError = createEvent<boolean>()
export const setAttemptsLeft = createEvent<TSetAttemptsLeft>()
export const resetAllAccesCode = createEvent()
export const clearEndCode = createEvent()
export const resetCodeAcces = createEvent()


export const $fetchError = restore<Error>(getCodeOptFx.failData, null);
$codeOpt.on(getCodeOptFx.doneData, (_, data) => data)
$optCodeInput.on(setOptCode, (state, data) => {
    if (state.length < 4) {
        return state + data
    } else {
        return state
    }
})
$optCodeInput.on(clearEndCode, (state, _) => state.slice(0, state.length - 1))
$optCodeInputError.on(setOptCodeInputError, (_, data) => data)
$attemptsLeft.on(setAttemptsLeft, (state, data: TSetAttemptsLeft) => {
    const {
        action,
        payload
    } = data
    switch (action) {
        case 'minus':
            return (state - 1) < 0 ? 0 : (state - 1)
        case 'plus':
            return state + 1
        case 'set':
            return payload
        default:
            return state
    }
})
sample({
    source: $optCodeInputError,
    clock: setOptCode,
    fn(src, clk) {
        if (src) {
            return true
        } else {
            return false
        }
    },
    target: $optCodeInputError
})
$optCodeInput.reset(resetCodeAcces, resetAllAccesCode)
$optCodeInputError.reset(clearEndCode, resetAllAccesCode)
$attemptsLeft.reset(resetAllAccesCode)


export const $codeAccesStatus = combine({
    loading: getCodeOptFx.pending,
    error: $fetchError,
    data: $codeOpt,
});