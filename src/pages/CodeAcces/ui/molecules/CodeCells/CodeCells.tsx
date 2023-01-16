import { useStore } from 'effector-react';

import React from 'react';
import styled from 'styled-components/native';
import { CellAcces } from '../../atom/CellAcces';

type Props = {
    error: boolean,
    optCode: string[]
}

const Root = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`

const CellWrapper = styled.View`
    margin: 0 3px;
`

const Seperator = styled.View<{ error: boolean }>`
    width: 10px;
    height: 2px;
    background-color: ${({ theme, error }) => error ? theme.palette.indicator.error : theme.palette.content.tertiary};
`

const CodeCells = ({
    error,
    optCode
}: Props) => {
    return (
        <Root>
            <CellWrapper>
                <CellAcces
                    error={error}
                    num={optCode[0]}
                    isActive={optCode.length === 0}
                />
            </CellWrapper>
            <CellWrapper>
                <CellAcces
                    error={error}
                    num={optCode[1]}
                    isActive={optCode.length === 1}
                />
            </CellWrapper>
            <Seperator
                error={error}
            />
            <CellWrapper>
                <CellAcces
                    error={error}
                    num={optCode[2]}
                    isActive={optCode.length === 2}
                />
            </CellWrapper>
            <CellWrapper>
                <CellAcces
                    error={error}
                    num={optCode[3]}
                    isActive={optCode.length === 3}
                />
            </CellWrapper>
        </Root>
    )
}

export default CodeCells