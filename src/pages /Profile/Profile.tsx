import { useAuth } from '@shared/lib/hook/useAuth';
import { SimpleButton } from '@shared/ui/SimpleButton';
import { StubName } from '@shared/ui/StubName';
import styled from 'styled-components/native';

type Props = {}
const Root = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
`
const Profile = (props: Props) => {
    const auth = useAuth()
    const logOut = () => {
        auth.signout()
    }
    return (
        <Root>
            <SimpleButton
                text='LogOut'
                onPress={logOut}
            />
        </Root>
    )
}

export default Profile