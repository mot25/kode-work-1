import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import InputAuthNumber from './InputAuthNumber';


const Meta: ComponentMeta<typeof InputAuthNumber> = {
    title: 'ui/molecules/InputAuthNumber',
    component: InputAuthNumber,
    args: {
        error: false,
        isLoading: false,
        onBlur: () => { },
        onFocus: () => { },
        value: '1234',
        onChange(value) {

        },
    },
}

export default Meta

type TInputAuthNumberStory = ComponentStory<typeof InputAuthNumber>

export const _InputAuthNumber: TInputAuthNumberStory = args => <InputAuthNumber {...args} />