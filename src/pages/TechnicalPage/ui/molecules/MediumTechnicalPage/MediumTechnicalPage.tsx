import { Typography } from '@shared/ui/core/Typography';
import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

type Props = {
    img: ReactNode
    title: string
    subString: string
}
const Root = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const CircleWrapper = styled.View`
    width: 148px;
    height: 148px;
    background-color: ${({ theme }) => theme.palette.content.secondary};
    border-radius: 74px;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
`

const Title = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
`
const SubString = styled(Typography)`
    margin-top: 16px;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.primary};
`

const MediumTechnicalPage = ({
    img,
    subString,
    title
}: Props) => {
    return (
        <Root>
            <CircleWrapper>
                {img}
            </CircleWrapper>
            <Title
                variant='subtitle2'
            >
                {title}
            </Title>
            <SubString
                variant='body15Regular'
            >
                {subString}
            </SubString>
        </Root>
    )
}

export default MediumTechnicalPage