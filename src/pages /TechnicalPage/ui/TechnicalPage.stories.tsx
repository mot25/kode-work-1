import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { TechnicalPage } from 'pages /TechnicalPage';

import { IconCompleteAuth } from '../../../../assets/icons/IconCompleteAuth';

const Meta: ComponentMeta<typeof TechnicalPage> = {
    title: '/TechnicalPage',
    component: TechnicalPage,
    args: {
        img: <IconCompleteAuth />,
        onClose: () => { },
        onPress: () => { },
        title: "Внимание",
        subString: "Сервер временно недоступен. Пожалуйста, повторите попытку позднее",
    },
}

export default Meta

type TTechnicalPageStory = ComponentStory<typeof TechnicalPage>

export const _TechnicalPage: TTechnicalPageStory = args => <TechnicalPage {...args} />