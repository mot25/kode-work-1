import { NavPaymentsParamsType } from '@app/app-navigate/config/types';
import { addSnack } from '@app/providers/MyAlertProvider/model/state';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CountryServives } from '@shared/model/api/requests/CountryServives';

import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { TCategory } from '../../CategoryList/config/apiTypes';
import { PaymentsMainOrganisms } from './organisms/PaymentsMainOrganisms';

type Props = {}
type NSPaymentsProps = NativeStackScreenProps<NavPaymentsParamsType, 'pm_index'>
const timeInMs = Date.now();

const PaymentsMain = ({ navigation }: NSPaymentsProps) => {
  const { isLoading, isFetching, refetch, error, data } = useQuery<TCategory[]>(
    'repoData',
    () => CountryServives.getCategory()
  );
  useEffect(() => {
    if (error) {
      addSnack({
        text: 'Что-то пошло не так',
        colorType: 'error',
        id: timeInMs,
      })
    }
  }, [error])
  const goToCategory = (id: string) => {
    navigation.navigate('pm_categoryList', { id })
  }

  return (
    <>
      <PaymentsMainOrganisms
        data={data}
        goToCategory={goToCategory}
        isFetching={isFetching}
        refetch={refetch}
      />
    </>
  )
}

export default PaymentsMain