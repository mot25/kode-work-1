import { Typography } from '@shared/ui/core/Typography';
import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
    text: string
    isBottom?: boolean
    fn: VoidFunction
    disabled?: boolean

}

const Root = styled(CTouchableOpacity) <{ isBottom?: boolean }>`
    height: ${({ isBottom }) => isBottom ? 68 : 41}px;
    width: 33%;
    background-color: ${({ theme }) => theme.palette.background.primary};
    justify-content: center;
    align-items: center;
    margin-bottom: 27px;
    padding: 0 3px;
    text-align: center;
`
const Text = styled(Typography) <{ disabled?: boolean }>`
    color: ${({ theme, disabled }) => disabled ? theme.palette.text.secondary : theme.palette.text.primary};
    text-align: center;

`

const CellKeyboardWithText = ({
    text,
    fn,
    isBottom,
    disabled
}: Props) => {
    return (
        <Root
            disabled={disabled}
            isBottom={isBottom}
            onPress={fn}
        >
            <Text
                disabled={disabled}
                variant='caption1'
            >
                {text}
            </Text>
        </Root>
    )
}

export default CellKeyboardWithText