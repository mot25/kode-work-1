import React from 'react';
import styled from 'styled-components/native';

type Props = {
    uri: string | undefined
}
const AVATAR_SIZE = 24
const Wrapper = styled.View`
    padding-left: 24px;
    padding-right: 16px;
`

const Image = styled.Image`
            width: ${AVATAR_SIZE}px;
        height: ${AVATAR_SIZE}px;
`
const WrapperImageAtom = ({
    uri
}: Props) => {
    return (
        <Wrapper >
            <Image source={{ uri: uri }} />
        </Wrapper>
    )
}

export default WrapperImageAtom