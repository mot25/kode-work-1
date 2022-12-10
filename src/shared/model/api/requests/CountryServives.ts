import { Endpoints } from '@shared/config/Endpoints';

import { apiGit } from '../apiaxs';

export class CountryServives {
    static async getCategory() {
        const response = await apiGit.get(Endpoints.CATERORY)
        return response.data.category
    }
}
