import { createEvent, createStore, sample } from 'effector';
import { TSaveOtpData } from 'pages /AuthNumber/config/types';

export const $mobileNuber = createStore<string | null>(null)
export const $codeOpt = createStore<TSaveOtpData | null>(null)

// $codeOpt.watch(v => console.log('codeOpt', v))


export const setMobileNumber = createEvent<string>()
export const resetMobileNumber = createEvent()
export const setCodeOpt = createEvent<TSaveOtpData>()
export const resetCodeOpt = createEvent()
export const sendMobileNumber = createEvent<string>()



$mobileNuber.on(setMobileNumber, (_, data) => data)
$mobileNuber.reset(resetMobileNumber)
$codeOpt.on(setCodeOpt, (_, data) => data)
$codeOpt.reset(resetCodeOpt)
