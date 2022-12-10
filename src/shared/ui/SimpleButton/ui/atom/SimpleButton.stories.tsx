import SimpleButton from '@shared/ui/SimpleButton/ui/atom/SimpleButton';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof SimpleButton> = {
  title: 'ui/atom/SimpleButton',
  component: SimpleButton,
  args: {
      text: 'SimpleButton',
      isDisabled: false,
  },
}

export default Meta

type TSimpleButtonStory = ComponentStory<typeof SimpleButton>

export const _SimpleButton: TSimpleButtonStory = args => <SimpleButton {...args} />