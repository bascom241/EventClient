import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (key: any, value: any) => {
        setFormData({ ...formData, [key]: value });
    };

    const submitForm = () => {
        if (!formData.email || !formData.password) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        Alert.alert(
            'Success',
            `Hello ${formData.email}, your form is submitted!`
        );
    };

    return (
        <View className="w-full">
            {/* EMAIL */}
            <View className="mb-4">

                <View className="flex-row items-center justify-center gap-2 border border-gray-300 rounded-3xl bg-white px-4 mb-4">
                    <Ionicons
                        name="mail-outline"
                        size={20}
                        color="#73138C"
                        style={{ marginRight: 10 }}
                    />

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#9CA3AF"
                        value={formData.email}
                        onChangeText={(text) =>
                            handleChange('email', text)
                        }
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        className="flex-1 py-4 pl-3 text-gray-800 text-base"
                    />
                </View>


                {/* PASSWORD */}
                <View className="mb-4">


                    <View className="flex-row items-center border border-gray-300 rounded-3xl bg-white px-4 h-14 ">

                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color="#73138C"
                            style={{ marginRight: 10 }}
                        />

                        <TextInput
                            placeholder="Enter your password"
                            placeholderTextColor="#9CA3AF"
                            value={formData.password}
                            onChangeText={(text) =>
                                handleChange('password', text)
                            }
                            secureTextEntry={!showPassword}
                            className="flex-1 py-4 pl-3 text-gray-800 text-base"
                        />

                        <TouchableOpacity
                            onPress={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            <Ionicons
                                name={
                                    showPassword
                                        ? 'eye-outline'
                                        : 'eye-off-outline'
                                }
                                size={20}
                                color="#73138C"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


            <TouchableOpacity
                onPress={submitForm}
                className="bg-[#73138C] py-4 rounded-full items-center shadow-md mt-8"
            >
                <Text className="text-white font-bold text-lg">
                    Submit
                </Text>
            </TouchableOpacity>

             <TouchableOpacity
                onPress={() => router.push("/(auth)/Login")}
                className='flex-row gap-2 items-center justify-center font-bold'
                style={{ marginTop: 20 }}
            >
                <Text className='text-[#73138C]'>
                    Forgot Your Password?
                </Text>
            </TouchableOpacity>

            {/* DIVIDER */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 50,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: '#E5E7EB',
                    }}
                />

                <Text
                    style={{
                        marginHorizontal: 12,
                        color: '#9CA3AF',
                        fontSize: 12,
                        fontWeight: '500',
                    }}
                >
                    OR CONTINUE WITH
                </Text>

                <View

                    style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: '#E5E7EB',
                    }}
                />
            </View>

            {/* BUTTON */}
            <View className="flex-row w-full gap-4 mt-6">

                {/* Facebook */}
                <TouchableOpacity className="flex-1 border border-gray-300 rounded-xl py-4 flex-row items-center justify-center gap-2">
                    <Ionicons name="logo-facebook" size={22} color="#1877F2" />
                    <Text className="text-gray-700">Facebook</Text>
                </TouchableOpacity>

                {/* Google */}
                <TouchableOpacity className="flex-1 border border-gray-300 rounded-xl py-4 flex-row items-center justify-center gap-2">
                    <Ionicons name="logo-google" size={22} color="#DB4437" />
                    <Text className="text-gray-700">Google</Text>
                </TouchableOpacity>

                {/* GitHub */}
                <TouchableOpacity className="flex-1 border border-gray-300 rounded-xl py-4 flex-row items-center justify-center gap-2">
                    <Ionicons name="logo-github" size={22} color="#000" />
                    <Text className="text-gray-700">GitHub</Text>
                </TouchableOpacity>
            </View>


           
            <View className='flex-row gap-2 items-center justify-center  text-gray-500' style={{ marginTop: 30 }}>
                <Text>
                    Dont have an account?
                </Text>
                <TouchableOpacity
                    onPress={() => router.push("/(auth)/Login")}
                >
                    <Text className='text-[#73138C]'>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default LoginForm;