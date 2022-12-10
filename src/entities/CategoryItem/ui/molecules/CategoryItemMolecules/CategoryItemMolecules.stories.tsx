import { CategoryItemMolecules } from '@entities/CategoryItem/ui/molecules/CategoryItemMolecules';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof CategoryItemMolecules> = {
  title: 'ui/molecules/CategoryItemMolecules',
  component: CategoryItemMolecules,
  args: {
    data: {
      category_icon: 'https://github.com/kode-frontend/files/raw/main/1_mobile.png',
      category_id: '3',
      category_name: "Мобильная связь",
      services: []
    },
    onPress(id) {
        
    },
  },
}

export default Meta

type TCategoryItemMoleculesStory = ComponentStory<typeof CategoryItemMolecules>

export const _CategoryItemMolecules: TCategoryItemMoleculesStory = args => <CategoryItemMolecules {...args} />