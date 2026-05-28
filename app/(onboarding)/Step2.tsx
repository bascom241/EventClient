import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useOnboarding } from '@/store/useOnboardingStore'
import PaginationDots from '@/components/PaginationDots'
import { useRouter } from 'expo-router'

const Step2 = () => {
  const { setActiveScreen } = useOnboarding()
  const router = useRouter()

  // Set this step as active in Zustand
  useEffect(() => {
    setActiveScreen(0) // Step2 index
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-[#1C1C1C] justify-between items-center relative">
      
      {/* Hero Images */}
      <View className="relative w-[400px] h-[400px] mt-4">
        <Image
          source={require("../../assets/onboarding/bg.png")}
          className="w-full h-[400px]"
          resizeMode="cover"
        />
        <Image
          source={require("../../assets/onboarding/v1r.png")}
          className="absolute -top-14 -left-32 w-[600px] h-[500px]"
          resizeMode="contain"
        />
      </View>

      {/* Heading & Description */}
      <View className="flex-1 mt-4 gap-7 px-6 items-center">
        <View className="items-center justify-center">
          <Text className="text-[#73138C] dark:text-[#BB86FC] text-2xl font-inter-bold text-center">
            Discover Events Around You
          </Text>
          <Text className="text-[#73138C] dark:text-[#BB86FC] font-inter text-2xl text-center">
            All in one place
          </Text>
        </View>

        <View className="items-center justify-center px-4">
          <Text className="text-gray-700 dark:text-gray-300 text-base text-center">
            Find concerts, meetups, and experiences happening
          </Text>
          <Text className="text-gray-700 dark:text-gray-300 text-base text-center">
            near you and book your spot in seconds.
          </Text>
        </View>
      </View>

      {/* Pagination Dots */}
      <PaginationDots total={3} />

      {/* Next Button */}
      <View className="w-full px-6 pb-6 mt-4">
        <TouchableOpacity
          className="bg-[#73138C] dark:bg-[#BB86FC] w-full py-4 rounded-3xl items-center justify-center active:opacity-80 shadow-md"
          onPress={() => router.push('/(onboarding)/Step3')}
        >
          <Text className="text-white dark:text-black text-lg font-inter-semibold tracking-wide">
            Next
          </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default Step2
