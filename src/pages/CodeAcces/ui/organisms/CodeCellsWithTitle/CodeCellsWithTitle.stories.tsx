import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import CodeCellsWithTitle from './CodeCellsWithTitle';


const Meta: ComponentMeta<typeof CodeCellsWithTitle> = {
  title: 'ui/organisms/CodeCellsWithTitle',
  component: CodeCellsWithTitle,
  args: {
    attemptsLeft: 5,
    error: false,
  },
}

export default Meta

type TCodeCellsWithTitleStory = ComponentStory<typeof CodeCellsWithTitle>

export const _CodeCellsWithTitle: TCodeCellsWithTitleStory = args => <CodeCellsWithTitle {...args} />