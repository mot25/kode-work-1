import { Typography } from '@shared/ui/core/Typography';
import { TextStyle, View } from 'react-native';
import styled from 'styled-components/native';

import { CTouchableOpacity } from '../../../CTouchableOpacity';


const TouchableOpacity = styled(CTouchableOpacity) <{ disabled: boolean | undefined }>`
    width: 100%;
    height: 52px;
    border-radius: 26px;
    justify-content: center;
    align-items: center;
    background-color: ${({ disabled, theme }) => disabled ? theme.palette.helpers.disabledButton : theme.palette.button.primary};
`

const Text = styled(Typography)`
color: ${({ theme }) => theme.palette.text.primary};
`


type Props = {
    onPress?: () => void
    text: string
    isDisabled?: boolean
}

const SimpleButton = ({
    onPress,
    text = '',
    isDisabled
}: Props) => {
    return (
        <View
        >
            <TouchableOpacity
                disabled={isDisabled}
                onPress={onPress && onPress}
            >
                <Text
                    variant='button'
                >{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SimpleButton