import React, { useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Reading from "../../../assets/profile/Reading.png"
import Health from "../../../assets/profile/Health.png"
import Art from "../../../assets/profile/Art.png"
import Bussiness from "../../../assets/profile/Bussiness.png"
import Finance from "../../../assets/profile/Finanace.png"


const SetInterest = () => {
    const [selected, setSelected] = useState<string[]>([""]);
    const handleSelect = (item: string) => {
        setSelected((prev) => prev.includes(item)
            ? prev.filter((value) => value != item)
            : [...prev, item]
        )
    };

    const interests: { name: string; image: ImageSourcePropType }[] = [
        {
            name: "Art",
            image: Art as ImageSourcePropType
        },
        {
            name: "Health",
            image: Health as ImageSourcePropType
        },
        {
            name: "Finance",
            image: Finance as ImageSourcePropType
        },
        {
            name: "Bussiness",
            image: Bussiness as ImageSourcePropType
        },
        {
            name: "Reading",
            image: Reading as ImageSourcePropType
        },
        {
            name: "Banking",
            image: Finance as ImageSourcePropType
        },
    ]

    return (

        <>

            <View style={{ flexDirection: "column", paddingVertical: 5, paddingLeft: 15, marginBottom: 5 }}>
                <Text style={{ letterSpacing: 1, fontWeight: "400" }}>
                    Customize your event recommendation base
                </Text>
                <Text style={{ letterSpacing: 1, fontWeight: "400" }}>
                    on your preferences. You can always do it late
                </Text>
            </View>

            <View style={styles.intersetWrapper}>
                {
                    interests.map((interest, index) => (

                        <TouchableOpacity
                            key={index}
                            onPress={() => handleSelect(interest.name)}
                            style={[styles.interest, { backgroundColor: selected.includes(interest.name) ? "#F5CFFF" : "#FEFCFF", borderColor: selected.includes(interest.name) ? "#73138C" : "inherit" }]}>
                            <Image
                                source={interest.image}
                                style={{ width: 24, height: 24 }}
                            />
                            <Text style={{ color: selected.includes(interest.name) ? "#73138C" : "black" }}>
                                {interest.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <View style={styles.buttonRow}>

                <TouchableOpacity style={styles.skipButton}>
                    <Text style={styles.skipText}>skip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextText}>next</Text>
                </TouchableOpacity>

            </View>

        </>
    );
}

const styles = StyleSheet.create({
    intersetWrapper: {
        flexDirection: "row",
        gap: 10,
        padding: 15,
        flexWrap: "wrap"
    },
    interest: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        gap: 5,
        borderRadius: 24,
        alignItems: "center",
        borderWidth: 1.5
    },
    buttonRow: {
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 16,
        marginTop: 16,
        width: "100%",
    },

    skipButton: {
        flex: 1,
        backgroundColor: "#EEDDFF",
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: "center",





    },

    nextButton: {
        flex: 1,
        backgroundColor: "#73138C",
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: "center",

        shadowColor: "#73138C",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.85,
        shadowRadius: 6,

        // Android shadow
        elevation: 6,
    },

    skipText: {
        color: "#73138C",
        fontWeight: "bold",
        fontSize: 16,
    },

    nextText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        boxShadow: "10px"
    },
})

export default SetInterest;
