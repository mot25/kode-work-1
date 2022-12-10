import SkeletonListItem from '@entities/Skeleton/ui/atom/SkeletonListItem/SkeletonListItem';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof SkeletonListItem> = {
  title: 'ui/atom/SkeletonListItem',
  component: SkeletonListItem,
  args: {

  },
}

export default Meta

type TSkeletonListItemStory = ComponentStory<typeof SkeletonListItem>

export const _SkeletonListItem: TSkeletonListItemStory = args => <SkeletonListItem {...args} />