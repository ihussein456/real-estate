import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Property = () => {
    const { id } = useLocalSearchParams();
  return (
    <View
    style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Property {id}</Text>
    </View>
  )
}

export default Property