import { useIsFocused } from '@react-navigation/native';
import React, { memo, useEffect } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';


type Props = {}
const SkeletonListItem = (props: Props) => {
  const isFocus = useIsFocused()
  const AnimetedValueC = new Animated.Value(0)
  const AnimetedValueT = new Animated.Value(0)

  const translateXC = AnimetedValueC.interpolate({
    inputRange: [0, 1],
    outputRange: [-4, 40]
  })
  const translateXT = AnimetedValueT.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 100]
  })

  const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
  `





  const CircleWrapper = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.helpers.skeleton_color};
  border-radius: 20px;
  margin-right: 16px;
  overflow: hidden;
  `
  const Circle = styled(Animated.View)`
    width: 20%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.helpers.line_skeleton};
    opacity: 0.2;
  `


  const TextWrapper = styled.View`
    width: 100px;
    height: 17px;
    background-color: ${({ theme }) => theme.palette.helpers.skeleton_color};
    border-radius: 10px;
    overflow: hidden;
  `
  const Text = styled(Animated.View)`
    width: 20%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.helpers.line_skeleton};
    opacity: 0.2;

  `

  const animated = () => {
    AnimetedValueC.setValue(0)
    AnimetedValueT.setValue(0)
    Animated.timing(
      AnimetedValueC,
      {
        toValue: 1,
        duration: 900,
        useNativeDriver: false
      }
    ).start(() => {
      setTimeout(() => {
        animated()
      }, 1000)
    })
    Animated.timing(
      AnimetedValueT,
      {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false
      }
    ).start()
  }
  useEffect(() => {
    animated()
  }, [isFocus])
  return (
    <Wrapper
    >
      <CircleWrapper  >
        <Circle
          style={{
            transform: [{
              translateX: translateXC
            }]
          }}
        />
      </CircleWrapper>
      <TextWrapper>
        <Text
          style={{
            transform: [{
              translateX: translateXT
            }]
          }}
        />
      </TextWrapper>
    </Wrapper>

  )
}

export default memo(SkeletonListItem)


