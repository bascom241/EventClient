import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, Text, Platform, Pressable, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import DateTimePicker, { DateTimePickerEvent, DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { router } from 'expo-router';

const AttendeeProfile = () => {
    // State management
    const [date, setDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const [isDateSelected, setIsDateSelected] = useState<boolean>(false);

    // Input States
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        if (Platform.OS === 'android') {
            setShowDatePicker(false);
        }
        if (selectedDate) {
            setDate(selectedDate);
            setIsDateSelected(true);
        }
    };

    const formatDate = (dateToFormat: Date) => {
        return dateToFormat.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleDatePress = () => {
        if (Platform.OS === 'android') {
            DateTimePickerAndroid.open({
                value: date,
                onChange: onDateChange,
                mode: 'date',
                display: 'default',
                maximumDate: new Date(),
            });
        } else {
            setShowDatePicker(!showDatePicker);
        }
    };

    const handleGenderPress = () => {
        Alert.alert("Select Gender", "", [
            { text: "Male", onPress: () => setGender("Male") },
            { text: "Female", onPress: () => setGender("Female") },
            { text: "Other", onPress: () => setGender("Other") },
            { text: "Cancel", style: "cancel" }
        ]);
    };

    const submitForm = () => {
        console.log("Form submitted successfully");
        // TESTING FOR UI PURPOSES
        router.push("/(auth)/OrganizerProfile")
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            className="flex-1"
        >
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View className='flex-col gap-2 px-4 justify-between flex-1'>
                    <View>
                        {/* Avatar Header */}
                        <View className='flex-row items-center justify-center relative'>
                            <Image
                                source={require("../../../assets/auth/profile.png")}
                                className="w-60 h-48"
                                resizeMode="contain"
                            />
                            <TouchableOpacity style={styles.editIconContainer}>
                                <Image
                                    source={require("../../../assets/auth/Exclude.png")}
                                    className="w-7 h-7"
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* First Name Input */}
                        <View className="flex-row items-center justify-center gap-2 rounded-xl px-4 mb-4 mt-4" style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}>
                            <TextInput
                                placeholder="First Name"
                                placeholderTextColor="#9CA3AF"
                                autoCapitalize="words"
                                autoCorrect={false}
                                className="flex-1 py-4 pl-3 text-gray-800 text-base"
                            />
                        </View>

                        {/* Last Name Input */}
                        <View className="flex-row items-center justify-center gap-2 rounded-xl px-4 mb-4 mt-1" style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}>
                            <TextInput
                                placeholder="Last Name"
                                placeholderTextColor="#9CA3AF"
                                autoCapitalize="words"
                                autoCorrect={false}
                                className="flex-1 py-4 pl-3 text-gray-800 text-base"
                            />
                        </View>

                        {/* Username Input */}
                        <View className="flex-row items-center justify-center gap-2 rounded-xl px-4 mb-4" style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}>
                            <TextInput
                                placeholder="Username"
                                placeholderTextColor="#9CA3AF"
                                autoCapitalize="none"
                                autoCorrect={false}
                                className="flex-1 py-4 pl-3 text-gray-800 text-base"
                            />
                        </View>

                        
                        <Pressable
                            onPress={handleDatePress}
                            className="flex-row items-center justify-between rounded-xl px-4 mb-4"
                            style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}
                        >
                            <View className="flex-1 py-4 pl-3">
                                <Text
                                    className={`text-base ${isDateSelected ? 'text-gray-800' : 'text-[#9CA3AF]'}`}
                                >
                                    {isDateSelected ? formatDate(date) : 'Date of Birth'}
                                </Text>
                            </View>

                            <View className="pr-1">
                                <Text style={{ color: '#9CA3AF', fontSize: 22 }}>📅</Text>
                            </View>
                        </Pressable>

                        {/* Phone Number Input */}
                        <View
                            className="flex-row items-center gap-2 rounded-xl px-4 mb-4"
                            style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}
                        >
                            {/* CLEANED: Removed the border divider line from here */}
                            <TouchableOpacity className="flex-row items-center gap-1 py-4 pl-2 pr-1">
                                <Text style={{ fontSize: 20 }}>🇳🇬</Text>
                                <Text style={{ color: '#9CA3AF', fontSize: 10 }}>▼</Text>
                            </TouchableOpacity>

                            <TextInput
                                placeholder="+234 000 000 000"
                                placeholderTextColor="#9CA3AF"
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                className="flex-1 py-4 pl-1 text-gray-800 text-base"
                            />
                        </View>

                        {/* Gender Picker Field */}
                        <Pressable
                            onPress={handleGenderPress}
                            className="flex-row items-center justify-between rounded-xl px-4 mb-4"
                            style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}
                        >
                            <View className="flex-1 py-4 pl-3">
                                <Text
                                    className={`text-base ${gender ? 'text-gray-800' : 'text-[#9CA3AF]'}`}
                                >
                                    {gender ? gender : 'Gender'}
                                </Text>
                            </View>

                            <View className="pr-1 justify-center">
                                <Text style={{ color: '#9CA3AF', fontSize: 10 }}>▼</Text>
                            </View>
                        </Pressable>
                    </View>

                    {/* Bottom Action Area */}
                    <View className="mt-4">
                        {/* iOS Inline Spinner Drawer Section */}
                        {Platform.OS === 'ios' && showDatePicker && (
                            /* CLEANED: Removed border-gray-200 and border style properties here */
                            <View className="bg-gray-100 rounded-2xl p-2 mb-4 shadow-sm">
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode="date"
                                    display="spinner"
                                    maximumDate={new Date()}
                                    onChange={onDateChange}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowDatePicker(false)}
                                    className="bg-gray-300 py-3 rounded-xl items-center mt-2"
                                >
                                    <Text className="text-gray-800 font-semibold text-base">Confirm Date</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        {/* Submit Button */}
                        <TouchableOpacity
                            onPress={submitForm}
                            className="bg-[#73138C] py-4 rounded-full items-center shadow-md mb-2"
                        >
                            <Text className="text-white font-bold text-lg">
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    editIconContainer: {
        position: 'absolute',
        bottom: 12,
        right: '28%',
    }
});

export default AttendeeProfile;