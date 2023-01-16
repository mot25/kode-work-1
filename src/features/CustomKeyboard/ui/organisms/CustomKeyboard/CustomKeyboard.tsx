

import React, { ReactNode, useMemo } from 'react';
import styled from 'styled-components/native';

import { IconClearCustomKey } from '../../../../../../assets/icons/IconClearCustomKey';
import { CellKeyboardWithIcon } from '../../atom/CellKeyboardWithIcon';
import { CellKeyboardWithNum } from '../../atom/CellKeyboardWithNum';
import { CellKeyboardWithText } from '../../atom/CellKeyboardWithText';


type Props = {
    returnNumber: (num: number) => void;
    rightImg: {
        type: 'clear' | 'enter'
        fnRight: VoidFunction
    }
    leftText: {
        text: string
        fnLeft: VoidFunction
        disabled?: boolean
    }
}
const Root = styled.View`
flex-direction: row;
flex-wrap: wrap;
`
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const CustomKeyboard = ({
    leftText: {
        fnLeft,
        text,
        disabled
    },
    returnNumber,
    rightImg: {
        fnRight,
        type
    },
}: Props) => {

    const ImageRight = useMemo(() => {
        switch (type) {
            case 'clear':
                return <IconClearCustomKey />

            default:
                return <IconClearCustomKey />
        }
    }, [type])

    return (
        <Root>
            {numArr.map(item => <CellKeyboardWithNum
                number={item}
                key={item}
                fn={returnNumber}
            />)}
            <CellKeyboardWithText
                isBottom
                fn={() => {
                    if (fnLeft && !disabled) fnLeft()
                }}
                disabled={disabled}
                text={text}
            />
            <CellKeyboardWithNum
                isBottom
                number={0}
                fn={returnNumber}
            />
            <CellKeyboardWithIcon
                isBottom
                img={ImageRight}
                fn={fnRight}
            />
        </Root>
    )
}

export default CustomKeyboard