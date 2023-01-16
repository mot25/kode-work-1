import { thousand } from '@shared/lib/helpers';
import { Typography } from '@shared/ui/core/Typography';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { IconArrow } from '../../../../../assets/icons/IconArrow';
import { IconBgCard } from '../../../../../assets/icons/IconBgCard';

type Props = {
    title: string,
    balance: number,
}


const Root = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
flex: 1;
`

const Title = styled(Typography)`
                margin-bottom: 3px;
                color: ${({ theme }) => theme.palette.text.primary};
                `

const Balance = styled(Typography)`
                color: ${({ theme }) => theme.palette.text.primary};
                `

const RightSelectCardItem = ({
    title,
    balance
}: Props) => {
    return (
        <Root
        >
            <View>

                <Title
                    variant='body15Regular'
                >
                    {title}
                </Title>

                <Balance
                    variant='caption1'
                >
                    {thousand(balance.toString())} ₽
                </Balance>
            </View>
            <IconArrow />
        </Root>
    )
}

export default RightSelectCardItem