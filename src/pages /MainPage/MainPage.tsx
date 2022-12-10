import { NavMainTabsParamsType } from '@app/app-navigate/config/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StubName } from '@shared/ui/StubName';


type NSPaymentsProps = NativeStackScreenProps<NavMainTabsParamsType, 'MainPage'>

const MainPage = ({ }: NSPaymentsProps) =>  <StubName>MainPage</StubName>


export default MainPage