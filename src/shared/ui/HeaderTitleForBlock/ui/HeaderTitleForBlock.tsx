import { Typography } from '@shared/ui/core/Typography';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
    text: string
}

const Text = styled(Typography)`
    margin-bottom: 20px;
    color: ${({ theme }) => theme.palette.text.tertiary};
`
const HeaderTitleForBlock = ({ text }: Props) => {
    return (
        <Text
            variant='body15Semibold'
        >
            {text}
        </Text>
    )
}

export default HeaderTitleForBlock