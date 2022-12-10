import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import PageLoader from 'pages /CodeAcces/ui/molecules/PageLoader/PageLoader';

const Meta: ComponentMeta<typeof PageLoader> = {
  title: 'ui/molecules/PageLoader',
  component: PageLoader,
  args: {
    
  },
}

export default Meta

type TPageLoaderStory = ComponentStory<typeof PageLoader>

export const _PageLoader: TPageLoaderStory = args => <PageLoader  />