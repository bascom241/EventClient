import React from 'react'
import { View } from 'react-native'
import { useOnboarding } from '@/store/useOnboardingStore'

const PaginationDots = ({ total }: any) => {
  const { activeScreen } = useOnboarding()

  return (
    <View className="flex-row justify-center items-center gap-2 mb-4 w-full">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeScreen
        return (
          <View
            key={index}
            className={`rounded-full ${
              isActive ? 'bg-[#73138C] w-8 h-2' : 'bg-gray-300 dark:bg-gray-600 w-2 h-2'
            }`}
          />
        )
      })}
    </View>
  )
}

export default PaginationDots
