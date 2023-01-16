import { CTouchableOpacity } from '@shared/ui/CTouchableOpacity';
import { SimpleButton } from '@shared/ui/SimpleButton';

import { ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { IconCloseErrorPage } from '../../../../assets/icons/IconCloseErrorPage';
import { MediumTechnicalPage } from './molecules/MediumTechnicalPage';


type Props = {
    title: string
    subString: string
    img: ReactNode
    onPress?: VoidFunction
    textButton?: string
    onClose?: VoidFunction
}
const Root = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    padding: 24px 16px;
    padding-top: 13px;
`
const CancelWrapper = styled(CTouchableOpacity)`
    padding: 7px;
`


const ErrorPage = ({
    img,
    subString,
    title,
    onPress,
    onClose,
    textButton = 'Повторить'
}: Props) => {


    return (
        <Root>
            {onClose && <View>
                <CancelWrapper
                    onPress={onClose}
                >
                    <IconCloseErrorPage />
                </CancelWrapper>
            </View>}
            <MediumTechnicalPage
                title={title}
                subString={subString}
                img={img}
            />
            <View>
                <SimpleButton
                    onPress={onPress}
                    text={textButton}
                />
            </View>
        </Root>
    )
}

export default ErrorPage