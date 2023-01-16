import { deleteALert, TColorType } from '@app/providers/MyAlertProvider/model/state';
import { Typography } from '@shared/ui/core/Typography';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import styled from 'styled-components/native';

import { IconCancelAlert } from '../../../../../../assets/icons/IconCancelAlert';

const { width } = Dimensions.get('window')


type Props = {
    id: number
    text: string
    colorType: TColorType
}

const Wrapper = styled(Animated.View) <{ colorType: TColorType }>`
    width: ${width - 16}px;
    /* height: 62px; */
    margin-top: 10px;
    background-color: ${({ colorType, theme }) => colorType === 'success' ? theme.palette.indicator.success : theme.palette.indicator.error};
    z-index: 999;
    padding: 16px 20px 16px 16px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 13px;
    align-items: center;

`
const Body = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.primary};
    flex: 1;
`

const Cancel = styled.View`
   width:16px;
   height:16px;
`
const ItemAlert = ({ id, text, colorType }: Props) => {

    const offsetY = useSharedValue(30)
    const offsetX = useSharedValue(-30)
    const scaleVal = useSharedValue(360)
    const customSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(offsetX.value),
                },
                {
                    translateY: withSpring(offsetY.value),
                },
                // {
                //     scaleX: withSpring(scaleVal.value),
                // },
            ],
        };
    });
    useEffect(() => {
        offsetY.value = withSpring(0)
        offsetX.value = withSpring(0)
        scaleVal.value = withSpring(1)
    }, [])

    return (
        <Wrapper
            colorType={colorType}
            style={customSpringStyles}
        >
            <Body
                variant='body15Regular'
            >
                {text}
            </Body>

            <Cancel onTouchStart={() => deleteALert(id)}>
                <IconCancelAlert />
            </Cancel>
        </Wrapper>
    )
}

export default ItemAlert

