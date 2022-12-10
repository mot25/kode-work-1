import { arrListSkeleton } from '@entities/Skeleton/model/state';
import { SkeletonListItem } from '@entities/Skeleton/ui/atom/SkeletonListItem';
import { Seperator } from '@shared/ui/Seperator';
import React from 'react';
import { FlatList } from 'react-native';


const Skeleton = () => <FlatList
    data={arrListSkeleton}
    keyExtractor={(item) => item.toString()}
    renderItem={() => <SkeletonListItem />}
    contentContainerStyle={{ paddingHorizontal: 16 }}
    showsVerticalScrollIndicator={false}
    ItemSeparatorComponent={() => <Seperator />}
/>



export default Skeleton