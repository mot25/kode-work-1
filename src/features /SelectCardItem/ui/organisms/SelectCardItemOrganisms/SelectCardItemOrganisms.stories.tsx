import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { SelectCardItemOrganisms } from 'features /SelectCardItem';

const Meta: ComponentMeta<typeof SelectCardItemOrganisms> = {
  title: 'ui/organisms/SelectCardItemOrganisms',
  component: SelectCardItemOrganisms,
  args: {
    balance: 142342,
    fourNumberCard: 4534,
    title: "Карта зарплатная",
    typeCard: 'MASTERCARD'
  },
}

export default Meta

type TSelectCardItemOrganismsStory = ComponentStory<typeof SelectCardItemOrganisms>

export const _SelectCardItemOrganisms: TSelectCardItemOrganismsStory = args => <SelectCardItemOrganisms {...args} />