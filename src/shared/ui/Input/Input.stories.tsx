import Input from '@shared/ui/Input/Input';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof Input> = {
    title: '/Input',
    component: Input,
    args: {
        placeholder: 'placeholder',
        value: 'Input'
    },
}

export default Meta

type TInputStory = ComponentStory<typeof Input>

export const _Input: TInputStory = args => <Input {...args} />