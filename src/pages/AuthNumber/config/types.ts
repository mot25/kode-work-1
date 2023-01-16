export type TReqDtoGetCodeOpt = {
    phone: string
}

export type TResponseCodeOpt = {
    otpId: string
    otpCode: string
    otpLen: number
}
export type TReqDtoAuth = {
    guestToken: string
    password: string
}

export type TResponseAuth = {
    accessToken: string
    refreshToken: string
}

export type TSaveOtpData = {
    otpId: string
    otpCode: string
}