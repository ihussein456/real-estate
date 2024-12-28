import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Index () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className='font-bold text-3xl my-10 font-rubik'>Welcome to ReState</Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  )
}

