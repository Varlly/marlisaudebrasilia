import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';

import { styles } from './styles';
import { Supporter } from '../Supporter';
import { itemSupporterData } from '../../utils/item.supporter.data';

const _data = [
    { id: '1', title: 'Teste 1' },
    { id: '2', title: 'Teste 2' },
    { id: '3', title: 'Teste 3' },
    { id: '4', title: 'Teste 4' },
    { id: '5', title: 'Teste 5' },
    { id: '6', title: 'Teste 6' },
    { id: '7', title: 'Teste 7' },
    { id: '8', title: 'Teste 8' },
    { id: '9', title: 'Teste 9' },
    { id: '10', title: 'Teste 10' },
    { id: '11', title: 'Teste 11' },
    { id: '12', title: 'Teste 12' },
    { id: '13', title: 'Teste 13' },
    { id: '14', title: 'Teste 11' },
    { id: '15', title: 'Teste 12' },
    { id: '16', title: 'Teste 13' },
    { id: '17', title: 'Teste 11' },
    { id: '18', title: 'Teste 12' },
    { id: '19', title: 'Teste 13' },
  ];
  
  const data = [
    '#7A183E',
    '#8257e5',
    '#D93B65',
    '#0992B5',
    '#04d361',
    '#909090'
  ];
  
  
  const Item = ({ item }) => (
    <View style={{ backgroundColor: '#ddd' }}>
      <Text style={{ color: '#000' }}>{item.title}</Text>
      <Text style={{ color: '#000' }}> {item.id}</Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item item={item} />
  );


export function TopSupporterList() {
    const [supporters, setSupporters] = useState(itemSupporterData);

    return (
            <FlatList
                data={supporters}
                horizontal={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Supporter data={item} />}
                showsVerticalScrollIndicator={false}
                
            />
    );
}