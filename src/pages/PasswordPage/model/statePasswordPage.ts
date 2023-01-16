import { AStorage } from '@shared/lib/AStorage';
import { AuthServives } from '@shared/model/api/requests/AuthServives';
import { combine, createEffect, createEvent, createStore, restore, sample } from 'effector';
import { TResponseAuth } from '../../AuthNumber/config/types';
import { $codeOpt } from '../../AuthNumber/model/stateAuthNumber';


export const $fPasswordAuth = createStore<string>('')
export const $tokenResponseAuth = createStore<TResponseAuth | null>(null)

export const authPasswordFx = createEffect(async (password: string) => {
    try {
        const response = await AuthServives.enterApplication({
            guestToken: $codeOpt?.getState()?.otpId || '',
            password: password
        })
        AStorage.setItem('accessToken', response.accessToken)
        AStorage.setItem('refreshToken', response.refreshToken)
        return response
    } catch (error) {
        throw Error('auth enter errro')
    }
})

export const setFPasswordAuth = createEvent<string>()
export const setFetchErrorAuth = createEvent<boolean>()
export const resetTokenResponseAuth = createEvent()
export const $fetchError = restore<Error>(authPasswordFx.failData, null);

$tokenResponseAuth.on(authPasswordFx.doneData, (_, data) => data)


$fPasswordAuth.on(setFPasswordAuth, (_, data) => data)
export const $categoryGetStatus = combine({
    loading: authPasswordFx.pending,
    error: $fetchError,
    data: $tokenResponseAuth,
})
