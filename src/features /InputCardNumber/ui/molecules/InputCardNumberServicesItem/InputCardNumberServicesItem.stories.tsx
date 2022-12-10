import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { InputCardNumberServicesItem } from 'features /InputCardNumber';

const Meta: ComponentMeta<typeof InputCardNumberServicesItem> = {
  title: 'ui/molecules/InputCardNumberServicesItem',
  component: InputCardNumberServicesItem,
  args: {
      error: false,
      uri: 'https://github.com/kode-frontend/files/raw/main/kode.png',
  },
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
}

export default Meta

type TInputCardNumberServicesItemStory = ComponentStory<typeof InputCardNumberServicesItem>

export const _InputCardNumberServicesItem: TInputCardNumberServicesItemStory = args => <InputCardNumberServicesItem {...args} />