import React from 'react'
import { Text, FlatList, View, StatusBar } from 'react-native'

import currenices from '../Data/currencies'

const CurrencyList = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="default" translucent={false} />
    <FlatList
      data={currenices}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  </View>
)

export default CurrencyList
