import { Typography } from '@shared/ui/core/Typography';
import React from 'react';
import styled from 'styled-components/native';


const Root = styled.View`
    padding-bottom: 8px;
    padding-top: 49px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.palette.background.primary};
`

const Wrapper = styled.View`
padding: 0 16px;
`

const Text = styled(Typography)`
color: ${({ theme }) => theme.palette.text.primary};
`

const PaymentsMainHeader = () => {
    return (
        <Root
        >
            <Wrapper
            >
                <Text
                    variant='title'
                >Платежи</Text>
            </Wrapper>
        </Root>
    )
}

export default PaymentsMainHeader