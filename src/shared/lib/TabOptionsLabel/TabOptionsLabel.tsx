import { Typography } from '@shared/ui/core/Typography';
import styled from 'styled-components/native';




const Text = styled(Typography) <{ focused: boolean }>`
    color: ${({ focused, theme }) => focused ? theme.palette.indicator.error : theme.palette.text.secondary};
`


export const TabOptionsLabel = (focused: boolean, title: string,) => <Text
    variant='caption2'
    focused={focused}
>{title}</Text>


