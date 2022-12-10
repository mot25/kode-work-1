import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import { darkTheme } from '@shared/ui/theme';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';

import { IconGlassLock } from '../../../../../assets/icons/IconGlassLock';
import { IconGlassLockLine } from '../../../../../assets/icons/IconGlassLockLine';
import { IconLock } from '../../../../../assets/icons/IconLock';

type Props = {
    onChange: (val: string) => void
    value: string
    onBlur: VoidFunction
    onFocus: VoidFunction
}
const Root = styled.View`
    flex-direction: row;
    background-color: ${({ theme }) => theme.palette.content.primary};
    border-radius: 26px;
    align-items: center;
`
const WrapperInput = styled.View`
    flex: 1;
`
const Lock = styled.View`
    margin-left: 30px;
  
`
const WrapperLock = styled(CTouchableOpacity)`
    position: relative;
    width: 24px;
    height: 24px;
    margin-right: 16px;
    justify-content: center;
    align-items: center;
`
const Line = styled(Animated.View)`
    position: absolute;
    z-index: 9;
   top: 1px;
   left: 2px;
   overflow: hidden;
`
const Circle = styled(Animated.View)`
    z-index: 1;
   overflow: hidden;
`
const Input = styled.TextInput`
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 15px;
    height: 52px;
    letter-spacing: -0.24px;
    line-height: 20px;
    padding-left: 20px;
    font-family: 'SF_PRO_REGULAR_400';
`
const InputWithPassword = ({
    value,
    onChange,
    onBlur,
    onFocus
}: Props) => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const widthLine = useSharedValue(24)
    const opacityCircle = useSharedValue(0.3)
    const cStyleLine = useAnimatedStyle(() => {
        return {
            width: withTiming(widthLine.value, {
                duration: 500,
            })
        }
    })
    const cStyleCircle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacityCircle.value, {
                duration: 500,
            })
        }
    })
    useEffect(() => {
        if (isHidden) {
            widthLine.value = 24
            opacityCircle.value = 0.3
        } else {
            widthLine.value = 0
            opacityCircle.value = 1
        }
    }, [isHidden])
    return (
        <Root
        >
            <Lock>
                <IconLock />
            </Lock>
            <WrapperInput>
                <Input
                    secureTextEntry={isHidden}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    selectionColor={darkTheme.palette.accent.primary}
                />
            </WrapperInput>
            <WrapperLock

                onPress={(e) => {
                    e.stopPropagation()
                    setIsHidden(prev => !prev)
                }}
            >
                <Line
                    style={cStyleLine}
                >
                    <IconGlassLockLine />
                </Line>
                <Circle
                    style={cStyleCircle}
                >
                    <IconGlassLock
                        color={'#fff'}
                    />
                </Circle>
            </WrapperLock>
        </Root>
    )
}

export default InputWithPassword