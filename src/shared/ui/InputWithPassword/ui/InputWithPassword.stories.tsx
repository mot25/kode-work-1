import InputWithPassword from '@shared/ui/InputWithPassword/ui/InputWithPassword';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof InputWithPassword> = {
    title: '/InputWithPassword',
    component: InputWithPassword,
    args: {
        onBlur: () => { },
        onChange(val) {
        },
        onFocus: () => { },
        value: 'Passowrd124'
    },
}

export default Meta

type TInputWithPasswordStory = ComponentStory<typeof InputWithPassword>

export const Default: TInputWithPasswordStory = args => <InputWithPassword {...args} />