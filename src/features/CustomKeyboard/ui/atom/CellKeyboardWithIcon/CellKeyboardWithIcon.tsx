import { Typography } from '@shared/ui/core/Typography';
import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

type Props = {
    img: ReactNode
    isBottom?: boolean
    fn: VoidFunction
}
const Root = styled(CTouchableOpacity) <{ isBottom?: boolean }>`
    height: ${({ isBottom }) => isBottom ? 68 : 41}px;
    width: 33%;
    background-color: ${({ theme }) => theme.palette.background.primary};
    justify-content: center;
    align-items: center;
    margin-bottom: 27px;
`

const CellKeyboardWithIcon = ({
    img,
    fn,
    isBottom
}: Props) => {
    return (
        <Root
            isBottom={isBottom}
            onPress={fn}
        >
          {img}
        </Root>
    )
}

export default CellKeyboardWithIcon