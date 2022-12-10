import React from 'react';
import styled from 'styled-components/native';

type Props = {
    source: string
}

const AVATAR_SIZE_WRAPPER = 40
const AVATAR_SIZE = 22
const Wrapper = styled.View`
    width: ${AVATAR_SIZE_WRAPPER}px;
    height: ${AVATAR_SIZE_WRAPPER}px;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.palette.background.bgListLeft};    
    border-radius: 20px;
`
const Image = styled.Image`
    width: ${AVATAR_SIZE}px;
    height: ${AVATAR_SIZE}px;
`
const LeftListCategoryWithImage = ({ source }: Props) => {
    return (
        <Wrapper>
            <Image
                source={{ uri: source }}
            />
        </Wrapper>
    )
}

export default LeftListCategoryWithImage