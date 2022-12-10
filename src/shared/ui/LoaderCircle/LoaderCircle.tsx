import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';

import { IconAuthNumberLoad } from '../../../../assets/icons/IconAuthNumberLoad';

type Props = {
    color?: string;
}

const Wrapper = styled.View`
    width: 22px;
    height: 22px;
`

const LoaderCircle = ({ color }: Props) => {
    const rotate = useSharedValue(120000)
    const customSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: withTiming(`${rotate.value}deg`, {
                        duration: 250000,
                        easing: Easing.linear,
                    }),
                }
            ],
        };
    });
    useEffect(() => {
        rotate.value = withSpring(0)
    }, [])
    return (
        <Wrapper
        >
            <Animated.View
                style={customSpringStyles}
            >
                <IconAuthNumberLoad color={color} />
            </Animated.View>
        </Wrapper>
    )
}

export default LoaderCircle