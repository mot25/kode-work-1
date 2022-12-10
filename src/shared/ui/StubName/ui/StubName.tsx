import { PropsWithChildren } from 'react';

import { styled } from '../../theme';

const Wrapper = styled.View`
      align-items: center;
      justify-content: center;
      flex: 1;
      `
const Image = styled.Image`
       width: 350px;
        height: 300px;
`

const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
`
const StubName = ({ children }: PropsWithChildren) => {
    return (
        <Wrapper
        >
            <Image
                source={require('../../../../../assets/imgs/inDevelopment.png')} />
            <Text>{children}</Text>
        </Wrapper>
    )
}

export default StubName