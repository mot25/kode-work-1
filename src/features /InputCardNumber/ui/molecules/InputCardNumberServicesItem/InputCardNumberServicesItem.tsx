import ClearInputAtom from 'features /InputCardNumber/ui/atom/ClearInputAtom';
import TextInputMaskAtom from 'features /InputCardNumber/ui/atom/TextInputMaskAtom';
import { WrapperImageAtom } from 'features /InputCardNumber/ui/atom/WrapperImageAtom';
import React from 'react';
import styled from 'styled-components/native';

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