import { Typography } from '@shared/ui/core/Typography';
import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

import { IconBgCard } from '../../../../../assets/icons/IconBgCard';

type Props = {
    fourNumberCard: number
    typeCardIcon: ReactNode
}
const Root = styled.View`
    margin-right: 16px;
`
const Wrapper = styled.View`
    position: relative;
    `

const Text = styled(Typography)`
color: ${({ theme }) => theme.palette.text.primary};
position: absolute;
top:2px;
right: 6px;
`

const WrapperTypeCard = styled.View`
position: absolute;
right: -1px;
bottom: -11px;
`
const LeftSelectCardItem = ({
    fourNumberCard,
    typeCardIcon
}: Props) => {
    return (
        <Root>
            <Wrapper  >
                <IconBgCard />
                <Text
                    variant='cardNumber'
                >{fourNumberCard}</Text>
                <WrapperTypeCard>
                    {typeCardIcon}
                </WrapperTypeCard>
            </Wrapper>
        </Root>)
}

export default LeftSelectCardItem