import ServiceItemMolecules from '@entities/ServicesItem/ui/molecules/ServiceItemMolecules/ServiceItemMolecules';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof ServiceItemMolecules> = {
  title: 'ui/molecules/ServiceItemMolecules',
  component: ServiceItemMolecules,
  args: {
    data: {
      service_icon: 'https://github.com/kode-frontend/files/raw/main/kode.png',
      service_id: '1',
      service_name: 'Kode Mobile'
    },
    onPress(id) {
        
    },
  },
}

export default Meta

type TServiceItemMoleculesStory = ComponentStory<typeof ServiceItemMolecules>

export const _ServiceItemMolecules: TServiceItemMoleculesStory = args => <ServiceItemMolecules {...args} />