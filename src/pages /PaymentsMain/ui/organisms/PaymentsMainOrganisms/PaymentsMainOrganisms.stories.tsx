import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { TCategory } from 'pages /CategoryList/config/apiTypes';
import PaymentsMainOrganisms from 'pages /PaymentsMain/ui/organisms/PaymentsMainOrganisms/PaymentsMainOrganisms';

const categoryes: TCategory[] = [
    {
        "category_id": "1",
        "category_name": "Мобильная связь",
        "category_icon": "https://github.com/kode-frontend/files/raw/main/1_mobile.png",
        "services": [
            {
                "service_id": "11",
                "service_name": "МТС",
                "service_icon": "https://github.com/kode-frontend/files/raw/main/MTS.png"
            },
            {
                "service_id": "12",
                "service_name": "МегаФон",
                "service_icon": "https://github.com/kode-frontend/files/raw/main/megafon.png"
            },
            {
                "service_id": "13",
                "service_name": "Beeline",
                "service_icon": "https://github.com/kode-frontend/files/raw/main/beeline.png"
            },
            {
                "service_id": "14",
                "service_name": "Tele2",
                "service_icon": "https://github.com/kode-frontend/files/raw/main/tele2.png"
            },
            {
                "service_id": "15",
                "service_name": "Kode Mobile",
                "service_icon": "https://github.com/kode-frontend/files/raw/main/kode.png"
            }
        ]
    },
    {
        "category_id": "2",
        "category_name": "ЖКХ",
        "category_icon": "https://github.com/kode-frontend/files/raw/main/1_JKH.png",
        "services": []
    },
    {
        "category_id": "3",
        "category_name": "Интернет",
        "category_icon": "https://github.com/kode-frontend/files/raw/main/1_Internet.png",
        "services": []
    }
]

const Meta: ComponentMeta<typeof PaymentsMainOrganisms> = {
    title: 'ui/organisms/PaymentsMainOrganisms',
    component: PaymentsMainOrganisms,
    args: {
        data: categoryes,
        isFetching: false,
        goToCategory(id) {

        },
    },

}

export default Meta

type TPaymentsMainOrganismsStory = ComponentStory<typeof PaymentsMainOrganisms>

export const _PaymentsMainOrganisms: TPaymentsMainOrganismsStory = args => <PaymentsMainOrganisms {...args} />



