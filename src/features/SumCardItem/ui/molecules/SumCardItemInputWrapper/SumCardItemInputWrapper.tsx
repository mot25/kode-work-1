import { darkTheme } from '@shared/ui/theme';
import React from 'react';
import { useRef, useState } from 'react';
import { Button, GestureResponderEvent, StyleSheet, Text, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

type Props = {
    onChange: (str: string) => void
    value: string
}


const Wrapper = styled.View`
flex-direction: row;
justify-content: flex-start;
align-items: center;
`

const Ruble = styled.Text`
font-family: 'SF_PRO_MEDIUM_500';
font-size: 28px;
letter-spacing: 0.33px;
color: ${({ theme }) => theme.palette.text.primary};
    
`

const Input = styled(TextInputMask)`
font-family: 'SF_PRO_MEDIUM_500';
font-size: 28px;
letter-spacing: 0.33px;
color: ${({ theme }) => theme.palette.text.primary};
    
`
class SumCardItemInputWrapper extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }
    zeroValue = () => !this.props.value && this.props.onChange('0')

    openKeyboard = (e: GestureResponderEvent) => {
        e.stopPropagation()
        this.refs['myText']?.getElement().focus();
    }

    render() {
        return (
            <Wrapper
                onTouchStart={this.openKeyboard.bind(this)}
            >
                <Input
                    ref='myText'
                    type="money"
                    options={{
                        unit: '',
                        delimiter: ' ',
                        separator: ' ',
                        precision: 0,
                        zeroCents: true
                    }}
                    onBlur={this.zeroValue}
                    value={this.props.value}
                    onChangeText={this.props.onChange}
                    maxLength={14}
                    keyboardType="numeric"
                />
                <Ruble
                >
                    {' '}₽
                </Ruble>

            </Wrapper>
        )
    }
}

export default SumCardItemInputWrapper


