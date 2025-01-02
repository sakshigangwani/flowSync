import { Text } from "react-native";
import { ImageBackground, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Chip } from 'react-native-paper';
import { useState } from "react";


const Symptoms = () => {
    const [selectedFlow, setSelectedFlow] = useState("");

    return (
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background} resizeMode="cover">
            <View style={styles.header}>
                <View style={styles.icon}>
                    <Icon name="arrow-left" size={35} color="black" />
                </View>
                <View style={styles.name}>
                    <Text style={styles.nameText}>Symptoms</Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.headingText}>How are you Feeling Today?</Text>
            </View>
            <View style={styles.menstrualContainer}>
                <Text style={styles.menstrualText}>Menstrual Flow</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.customButton, selectedFlow === 'light' && styles.selectedButton]} onPress={() => setSelectedFlow("light")}>
                        <Icon name="tint" size={18} color={selectedFlow === 'light' ? 'white': '#FF3E6D'} />
                        <Text style={selectedFlow === 'light' && styles.buttonText}>Light</Text>
                        {selectedFlow === "light" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.customButton, selectedFlow === 'medium' && styles.selectedButton]} onPress={() => setSelectedFlow("medium")}>
                        <Icon name="tint-slash" size={18} color={selectedFlow === 'medium' ? 'white': '#FF3E6D'} />
                        <Text style={selectedFlow === 'medium' && styles.buttonText}>Medium</Text>
                        {selectedFlow === "medium" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.customButton, selectedFlow === 'high' && styles.selectedButton]} onPress={() => setSelectedFlow("high")}>
                        <Icon name="water" size={18} color={selectedFlow === 'high' ? 'white': '#FF3E6D'} />
                        <Text style={selectedFlow === 'high' && styles.buttonText}>Heavy</Text>
                        {selectedFlow === "high" && (
                            <Icon name="check" size={15} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Symptoms;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30
    },
    icon: {
        marginTop: 85,
        marginLeft: 30,
    },
    nameText: {
        marginTop: 85,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Pacifico_400Regular',
        color: '#D91656'
    },
    mainContainer: {
        marginLeft: 30,
        marginTop: 40
    },
    headingText: {
        fontSize: 25,
        color: '#640D5F',
        fontWeight: 'bold'
    },
    menstrualContainer: {
        backgroundColor: '#FFEFEF',
        width: '87%',
        height: '13%',
        marginLeft: 30,
        marginTop: 25,
        borderRadius: 9,
        borderColor: '#E195AB',
        borderWidth: 1
    },
    menstrualText: {
        fontSize: 17,
        padding: 20,
        fontWeight: '500'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    customButton: {
        borderColor: '#E195AB',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        gap: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '400',
        color: 'white'
    },
    selectedButton: {
        backgroundColor: "#FF3E6D",
        borderColor: "#FF3E6D",
    },
    tickIcon: {
        
    },
})