
import React from 'react';
import styled from 'styled-components/native';
import ClearInputAtom from '../../atom/ClearInputAtom';
import TextInputMaskAtom from '../../atom/TextInputMaskAtom';
import { WrapperImageAtom } from '../../atom/WrapperImageAtom';

type Props = {
    uri: string | undefined
    error: boolean | undefined
    onChange: (str: string) => void
    value: string
    clearInput: () => void
}
const Root = styled.View`
    padding: 16px;
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.palette.background.secondary};
`


const Wrapper = styled.View`
    height: 52px;
    border-radius: 26px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.palette.content.primary};
    align-items: center;
`
const WrapperInputMolecules = ({
    uri,
    error,
    onChange,
    value,
    clearInput
}: Props) => {
    return (
        <Root>
            <Wrapper >
                <WrapperImageAtom
                    uri={uri}
                />
                <TextInputMaskAtom
                    error={error}
                    onChange={onChange}
                    value={value}
                />
                <ClearInputAtom
                    clearInput={clearInput}
                />
            </Wrapper>
        </Root>
    )
}

export default WrapperInputMolecules