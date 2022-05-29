import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item3',
  }, {
    id: '58694a0f-3da12-471f-bd96-145571e29d72',
    title: 'Third Item4',
  }, {
    id: '58694a0f-3da13-471f-bd96-145571e29d72',
    title: 'Third Item5',
  }, {
    id: '58694a0f-3da14-471f-bd96-145571e29d72',
    title: 'Third Item6',
  }, {
    id: '58694a0f-3da15-471f-bd96-145571e29d72',
    title: 'Third Item7',
  }, {
    id: '58694a0f-3da16-471f-bd96-145571e29d72',
    title: 'Third Item8',
  }, {
    id: '58694a0f-3da17-471f-bd96-145571e29d72',
    title: 'Third Item9',
  }, {
    id: '58694a0f-3da18-471f-bd96-145571e29d72',
    title: 'Third Item10',
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const ShopScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  );
}

export default ShopScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});