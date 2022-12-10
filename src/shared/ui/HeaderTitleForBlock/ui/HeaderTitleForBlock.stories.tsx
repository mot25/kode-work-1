import HeaderTitleForBlock from '@shared/ui/HeaderTitleForBlock/ui/HeaderTitleForBlock';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof HeaderTitleForBlock> = {
  title: '/HeaderTitleForBlock',
  component: HeaderTitleForBlock,
  args: {
      text: 'HeaderTitleForBlock'
  },
}

export default Meta

type THeaderTitleForBlockStory = ComponentStory<typeof HeaderTitleForBlock>

export const _HeaderTitleForBlock: THeaderTitleForBlockStory = args => <HeaderTitleForBlock {...args} />