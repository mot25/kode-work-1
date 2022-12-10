import LeftListCategoryWithImage from '@entities/CategoryItem/ui/atom/LeftListCategoryWithImage';
import { Typography } from '@shared/ui/core/Typography';
import { TCategory } from 'pages /CategoryList/config/apiTypes';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';

type Props = {
    data: TCategory
    index: number
    onPress: (id: string) => void
}
const TouchableOpacity = styled(Animated.View)`
    flex-direction: row;
    align-items: center;
`
const CategoryItemMolecul = ({ data, index, onPress }: Props) => {
    const offsetX = useSharedValue(-150)
    const cStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(offsetX.value, {
                        duration: (1000 + (index * 400))
                    })
                }
            ]
        }
    })
    useEffect(() => {
        offsetX.value = 0
    }, [])
    return (
        <TouchableOpacity
            style={cStyle}
            onTouchStart={() => onPress(data.category_id)}
        >
            <LeftListCategoryWithImage source={data.category_icon} />
            <View>
                <Typography
                    variant='body15Regular'
                >
                    {data.category_name}
                </Typography>
            </View>
        </TouchableOpacity>)
}

export default CategoryItemMolecul