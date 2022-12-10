import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import LoaderAuthNumber from 'pages /AuthNumber/ui/atom/LoaderAuthNumber/LoaderAuthNumber';

const Meta: ComponentMeta<typeof LoaderAuthNumber> = {
  title: 'ui/atom/LoaderAuthNumber',
  component: LoaderAuthNumber,
  args: {
    
  },
}

export default Meta

type TLoaderAuthNumberStory = ComponentStory<typeof LoaderAuthNumber>

export const _LoaderAuthNumber: TLoaderAuthNumberStory = args => <LoaderAuthNumber />