import Skeleton from '@entities/Skeleton/ui/organisms/Skeleton/Skeleton';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const Meta: ComponentMeta<typeof Skeleton> = {
    title: 'ui/organisms/Skeleton',
    component: Skeleton,

}

export default Meta

type TSkeletonStory = ComponentStory<typeof Skeleton>

export const _Skeleton: TSkeletonStory = () => <Skeleton />