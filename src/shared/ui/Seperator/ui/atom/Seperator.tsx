import React from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';



const { width } = Dimensions.get('window')
/**
 *     seperatorWrapper: {
        alignItems: 'flex-end'
    },
    seperator: {
        
        height: 1,
        marginVertical: 14,

    },
 */
type Props = {
    paddHorizWindow?: number
    widthImage?: number
    gap?: number
}
const Root = styled.View`
    align-items: flex-end;
`
const Line = styled.View`
    height: 1px;
    margin: 14px 0;
    background-color: ${({ theme }) => theme.palette.helpers.bgSeperator};
`
const Seperator = ({
    paddHorizWindow = 16,
    widthImage = 40,
    gap = 16,
}: Props) => {
    return (
        <Root >
            <Line style={{
                width: (width - (paddHorizWindow * 2) - gap - widthImage),
            }} />
        </Root>
    )
}

export default Seperator