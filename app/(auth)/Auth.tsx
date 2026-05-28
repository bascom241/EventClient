import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import JoinModal from '@/features/auth/components/JoinModal';

const Auth = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false); // Track modal visibility

  return (
    <SafeAreaView className="flex-1 gap-2 items-center bg-white">
      {/* Image & Heading */}
      <View className="w-full flex-col items-center mt-14">
        <Image
          source={require("../../assets/auth/auth1.png")}
          className="w-60 h-48"
          resizeMode="contain"
        />
      </View>
      <View className="w-full items-center mt-4">
        <Text className="text-4xl font-bold tracking-widest">Let’s Get you in</Text>
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity className="border rounded-xl mt-12 border-gray-300 w-[90%] py-5 flex flex-row items-center gap-4 justify-center px-4">
        <Ionicons name="logo-facebook" size={24} color="#1877F2" />
        <Text>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity className="border rounded-xl mt-2 border-gray-300 w-[90%] py-5 flex flex-row items-center gap-4 justify-center px-4">
        <Ionicons name="logo-google" size={24} color="#DB4437" />
        <Text>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity className="border rounded-xl mt-2 border-gray-300 w-[90%] py-5 flex flex-row items-center gap-4 justify-center px-4">
        <Ionicons name="logo-github" size={24} color="black" />
        <Text>Login with Github</Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <View className="flex-row items-center w-[90%] my-8">
        <View className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-600" />
        <Text className="px-3 text-gray-400">or</Text>
        <View className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-600" />
      </View>

      {/* Sign in with password */}
      <View className="w-full px-6 pb-6 mt-4">
        <TouchableOpacity
          className="bg-[#73138C] dark:bg-[#BB86FC] w-full py-4 rounded-full items-center justify-center active:opacity-80 shadow-md"
          onPress={() => setModalVisible(true)} // Open modal
        >
          <Text className="text-white dark:text-black text-lg font-inter-semibold tracking-wide">
            sign in with password
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign up */}
      <View className="flex flex-row items-center">
        <Text className="text-gray-400">Don't have an account? </Text>
        <Text className="text-[#73138C] font-bold">sign up</Text>
      </View>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Dark overlay */}
        <Pressable
          className="flex-1 bg-black/50 justify-center items-center"
          onPress={() => setModalVisible(false)} // Close modal if you click outside
        >
          {/* Centered JoinModal */}
          <View className="bg-white rounded-3xl p-6 w-[80%] " style={{ elevation: 5 }}>
            <JoinModal router = {router}/>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default Auth;
