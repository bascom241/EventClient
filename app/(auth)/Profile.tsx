import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import AttendeeProfile from '@/features/profile/components/AttendeeProfile';
const Profile = () => {
    return (
        <SafeAreaView style={styles.profileContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> router.back()}>
                    <Ionicons name='arrow-back' color="black" size={24}/>
                </TouchableOpacity>

                <Text style={styles.title}>Fill Your Profile</Text>

            </View>

            <AttendeeProfile/>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        gap: 5,
        marginBottom: 20,
        marginTop: 10,
        marginLeft: 5
    },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default Profile;
