import { LoaderCircle } from '@shared/ui/LoaderCircle';
import { darkTheme } from '@shared/ui/theme';
import React from 'react';
import styled from 'styled-components/native';

type Props = {}
const Root = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.background.primary};
`
const PageLoader = (props: Props) => {
    return (
        <Root>
            <LoaderCircle color={darkTheme.palette.helpers.line_skeleton} />
        </Root>
    )
}

export default PageLoader