import { Typography } from '@shared/ui/core/Typography';
import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
    number: number
    isBottom?: boolean
    fn: (value: number) => void
}
const Root = styled(CTouchableOpacity) <{ isBottom?: boolean }>`
    height: ${({ isBottom }) => isBottom ? 68 : 41}px;
    width: 33%;
    background-color: ${({ theme }) => theme.palette.background.primary};
    justify-content: center;
    align-items: center;
    margin-bottom: 27px;

`
const Num = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
`

const CellKeyboardWithNum = ({
    number,
    fn,
    isBottom
}: Props) => {
    return (
        <Root
            isBottom={isBottom}
            onPress={() => fn(number)}
        >
            <Num
                variant='title'
            >
                {number}
            </Num>
        </Root>
    )
}

export default CellKeyboardWithNum