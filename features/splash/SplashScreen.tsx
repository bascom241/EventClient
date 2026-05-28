import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useRouter } from 'expo-router';


const SplashScreen = () => {

    const colorScheme = useColorScheme();
    const onScreenLoader = colorScheme === "dark" ? `#FF8C00` : `#6A0DAD`

    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const hasOpened = await AsyncStorage.getItem("hasOpened");

            setTimeout(async ()=> {
                if(hasOpened){
                    router.replace("/(onboarding)/Step1")
                }else {
                    await AsyncStorage.setItem("hasOpened", "true");
                    router.replace("/(onboarding)/Step1")
                }
            },2000)
        }

        checkUser()
    }, [])


    return (
        <SafeAreaView className='flex-1 justify-between items-center py-10 dark:bg-[#1C1C1C]'>

            <View className='flex-1 justify-center items-center'>
                <Image source={require("../../assets/Logo.png")}
                    className='w-[200px] h-[60px]'
                    resizeMode='contain'
                />


            </View>


            <View className='mb-6'>
                <ActivityIndicator size="large" color={onScreenLoader}/>
            </View>
        </SafeAreaView>
    );
}


export default SplashScreen;
