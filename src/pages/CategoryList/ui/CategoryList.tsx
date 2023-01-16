import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AStorage } from '@shared/lib/AStorage';
import { convertMsToHM } from '@shared/lib/helpers';
import { CountryServives } from '@shared/model/api/requests/CountryServives';
import { useStore } from 'effector-react';

import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { NavPaymentsParamsType } from '../../../app/app-navigate/config/types';
import { TCategory } from '../config/apiTypes';
import { $categoryeName, $input, $selectServicesById, $servicesBySearch, clearAllCategory, setCategoryes, setIdCategory, setSelectServicesById } from '../model/state/modelCategory';
import { CategoryListOrganisms } from './organisms/CategoryListOrganisms';




type Props = {}
type NSPaymentsProps = NativeStackScreenProps<NavPaymentsParamsType, 'pm_categoryList'>

const CategoryList = ({ navigation, route }: NSPaymentsProps) => {
  const { id } = route.params

  const input = useStore($input)
  const services = useStore($servicesBySearch)
  const categoryeName = useStore($categoryeName)
  const selectServicesById = useStore($selectServicesById)


  const { isFetching, error, data, refetch } = useQuery<TCategory[], Error>(
    'repoData',
    () => CountryServives.getCategory()
  );

  const goToCategoryItem = async (id: string) => {
    await setSelectServicesById(id)
    if (selectServicesById)
      navigation.navigate('pn_itemCategory')
  }
  const showHeader = () => {
    navigation.setOptions({
      headerShown: true
    })
  }
  const hiddenHeader = () => {
    navigation.setOptions({
      headerShown: false
    })
  }
  useEffect(() => {
    setIdCategory(id)
  }, [id])
  useEffect(() => {
    navigation.setOptions({
      headerTitle: categoryeName
    })
  }, [categoryeName])
  useEffect(() => {
    setCategoryes(data || [])
  }, [data])

  useEffect(() => {

    return () => {
      clearAllCategory()
    }
  }, [])
  return <CategoryListOrganisms
    goToCategoryItem={goToCategoryItem}
    hiddenHeader={hiddenHeader}
    input={input}
    isFetching={isFetching}
    refetch={refetch}
    services={services}
    showHeader={showHeader}

  />
}

export default CategoryList