import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import ProcentAtom from 'features /SumCardItem/ui/atom/ProcentAtom/ProcentAtom';

const Meta: ComponentMeta<typeof ProcentAtom> = {
  title: 'ui/atom/ProcentAtom',
  component: ProcentAtom,
  args: {
    value: '2500'
  },
}

export default Meta

type TProcentAtomStory = ComponentStory<typeof ProcentAtom>

export const _ProcentAtom: TProcentAtomStory = args => <ProcentAtom {...args} />