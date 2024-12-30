import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'

const SignIn = () => {

  const handleLogin = async () => {
    try {
        const result = await login()
        if(result){
            console.log('Login success')
        } else {
            throw new Error('Login failed')
        }
    } catch (error) {
        console.error('Sign in error:', error);
        Alert.alert(
            'Login Failed',
            error instanceof Error ? error.message : 'An unknown error occurred'
        );
    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className='w-full h-4/6'></Image>

        <View className='flex-1 px-10'>
          <Text className='text-base text-center font-rubik uppercase text-black-200'>
            Welcome to restate
          </Text>
          <Text className='text-3xl font-rubik-bold text-center mt-2 text-black-300'>
            Lets Get You Closer to  {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>

          <Text className='text-lg mt-12 text-center font-rubik text-black-200 '>
            Login to Restate with Google
          </Text>

          <TouchableOpacity onPress={handleLogin}
          className='bg-white shadow-md rounded-full w-full shadow-zinc-300 py-4 mt-5'>

            <View className='flex flex-row items-center justify-center'>
              <Image
                source={icons.google}
                className='w-5 h-5'
                resizeMode='contain'
                >
              </Image>
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
                Continue with Google
              </Text>
            </View>

          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn