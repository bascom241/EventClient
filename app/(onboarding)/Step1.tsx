import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import PaginationDots from '@/components/PaginationDots';
import { useOnboarding } from '@/store/useOnboardingStore';
const Step1 = () => {

    const {setActiveScreen} = useOnboarding()

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/(onboarding)/Step2")            
        }, 6000)
    }, []);

 

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground 
                source={require("../../assets/onboarding/ScreenOne.jpg")}
                style={styles.image}
                resizeMode='cover'
            >
                <View></View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Welcome to
                    </Text>
                    <Text style={styles.text}>
                        Ease Event 👋
                    </Text>

                    <Text className='text-white'>The best social event discovering and online</Text>
                    <Text className='text-white'>ticketing application in this century</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'space-between',
    },
    textContainer: {
        paddingBottom: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Step1;
