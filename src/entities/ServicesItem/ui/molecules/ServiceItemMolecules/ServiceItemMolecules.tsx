import { LeftListServicesWithImage } from '@entities/ServicesItem/ui/atom/LeftListServicesWithImage';
import { Typography } from '@shared/ui/core/Typography';
import { TService } from 'pages /CategoryList/config/apiTypes';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';


type Props = {
    data: TService
    index: number
    onPress: (id: string) => void
}
const TouchableOpacity = styled(Animated.View)`
    flex-direction: row;
    align-items: center;
`
const ServiceItemMolecules = ({ data, index, onPress }: Props) => {
    const offsetX = useSharedValue(-150)
    const cStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(offsetX.value, {
                        duration: (500 + (index * 400))
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
            onTouchStart={() => onPress(data.service_id)}
        >
            <LeftListServicesWithImage source={data.service_icon} />
            <View>
                <Typography
                    variant='body15Regular'
                >
                    {data.service_name}
                </Typography>
            </View>
        </TouchableOpacity>)
}

export default ServiceItemMolecules