import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import ChipsOrganisms from 'features /SumCardItem/ui/organisms/ChipsOrganisms/ChipsOrganisms';

const Meta: ComponentMeta<typeof ChipsOrganisms> = {
  title: 'ui/organisms/ChipsOrganisms',
  component: ChipsOrganisms,
  args: {
      chipsVariants: [100, 2500, 3000, 3500]
  },
}

export default Meta

type TChipsOrganismsStory = ComponentStory<typeof ChipsOrganisms>

export const _ChipsOrganisms: TChipsOrganismsStory = args => <ChipsOrganisms {...args} />