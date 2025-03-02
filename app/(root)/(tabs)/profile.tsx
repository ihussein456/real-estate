import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'


interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  showArrow?: boolean;
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true}: SettingsItemProps) => (
  <TouchableOpacity>
    <View>
      <Image source={icon}/>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
)

const profile = () => {
  const handleLogout = async () => {}
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-32 px-7'
      >
        <View className='flex-row justify-between items-center mt-5'>
          <Text className='text-xl font-rubik-bold'>Profile</Text>
          <Image source={icons.bell} className='size-5'/>
        </View> 

        <View className='flex-row justify-center items-center mt-5'>
          <View className='flex flex-col items-center relative mt-5'>
          <Image source={images.avatar} className='size-44 rounded-full'/>

          <TouchableOpacity className='absolute bottom-11 right-2'>
            <Image source={icons.edit} className='size-9'/>
          </TouchableOpacity>

          <Text className='text-2xl font-rubik-bold mt-2'> Beeb</Text>
          </View>

        </View>
        <View className='flex flex-col mt-10'>
          <SettingsItem icon={icons.calendar} title="My Bookings"/>
          <SettingsItem icon={icons.wallet} title="Payments"/>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile