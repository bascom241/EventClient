import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, Text, Platform, Pressable, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import { router } from 'expo-router';
const OrganizerProfile = () => {
 
    // Input States
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [orgType, setOrgType] = useState<string>('');
    const handleOrganizationPress = () => {
        Alert.alert("Select Gender", "", [
            { text: "Tech", onPress: () => setOrgType("Tech") },
            { text: "Art", onPress: () => setOrgType("Art") },
            { text: "Other", onPress: () => setOrgType("Other") },
            { text: "Cancel", style: "cancel" }
        ]);
    };

    const submitForm = () => {
        console.log("Form submitted successfully")
        router.push("/(auth)/Location")
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

                        {/* Organization Name */}
                        <View className="flex-row items-center justify-center gap-2 rounded-xl px-4 mb-4 mt-4" style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}>
                            <TextInput
                                placeholder="Orgaization/Company Name"
                                placeholderTextColor="#9CA3AF"
                                autoCapitalize="words"
                                autoCorrect={false}
                                className="flex-1 py-4 pl-3 text-gray-800 text-base"
                            />
                        </View>

                        {/* Organization Type */}
                        <Pressable
                            onPress={handleOrganizationPress}
                            className="flex-row items-center justify-between rounded-xl px-4 mb-4"
                            style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}
                        >
                            <View className="flex-1 py-4 pl-3">
                                <Text
                                    className={`text-base ${orgType ? 'text-gray-800' : 'text-[#9CA3AF]'}`}
                                >
                                    {orgType ? orgType : 'Organization Type'}
                                </Text>
                            </View>

                            <View className="pr-1 justify-center">
                                <Text style={{ color: '#9CA3AF', fontSize: 10 }}>▼</Text>
                            </View>
                        </Pressable>

                        {/*  Website */}
                        <View className="flex-row items-center justify-center gap-2 rounded-xl px-4 mb-4" style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}>
                            <TextInput
                                placeholder="Website(Optional)"
                                placeholderTextColor="#9CA3AF"
                                autoCapitalize="none"
                                autoCorrect={false}
                                className="flex-1 py-4 pl-3 text-gray-800 text-base"
                            />
                        </View>




                        {/* phone Number  */}
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



                        <View className="flex-row items-center justify-center gap-2 rounded-xl px-4 mb-4" style={{ backgroundColor: "#e8e8e8", paddingVertical: 4 }}>
                            <TextInput
                                placeholder="Brief about you"
                                multiline={true}
                                numberOfLines={4}
                                placeholderTextColor="#9CA3AF"
                                autoCapitalize="none"
                                autoCorrect={false}
                                className="flex-1 py-4 pl-3 text-gray-800 text-base"
                            />
                        </View>

                        <TouchableOpacity
                            onPress={submitForm}
                            className="bg-[#73138C] py-4 rounded-full items-center shadow-md mb-2 mt-4"
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

export default OrganizerProfile;