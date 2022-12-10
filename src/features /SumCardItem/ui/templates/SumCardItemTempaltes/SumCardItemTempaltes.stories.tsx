import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import SumCardItemTempaltes from 'features /SumCardItem/ui/templates/SumCardItemTempaltes/SumCardItemTempaltes';

const Meta: ComponentMeta<typeof SumCardItemTempaltes> = {
  title: 'ui/templates/SumCardItemTempaltes',
  component: SumCardItemTempaltes,
  args: {
      error: false,
      value: "3223"
  },
}

export default Meta

type TSumCardItemTempaltesStory = ComponentStory<typeof SumCardItemTempaltes>

export const _SumCardItemTempaltes: TSumCardItemTempaltesStory = args => <SumCardItemTempaltes {...args} />