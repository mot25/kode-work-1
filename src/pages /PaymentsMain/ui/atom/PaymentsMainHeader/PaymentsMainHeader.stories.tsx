import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import PaymentsMainHeader from 'pages /PaymentsMain/ui/atom/PaymentsMainHeader/PaymentsMainHeader';

const Meta: ComponentMeta<typeof PaymentsMainHeader> = {
  title: 'ui/atom/PaymentsMainHeader',
  component: PaymentsMainHeader,
  args: {
    
  },
}

export default Meta

type TPaymentsMainHeaderStory = ComponentStory<typeof PaymentsMainHeader>

export const _PaymentsMainHeader: TPaymentsMainHeaderStory = args => <PaymentsMainHeader />