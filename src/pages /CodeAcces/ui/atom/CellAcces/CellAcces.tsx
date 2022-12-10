import { Typography } from '@shared/ui/core/Typography';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';

type Props = {
  num?: string
  error: boolean
  isActive?: boolean
}
const Root = styled.View`
    width: 40px;
    height: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.palette.content.secondary};
    padding: 8px;
`
const BottomLine = styled(Animated.View)`
  background-color: ${({ theme }) => theme.palette.indicator.success};
  width: 100%;
  height: 1px;
  margin-top: 100%;
`
const Number = styled(Typography) <{ error: boolean }>`
color: ${({ theme, error }) => error ? theme.palette.indicator.error : theme.palette.text.primary};
`

const CellAcces = ({
  num,
  isActive,
  error
}: Props) => {
  const opacity = useSharedValue(1)
  const cStyle = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(withTiming(opacity.value, {
        duration: 1000
      }), 1500, true)
    }
  })
  useEffect(() => {
    if (isActive) {
      opacity.value = withSpring(0)
    } else {
      opacity.value = withSpring(1)
    }
  }, [isActive])
  return (
    <Root>
      {isActive ?
        <BottomLine
          style={cStyle}
        />
        :
        <Number
          error={error}
          variant='subtitle1'
        >
          {num || ''}
        </Number>
      }
    </Root>
  )
}

export default CellAcces