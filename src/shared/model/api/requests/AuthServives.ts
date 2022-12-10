import { Endpoints } from '@shared/config/Endpoints';
import { TReqDtoAuth, TReqDtoGetCodeOpt, TResponseAuth, TResponseCodeOpt } from 'pages /AuthNumber/config/types';

import { api } from '../apiaxs';

export class AuthServives {
    static async getOpt(data: TReqDtoGetCodeOpt): Promise<TResponseCodeOpt> {
        const response = await api.post(Endpoints.GET_OPT_CODE, data)
        return response.data
    }
    static async enterApplication(data: TReqDtoAuth): Promise<TResponseAuth> {
        const response = await api.post(Endpoints.GET_ENTER_APP, data)
        return response.data
    }
}
