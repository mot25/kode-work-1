import { CategoryItem } from '@entities/CategoryItem';
import { Skeleton } from '@entities/Skeleton';
import { EmpetyList } from '@shared/ui/EmpetyList';
import { Seperator } from '@shared/ui/Seperator';

import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import { TCategory } from '../../../../CategoryList/config/apiTypes';
import { PaymentsMainHeader } from '../../atom/PaymentsMainHeader';





const Root = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.palette.background.secondary};
`
const Body = styled.View`
padding: 0 16px;
`

type Props = {
    isFetching: boolean
    refetch: () => void
    data: TCategory[] | undefined
    goToCategory: (id: string) => void
}


const PaymentsMainOrganisms = ({
    data,
    goToCategory,
    isFetching,
    refetch
}: Props) => {


    return (
        <Root
        >
            <PaymentsMainHeader />
            <Body
            >
                <View
                >
                    {isFetching ?
                        <Skeleton />
                        :
                        <FlatList
                            onRefresh={refetch}
                            refreshing={isFetching}
                            ListEmptyComponent={<EmpetyList />}
                            data={data}
                            keyboardShouldPersistTaps='handled'
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => (item.category_id || '').toString()}
                            renderItem={({ item, index }) => <CategoryItem index={index} onPress={goToCategory} data={item} />}
                            ItemSeparatorComponent={() => <Seperator />}
                        />
                    }

                </View>
            </Body>
        </Root>)
}

export default PaymentsMainOrganisms