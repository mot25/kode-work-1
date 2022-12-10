import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import ItemAlert from 'features /MyALertProvider/ui/molecules/ItemAlert/ItemAlert';

const Meta: ComponentMeta<typeof ItemAlert> = {
  title: 'ui/molecules/ItemAlert',
  component: ItemAlert,
  args: {
      colorType: 'error',
      id: 1,
      text: 'Введён неверный код подтверждения'
  },
}

export default Meta

type TItemAlertStory = ComponentStory<typeof ItemAlert>

export const _ItemAlert: TItemAlertStory = args => <ItemAlert {...args} />