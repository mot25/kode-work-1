import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import SumCardItemInputWrapper from './SumCardItemInputWrapper';

const Meta: ComponentMeta<typeof SumCardItemInputWrapper> = {
  title: 'ui/molecules/SumCardItemInputWrapper',
  component: SumCardItemInputWrapper,
  args: {
    value: '23423'
  },
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
}

export default Meta

type TSumCardItemInputWrapperStory = ComponentStory<typeof SumCardItemInputWrapper>

export const _SumCardItemInputWrapper: TSumCardItemInputWrapperStory = args => <SumCardItemInputWrapper {...args} />