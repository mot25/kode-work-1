import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { IconClearCustomKey } from '../../../../../../assets/icons/IconClearCustomKey';
import CellKeyboardWithIcon from './CellKeyboardWithIcon';

const Meta: ComponentMeta<typeof CellKeyboardWithIcon> = {
  title: 'ui/atom/CellKeyboardWithIcon',
  component: CellKeyboardWithIcon,
  args: {
    fn: () => { },
    img: <IconClearCustomKey />,
    isBottom: true,
  },
}

export default Meta

type TCellKeyboardWithIconStory = ComponentStory<typeof CellKeyboardWithIcon>

export const _CellKeyboardWithIcon: TCellKeyboardWithIconStory = args => <CellKeyboardWithIcon {...args} />