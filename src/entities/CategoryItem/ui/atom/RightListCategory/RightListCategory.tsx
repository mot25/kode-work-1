import { Typography } from '@shared/ui/core/Typography';
import { View } from 'react-native';

type Props = {
    text: string
}



const RightListCategory = ({ text }: Props) => {
    return (
        <View>
            <Typography
                variant='body15Regular' 
            >
                {text}
            </Typography>
        </View>
    )
}

export default RightListCategory