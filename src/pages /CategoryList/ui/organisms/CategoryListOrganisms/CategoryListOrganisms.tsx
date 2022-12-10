import { ServicesItem } from '@entities/ServicesItem';
import { Skeleton } from '@entities/Skeleton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EmpetyList } from '@shared/ui/EmpetyList';
import { Input } from '@shared/ui/Input';
import { Seperator } from '@shared/ui/Seperator';
import { useStore } from 'effector-react';
import { SearchAtomCategoryList } from 'pages /CategoryList/ui/atom/SearchAtomCategoryList';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';

import { IconSearch } from '../../../../../../assets/icons/IconSearch';
import { TCategory, TService } from '../../../config/apiTypes';
import {
  $categoryeName,
  $input,
  $selectServicesById,
  $services,
  $servicesBySearch,
  clearAllCategory as clearAll,
  setCategoryes,
  setIdCategory,
  setInputChange,
  setSelectServicesById,
} from '../../../model/state/modelCategory';




type Props = {
  refetch: () => void
  isFetching: boolean
  hiddenHeader: () => void
  showHeader: () => void
  input: string
  services: TService[]
  goToCategoryItem: (id: string) => void
}

const Root = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.palette.background.primary};
`

const CategoryListOrganisms = ({
  hiddenHeader,
  isFetching,
  refetch,
  showHeader,
  goToCategoryItem,
  input,
  services
}: Props) => {






  return (
    <Root
    >
      <View
      >
        <SearchAtomCategoryList
          hiddenHeader={hiddenHeader}
          input={input}
          setInputChange={setInputChange}
          showHeader={showHeader}
        />
      </View>
      <View
      >
        {isFetching ?
          <Skeleton />
          :
          <FlatList
            data={services}
            onRefresh={refetch}
            refreshing={isFetching}
            ListEmptyComponent={<EmpetyList />}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
            keyExtractor={item => (item.service_id).toString()}
            renderItem={({ item, index }) => <ServicesItem index={index} onPress={goToCategoryItem} data={item} />}
            ItemSeparatorComponent={() => <Seperator />}
          />
        }

      </View>


    </Root>
  )
}

export default CategoryListOrganisms