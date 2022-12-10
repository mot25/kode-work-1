import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import CellAcces from 'pages /CodeAcces/ui/atom/CellAcces/CellAcces';

const Meta: ComponentMeta<typeof CellAcces> = {
  title: 'ui/atom/CellAcces',
  component: CellAcces,
  args: {
      error: false,
      isActive: false,
      num: '2'
  },
}

export default Meta

type TCellAccesStory = ComponentStory<typeof CellAcces>

export const _CellAcces: TCellAccesStory = args => <CellAcces {...args} />