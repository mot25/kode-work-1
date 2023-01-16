import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import CustomKeyboard from './CustomKeyboard';

const Meta: ComponentMeta<typeof CustomKeyboard> = {
    title: 'ui/organisms/CustomKeyboard',
    component: CustomKeyboard,
    args: {
        leftText: {
            fnLeft: () => { },
            text: 'Повторить через 2:59',
            disabled: true
        },
        returnNumber(num) {

        },
        rightImg: {
            fnRight: () => { },
            type: 'clear' || 'enter'
        }
    },
}

export default Meta

type TCustomKeyboardStory = ComponentStory<typeof CustomKeyboard>

export const _CustomKeyboard: TCustomKeyboardStory = args => <CustomKeyboard {...args} />