import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import MediumTechnicalPage from 'pages /TechnicalPage/ui/molecules/MediumTechnicalPage/MediumTechnicalPage';

import { IconCompleteAuth } from '../../../../../../assets/icons/IconCompleteAuth';

const Meta: ComponentMeta<typeof MediumTechnicalPage> = {
    title: 'ui/molecules/MediumTechnicalPage',
    component: MediumTechnicalPage,
    args: {
        title: "Внимание",
        subString: "Сервер временно недоступен. Пожалуйста, повторите попытку позднее",
        img: <IconCompleteAuth />
    },
}

export default Meta

type TMediumTechnicalPageStory = ComponentStory<typeof MediumTechnicalPage>

export const _MediumTechnicalPage: TMediumTechnicalPageStory = args => <MediumTechnicalPage {...args} />