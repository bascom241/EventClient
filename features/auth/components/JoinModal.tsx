import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const JoinModal = ({router}: any) => {

  
    const [selected, setSelected] = useState(null);

    const options = ["Attendee", "Event Organizer"];

    return (
        <View className=" rounded-full flex flex-col  items-center p-4 w-56 h-72">
            <View className='pb-3'>
                <Text className="font-bold  text-2xl text-center">
                    How would you join
                </Text>
                <Text className="font-bold  text-2xl text-center ">
                    Ease Event?
                </Text>
            </View>


            <View className="flex flex-col gap-4 w-full mt-2">
                {options.map((item, index: any) => {
                    const isSelected = selected === index;

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelected(index)}
                            className={`border bg-gray-200 rounded-xl flex flex-row items-center gap-4 px-3 border-gray-300 w-full py-4  ${isSelected ? 'border border-[#73138C] bg-gray-400' : 'border-gray-300'
                                }`}
                        >
                            {isSelected ? (
                                <Ionicons name="checkmark-circle" size={24} color="#73138C" />
                            ) : (
                                <Ionicons name="ellipse-outline" size={24} color="#73138C" />
                            )}
                            <Text className={`${isSelected ? 'text-[#73138C]' : 'text-black'} text-lg`}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <View className="w-full  pb-6 mt-4">
                <TouchableOpacity
                    className="bg-[#73138C] dark:bg-[#BB86FC] w-full py-4 rounded-full items-center justify-center active:opacity-80 shadow-md"
                    onPress={() => router.replace("/(auth)/Register")}
                >
                    <Text className="text-white dark:text-black text-lg font-inter-semibold tracking-wide">
                        continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default JoinModal;
