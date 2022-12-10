import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import CellKeyboardWithNum from 'features /CustomKeyboard/ui/atom/CellKeyboardWithNum/CellKeyboardWithNum';

const Meta: ComponentMeta<typeof CellKeyboardWithNum> = {
    title: 'ui/atom/CellKeyboardWithNum',
    component: CellKeyboardWithNum,
    args: {
        fn: () => { },
        isBottom: true,
        number: 3
    },
}

export default Meta

type TCellKeyboardWithNumStory = ComponentStory<typeof CellKeyboardWithNum>

export const _CellKeyboardWithNum: TCellKeyboardWithNumStory = args => <CellKeyboardWithNum {...args} />