import React from 'react';
import styled from 'styled-components/native';

type Props = {
    source: string
}

const AVATAR_SIZE_WRAPPER = 40
const Wrapper = styled.View`
    width: ${AVATAR_SIZE_WRAPPER}px;
    height: ${AVATAR_SIZE_WRAPPER}px;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.palette.background.bgListLeft};    
    border-radius: ${AVATAR_SIZE_WRAPPER / 2}px;
`
const Image = styled.Image`
    width: 100%;
    height: 100%;
`
const LeftListServicesWithImage = ({ source }: Props) => {
    return (
        <Wrapper>
            <Image
                source={{ uri: source }}
            />
        </Wrapper>
    )
}

export default LeftListServicesWithImage