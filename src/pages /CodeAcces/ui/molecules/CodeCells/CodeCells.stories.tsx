import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import CodeCells from 'pages /CodeAcces/ui/molecules/CodeCells/CodeCells';

const Meta: ComponentMeta<typeof CodeCells> = {
  title: 'ui/molecules/CodeCells',
  component: CodeCells,
  args: {
      error: false,
      optCode: ['1', '2', '3']
  },
}

export default Meta

type TCodeCellsStory = ComponentStory<typeof CodeCells>

export const _CodeCells: TCodeCellsStory = args => <CodeCells {...args} />