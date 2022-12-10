import { darkTheme } from '@shared/ui/theme';
import React from 'react';
import styled from 'styled-components/native';

import { IconSearch } from '../../../../assets/icons/IconSearch';


type Props = {
    value: string
    placeholder?: string
    onChange: (e: string) => void
    onFocus?: () => void
    onBlur?: () => void

}
const Root = styled.View`
    padding: 16px;
`
const Wrapper = styled.View`
    align-items: center;
    padding: 0 10px;
    flex-direction: row;
    height: 36px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.content.secondary};
`
const InputContent = styled.TextInput`
    width: 100%;
    height: 100%;
    font-size: 15px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: 'SF_PRO_REGULAR_400';
    letter-spacing: -0.36px;
    margin-left: 3px;

`
const Input = ({
    value,
    placeholder,
    onChange,
    onFocus,
    onBlur
}: Props) => {
    return (
        <Root
        >
            <Wrapper
            >
                <IconSearch />
                <InputContent
                    selectionColor={darkTheme.palette.accent.primary}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={darkTheme.palette.content.tertiary}
                    onChangeText={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}

                />
            </Wrapper>
        </Root>
    )
}

export default Input