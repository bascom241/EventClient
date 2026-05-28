import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import '@/global.css'
import { useColorScheme } from 'react-native'
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{headerShown: false}}/>
      </Stack>
    </ThemeProvider>
  )
}
