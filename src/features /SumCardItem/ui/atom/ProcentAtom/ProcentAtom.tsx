import { getProcent, thousand } from '@shared/lib/helpers';
import { Typography } from '@shared/ui/core/Typography';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
    value: string
}
const procent = 10
const Text = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.secondary};
`
const ProcentAtom = ({
    value = '0'
}: Props) => {
    return (
        <Text
            variant='caption1'
        >Ваш кешбек составит {procent}% - {thousand(getProcent(procent, value).toString())} ₽</Text>
    )
}

export default ProcentAtom