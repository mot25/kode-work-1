import EmpetyList from '@shared/ui/EmpetyList/EmpetyList';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof EmpetyList> = {
  title: '/EmpetyList',
  component: EmpetyList,
  args: {
    
  },
}

export default Meta

type TEmpetyListStory = ComponentStory<typeof EmpetyList>

export const _EmpetyList: TEmpetyListStory = args => <EmpetyList />