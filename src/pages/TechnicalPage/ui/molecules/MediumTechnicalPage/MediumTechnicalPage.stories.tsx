import { ComponentMeta, ComponentStory } from '@storybook/react-native';


import { IconCompleteAuth } from '../../../../../../assets/icons/IconCompleteAuth';
import MediumTechnicalPage from './MediumTechnicalPage';

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