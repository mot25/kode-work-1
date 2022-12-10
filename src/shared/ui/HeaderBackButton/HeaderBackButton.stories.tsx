import HeaderBackButton from '@shared/ui/HeaderBackButton/HeaderBackButton';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof HeaderBackButton> = {
  title: '/HeaderBackButton',
  component: HeaderBackButton,
  args: {
    
  },
}

export default Meta

type THeaderBackButtonStory = ComponentStory<typeof HeaderBackButton>

export const _HeaderBackButton: THeaderBackButtonStory = args => <HeaderBackButton {...args} />