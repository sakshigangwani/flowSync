import { Text } from "react-native";
import { ImageBackground, StyleSheet, View, TouchableOpacity, Animated, useAnimatedValue } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect, useRef, useState } from "react";
import { Button } from 'react-native-paper';

const Symptoms = () => {
    const fadeAnim = useAnimatedValue(0); // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2900,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const [selectedFlow, setSelectedFlow] = useState("");
    const [selectedMood, setSelectedMood] = useState("");
    const [selectedSymptoms, setSelectedSymptoms] = useState("");

    return (
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background} resizeMode="cover">
            <View style={styles.header}>
                <View style={styles.icon}>
                    <Icon name="arrow-left" size={30} color="black" />
                </View>
                <View style={styles.name}>
                    <Text style={styles.nameText}>Symptoms</Text>
                </View>
            </View>
            <Animated.View style={[styles.mainContainer, { opacity: fadeAnim }]}>
                <Text style={styles.headingText}>How are you Feeling Today?</Text>
            </Animated.View>
            <Animated.View style={[styles.menstrualContainer, { opacity: fadeAnim }]}>
                <Text style={styles.menstrualText}>Menstrual Flow</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.customButton, selectedFlow === 'light' && styles.selectedButton]} onPress={() => setSelectedFlow("light")}>
                        <Icon name="tint" size={18} color={selectedFlow === 'light' ? 'white' : '#FF3E6D'} />
                        <Text style={selectedFlow === 'light' && styles.buttonText}>Light</Text>
                        {selectedFlow === "light" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.customButton, selectedFlow === 'medium' && styles.selectedButton]} onPress={() => setSelectedFlow("medium")}>
                        <Icon name="tint-slash" size={18} color={selectedFlow === 'medium' ? 'white' : '#FF3E6D'} />
                        <Text style={selectedFlow === 'medium' && styles.buttonText}>Medium</Text>
                        {selectedFlow === "medium" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.customButton, selectedFlow === 'high' && styles.selectedButton]} onPress={() => setSelectedFlow("high")}>
                        <Icon name="water" size={18} color={selectedFlow === 'high' ? 'white' : '#FF3E6D'} />
                        <Text style={selectedFlow === 'high' && styles.buttonText}>Heavy</Text>
                        {selectedFlow === "high" && (
                            <Icon name="check" size={15} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <Animated.View style={[styles.moodContainer, { opacity: fadeAnim }]}>
                <Text style={styles.menstrualText}>Mood</Text>
                <View style={styles.threeButtons}>
                    <TouchableOpacity style={[styles.threeButtonsStyle, selectedMood === 'Calm' && styles.clickedMoodBtn]} onPress={() => setSelectedMood("Calm")}>
                        <Icon name="peace" size={18} color={selectedMood == "Calm" ? 'white' : 'black'} />
                        <Text style={selectedMood === 'Calm' && styles.buttonText}>Calm</Text>
                        {selectedMood === "Calm" && (<Icon name="check" size={18} color="white" style={styles.tickIcon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.threeButtonsStyle, selectedMood === 'Happy' && styles.clickedMoodBtn]} onPress={() => setSelectedMood("Happy")}>
                        <Icon name="smile" size={18} color={selectedMood == "Happy" ? 'white' : 'black'} />
                        <Text style={selectedMood === 'Happy' && styles.buttonText}>Happy</Text>
                        {selectedMood === "Happy" && (<Icon name="check" size={18} color="white" style={styles.tickIcon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.threeButtonsStyle, selectedMood === 'Anxious' && styles.clickedMoodBtn]} onPress={() => setSelectedMood("Anxious")}>
                        <Icon name="meh" size={18} color={selectedMood == "Anxious" ? 'white' : 'black'} />
                        <Text style={selectedMood === 'Anxious' && styles.buttonText}>Anxious</Text>
                        {selectedMood === "Anxious" && (<Icon name="check" size={18} color="white" style={styles.tickIcon} />)}
                    </TouchableOpacity>
                </View>
                <View style={styles.twoButtons}>
                    <TouchableOpacity style={[styles.twoButtonsStyle, selectedMood === 'Depressed' && styles.clickedMoodBtn]} onPress={() => setSelectedMood("Depressed")}>
                        <Icon name="sad-cry" size={18} color={selectedMood == "Depressed" ? 'white' : 'black'} />
                        <Text style={selectedMood === 'Depressed' && styles.buttonText}>Depressed</Text>
                        {selectedMood === "Depressed" && (<Icon name="check" size={18} color="white" style={styles.tickIcon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.twoButtonsStyle, selectedMood === 'Confused' && styles.clickedMoodBtn]} onPress={() => setSelectedMood("Confused")}>
                        <Icon name="frown-open" size={18} color={selectedMood == "Confused" ? 'white' : 'black'} />
                        <Text style={selectedMood === 'Confused' && styles.buttonText}>Confused</Text>
                        {selectedMood === "Confused" && (<Icon name="check" size={18} color="white" style={styles.tickIcon} />)}
                    </TouchableOpacity>
                </View>
                <View style={styles.threeButton}>
                    <TouchableOpacity style={[styles.threeButtonStyle, selectedMood === 'Sad' && styles.clickedMoodBtn]} onPress={() => setSelectedMood("Sad")}>
                        <Icon name="frown" size={18} color={selectedMood == "Sad" ? 'white' : 'black'} />
                        <Text style={selectedMood === 'Sad' && styles.buttonText}>Sad</Text>
                        {selectedMood === "Sad" && (<Icon name="check" size={18} color="white" style={styles.tickIcon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.threeButtonStyle, selectedMood === 'Guilty' && styles.clickedMoodBtn]} onPress={() => setSelectedMood("Guilty")}>
                        <Icon name="meh-rolling-eyes" size={18} color={selectedMood == "Guilty" ? 'white' : 'black'} />
                        <Text style={selectedMood === 'Guilty' && styles.buttonText}>Guilty</Text>
                        {selectedMood === "Guilty" && (<Icon name="check" size={18} color="white" style={styles.tickIcon} />)}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.threeButtonStyle, selectedMood === 'Sleepy' && styles.clickedMoodBtn]} onPress={() => setSelectedMood("Sleepy")}>
                        <Icon name="bed" size={18} color={selectedMood == "Sleepy" ? 'white' : 'black'} />
                        <Text style={selectedMood === 'Sleepy' && styles.buttonText}>Sleepy</Text>
                        {selectedMood === "Sleepy" && (<Icon name="check" size={18} color="white" style={styles.tickIcon} />)}
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <Animated.View style={[styles.symptomsContainer, { opacity: fadeAnim }]}>
                <Text style={styles.menstrualText}>Symptoms</Text>
                <View style={styles.symptomsBtnContainer}>
                    <TouchableOpacity style={[styles.symptomsBtn, selectedSymptoms === "Fine" && styles.selectedButton]} onPress={() => setSelectedSymptoms("Fine")}>
                        <Icon name="smile-beam" size={18} color={selectedSymptoms == "Fine" ? 'white' : '#500073'} />
                        <Text style={selectedSymptoms === 'Fine' && styles.buttonText}>Everything is Fine</Text>
                        {selectedSymptoms === "Fine" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.symptomsBtn, selectedSymptoms === "Cramps" && styles.selectedButton]} onPress={() => setSelectedSymptoms("Cramps")}>
                        <Icon name="heartbeat" size={18} color={selectedSymptoms == "Cramps" ? 'white' : '#500073'} />
                        <Text style={selectedSymptoms === 'Cramps' && styles.buttonText}>Cramps</Text>
                        {selectedSymptoms === "Cramps" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.symptomsBtnTwoContainer}>
                    <TouchableOpacity style={[styles.symptomsBtnTwo, selectedSymptoms === "Acne" && styles.selectedButton]} onPress={() => setSelectedSymptoms("Acne")}>
                        <Icon name="meh" size={18} color={selectedSymptoms == "Acne" ? 'white' : '#500073'} />
                        <Text style={selectedSymptoms === 'Acne' && styles.buttonText}>Acne</Text>
                        {selectedSymptoms === "Acne" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.symptomsBtnTwo, selectedSymptoms === "Headache" && styles.selectedButton]} onPress={() => setSelectedSymptoms("Headache")}>
                        <Icon name="clinic-medical" size={18} color={selectedSymptoms == "Headache" ? 'white' : '#500073'} />
                        <Text style={selectedSymptoms === 'Headache' && styles.buttonText}>Headache</Text>
                        {selectedSymptoms === "Headache" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.symptomsBtnThreeContainer}>
                    <TouchableOpacity style={[styles.symptomsBtnThree, selectedSymptoms === "Nausea" && styles.selectedButton]} onPress={() => setSelectedSymptoms("Nausea")}>
                        <Icon name="dizzy" size={18} color={selectedSymptoms == "Nausea" ? 'white' : '#500073'} />
                        <Text style={selectedSymptoms === 'Nausea' && styles.buttonText}>Nausea</Text>
                        {selectedSymptoms === "Nausea" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.symptomsBtnThree, selectedSymptoms === "Cravings" && styles.selectedButton]} onPress={() => setSelectedSymptoms("Cravings")}>
                        <Icon name="ice-cream" size={18} color={selectedSymptoms == "Cravings" ? 'white' : '#500073'} />
                        <Text style={selectedSymptoms === 'Cravings' && styles.buttonText}>Cravings</Text>
                        {selectedSymptoms === "Cravings" && (
                            <Icon name="check" size={18} color="white" style={styles.tickIcon} />
                        )}
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <Animated.View style={{opacity: fadeAnim}}>
                <Button icon="bookmark" mode="contained" style={styles.saveBtn}>
                    Save your data
                </Button>
            </Animated.View>
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
    backgroundModalView: {
        flex: 1,
        height: "100%",
        width: "100%",
        opacity: 0.5
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
        fontSize: 35,
        fontFamily: 'Pacifico_400Regular',
        color: '#D91656'
    },
    mainContainer: {
        marginLeft: 30,
        marginTop: 27
    },
    headingText: {
        fontSize: 25,
        color: '#640D5F',
        fontWeight: 'bold',
    },
    menstrualContainer: {
        backgroundColor: '#FFEFEF',
        width: '87%',
        height: '13%',
        marginLeft: 30,
        marginTop: 20,
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
        backgroundColor: "#221F3B",
        borderColor: "#221F3B",
    },
    moodContainer: {
        backgroundColor: '#FBFFE2',
        height: 220,
        width: '87%',
        marginLeft: 30,
        marginTop: 20,
        borderRadius: 9,
        borderColor: '#FFACAC',
        borderWidth: 1
    },
    threeButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    threeButtonsStyle: {
        borderColor: '#FFACAC',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7
    },
    twoButtons: {
        flexDirection: 'row',
    },
    twoButtonsStyle: {
        borderColor: '#FFACAC',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 12,
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7
    },
    threeButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    threeButtonStyle: {
        borderColor: '#FFACAC',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7
    },
    clickedMoodBtn: {
        backgroundColor: '#221F3B'
    },
    symptomsContainer: {
        backgroundColor: '#F5EFFF',
        height: 220,
        width: '87%',
        marginLeft: 30,
        marginTop: 20,
        borderRadius: 9,
        borderColor: '#8D77AB',
        borderWidth: 1
    },
    symptomsBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    symptomsBtn: {
        borderColor: '#8D77AB',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
    },
    symptomsBtnTwoContainer: {
        flexDirection: 'row',
    },
    symptomsBtnTwo: {
        borderColor: '#8D77AB',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginLeft: 28,
        gap: 7
    },
    symptomsBtnThreeContainer: {
        flexDirection: 'row',
    },
    symptomsBtnThree: {
        borderColor: '#8D77AB',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
        marginTop: 12,
        marginLeft: 28,
    },
    modal: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    visibleModal: {
        backgroundColor: 'black',
        height: 100,
        width: '87%',
        marginTop: -400,
        marginLeft: 30,
    },
    saveBtn: {
        width: '50%',
        backgroundColor: '#D91656',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 110
    }
})