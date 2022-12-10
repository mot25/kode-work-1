import { Typography } from '@shared/ui/core/Typography';
import StubName from '@shared/ui/StubName/ui/StubName';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof StubName> = {
    title: '/StubName',
    component: StubName,
    args: {

    },
}

export default Meta

type TStubNameStory = ComponentStory<typeof StubName>

export const _StubName: TStubNameStory = args => <StubName {...args} >
    <Typography
        variant='body20'
    >
        StubName
    </Typography>
</StubName>