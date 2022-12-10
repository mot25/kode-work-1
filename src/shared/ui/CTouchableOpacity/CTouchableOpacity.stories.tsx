import { Typography } from '@shared/ui/core/Typography';
import CTouchableOpacity from '@shared/ui/CTouchableOpacity/CTouchableOpacity';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import styled from 'styled-components/native';

const Meta: ComponentMeta<typeof CTouchableOpacity> = {
    title: '/CTouchableOpacity',
    component: CTouchableOpacity,
    args: {
    },
}
const Text = styled(Typography)`
justify-content: center;
align-content: center;
padding: 20px;
color: #fff;
`
export default Meta

type TCTouchableOpacityStory = ComponentStory<typeof CTouchableOpacity>

export const _CTouchableOpacity: TCTouchableOpacityStory = args => <CTouchableOpacity {...args} >
    <Text
        variant='title'
    >CTouchableOpacity</Text>
</CTouchableOpacity>