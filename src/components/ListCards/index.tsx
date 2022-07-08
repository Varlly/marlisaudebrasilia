import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import { abs } from 'react-native-reanimated';

interface ListProps {
    data: string[],
    item?: Object
}

const { width } = Dimensions.get('window');

export const ListCards = ({ data }: ListProps) => {
    const renderItem = ({ item }: ListProps) => (
        <View
            style={{
                backgroundColor: item,
                height: width / 2.6,
                width: ((width * 0.8)),
                marginHorizontal: 10,
                borderRadius: 12,
                marginTop: 24
            }}
        />
    )
    
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'start'}
            snapToOffsets={[...Array(data.length)].map(
                (e, i) => i * (width * 0.8 - 23) + (i - 1) * 48,
            )}
            scrollEventThrottle={12}
            decelerationRate='fast'
            renderItem={renderItem}
        />
    );
}