import React from 'react';
import styled from 'styled-components/native';


const Root = styled.View`
flex-direction: row;
justify-content: center;
`

const Wrapper = styled.View`
flex: 1;
flex-direction: row;
justify-content: center;
`
const Text = styled.Text`
color: ${({ theme }) => theme.palette.text.primary};
`
const EmpetyList = () => {
    return (
        <Root>
            <Wrapper >
                <Text >
                    Список пуст
                </Text>
            </Wrapper>
        </Root>
    )
}

export default EmpetyList

