import { darkTheme } from '@shared/ui/theme';
import { LoaderAuthNumber } from 'pages /AuthNumber/ui/atom/LoaderAuthNumber';
import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

import { IconAuthNumberMobile } from '../../../../../../assets/icons/IconAuthNumberMobile';

type Props = {
    value: string | null
    onChange: (value: string) => void
    isLoading: boolean
    onBlur: VoidFunction
    onFocus: VoidFunction
    error: boolean
}
const Root = styled.View`
    background-color: ${({ theme }) => theme.palette.content.primary};
    border-radius: 26px;
    padding: 0 20px 0 30px;
    flex-direction: row;
    align-items: center;
`
const Input = styled(TextInputMask) <{ error: boolean }>`
    flex: 1;
    margin-left: 22px;
    color: ${({ theme, error }) => error ? theme.palette.indicator.error : theme.palette.text.primary};
    font-family: 'SF_PRO_REGULAR_400';
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
    height: 52px;
`

const InputAuthNumber = ({
    isLoading,
    onChange,
    value,
    onBlur,
    onFocus,
    error
}: Props) => {
    return (
        <Root

        >
            <IconAuthNumberMobile
                error={error}
            />
            <Input
                onBlur={onBlur}
                onFocus={onFocus}
                value={value || ''}
                focusable={true}
                onChangeText={onChange}
                error={error}
                maxLength={18}
                type={'cel-phone'}
                keyboardType='numeric'
                options={{ dddMask: '+7 (999) 999-99-99' }}
                placeholder={'Телефон'}
                selectionColor={error ? darkTheme.palette.indicator.error : darkTheme.palette.indicator.success}
                placeholderTextColor={error ? darkTheme.palette.indicator.error : darkTheme.palette.content.tertiary}

            />
            {isLoading && <LoaderAuthNumber />}
        </Root>
    )
}

export default InputAuthNumber