import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import CellKeyboardWithText from './CellKeyboardWithText';

const Meta: ComponentMeta<typeof CellKeyboardWithText> = {
  title: 'ui/atom/CellKeyboardWithText',
  component: CellKeyboardWithText,
  args: {
    disabled: false,
    fn: () => { },
    isBottom: true,
    text: 'Повторить через 2:59'
  },
}

export default Meta

type TCellKeyboardWithTextStory = ComponentStory<typeof CellKeyboardWithText>

export const _CellKeyboardWithText: TCellKeyboardWithTextStory = args => <CellKeyboardWithText {...args} />