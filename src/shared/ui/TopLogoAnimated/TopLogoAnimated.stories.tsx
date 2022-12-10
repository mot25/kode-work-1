import TopLogoAnimated from '@shared/ui/TopLogoAnimated/TopLogoAnimated';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof TopLogoAnimated> = {
    title: '/TopLogoAnimated',
    component: TopLogoAnimated,
    args: {
        isActive: false
    },
}

export default Meta

type TTopLogoAnimatedStory = ComponentStory<typeof TopLogoAnimated>

export const _TopLogoAnimated: TTopLogoAnimatedStory = args => <TopLogoAnimated {...args} />