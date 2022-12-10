import { thousand } from '@shared/lib/helpers';
import { Typography } from '@shared/ui/core/Typography';
import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import React from 'react';
import styled from 'styled-components/native';




type Props = {
    number: number
    onPress: () => void
}
const TouchableOpacity = styled(CTouchableOpacity)`
    padding: 6px 15px;
    border-radius:14px;
    background-color: ${({ theme }) => theme.palette.background.bgChips};
`
const Text = styled(Typography)`
color: ${({ theme }) => theme.palette.text.secondary};
`

const ChipsItem = ({ number, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text
                variant='caption1'
            >
                {thousand(number.toString())} ₽
            </Text>
        </TouchableOpacity>
    )
}

export default ChipsItem