import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import SearchAtomCategoryList from 'pages /CategoryList/ui/atom/SearchAtomCategoryList/SearchAtomCategoryList';

const Meta: ComponentMeta<typeof SearchAtomCategoryList> = {
  title: 'ui/atom/SearchAtomCategoryList',
  component: SearchAtomCategoryList,
  args: {
      input: 'Kode',
  },
}

export default Meta

type TSearchAtomCategoryListStory = ComponentStory<typeof SearchAtomCategoryList>

export const _SearchAtomCategoryList: TSearchAtomCategoryListStory = args => <SearchAtomCategoryList {...args} />