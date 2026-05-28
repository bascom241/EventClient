import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import RegisterForm from '@/features/auth/components/RegisterForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '@/features/auth/components/LoginForm';
const Login = () => {
    return (
        <SafeAreaView className='flex-1 bg-white dark:bg-[#1C1C1C] '>

            <View className='px-8 flex flex-col gap-9 mt-14'>

                <View className='flex items-center '>
                    <Image
                        source={require("../../assets/auth/Logo.png")}
                        className='w-32 h-20'
                        resizeMode='contain'
                    />

                    <Text className='text-3xl font-bold'>Login to Your Account</Text>
                </View>
                <LoginForm />
                <View>

                </View>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Login;
