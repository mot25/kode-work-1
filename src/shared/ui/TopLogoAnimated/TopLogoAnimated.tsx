import React, { useEffect } from 'react';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';

import { IconAuthNumberLogo } from '../../../../assets/icons/IconAuthNumberLogo';

type Props = {
    isActive: boolean;
}
const LogoWrapper = styled(Animated.View)`
    flex-direction:row; 
    justify-content: center;
`

const Logo = styled(Animated.View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TopLogoAnimated = ({
    isActive
}: Props) => {
    const scale = useSharedValue(1)
    const mbAnimValue = useSharedValue(86)
    const CStylesScale = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: withTiming(scale.value, {
                        duration: 500,
                        easing: Easing.linear,
                    })
                }
            ]
        };
    });
    const CStylesMB = useAnimatedStyle(() => {
        return {
            marginBottom: withTiming(mbAnimValue.value, {
                duration: 500,
                easing: Easing.linear,
            })
        }
    });
    useEffect(() => {
        if (isActive) {
            scale.value = 0.8
            mbAnimValue.value = 40
        } else {
            scale.value = 1
            mbAnimValue.value = 86
        }
    }, [isActive])
    return (
        <LogoWrapper
            style={CStylesMB}
        >
            <Logo
                style={CStylesScale}
            >
                <IconAuthNumberLogo />
            </Logo>
        </LogoWrapper>
    )
}

export default TopLogoAnimated