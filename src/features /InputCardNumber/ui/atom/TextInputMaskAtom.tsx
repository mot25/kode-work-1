import { darkTheme } from '@shared/ui/theme';
import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

type Props = {
    error: boolean | undefined
    onChange: (str: string) => void
    value: string
}


const Input = styled(TextInputMask) <{ error: boolean | undefined }>`
    flex: 1;
    height: 100%;
    font-family: 'SF_PRO_REGULAR_400';
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: ${({ error, theme }) => error ? theme.palette.indicator.error : theme.palette.text.primary};
`

const TextInputMaskAtom = ({
    error,
    onChange,
    value
}: Props) => {
    return (
        <Input
            error={error}
            onChangeText={onChange}
            value={value}
            maxLength={18}
            type={'cel-phone'}
            keyboardType='numeric'
            options={{ dddMask: '+7 (999) 999-99-99' }}
            placeholder={'Номер телефона'}
            selectionColor={error ? darkTheme.palette.indicator.error : darkTheme.palette.indicator.success}
            placeholderTextColor={error ? darkTheme.palette.indicator.error : darkTheme.palette.content.tertiary}


        />
    )
}

export default TextInputMaskAtom