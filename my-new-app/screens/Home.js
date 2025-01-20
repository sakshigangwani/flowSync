import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import * as SplashScreen from 'expo-splash-screen';
import { Avatar } from 'react-native-paper';
import { Image } from "react-native";
import { Divider } from 'react-native-paper';

function Home({ navigation }) {
    const [active, setActive] = useState('');
    const [selectDate, setSelectDate] = useState('');

    function pressHandle() {
        navigation.navigate('Symptoms')
    }

    function pressHandleInfo() {
        navigation.navigate('Information')
    }

    function pressMedicationHandle() {
        navigation.navigate('Medication')
    }

    return (
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background} resizeMode="cover">
            <View style={styles.header}>
                <View style={styles.icon}>
                    <Avatar.Image size={54} source={require('../assets/images/sakshi.jpg')} />
                </View>
                <View style={styles.name}>
                    <Text style={styles.nameText}>Hi, Sakshi</Text>
                </View>
            </View>
            <View style={styles.imgContainer}>
                        <Image source={require('../assets/images/popcorn.png')} style={styles.img} />
                    </View>
            <View style={styles.container}>
                <View style={styles.selectDate}>
                    <Text style={styles.heading}>Select Date</Text>
                    <View style={styles.Date}>
                        <Text style={styles.heading}>January, 2025</Text>
                        <Icon name="arrow-down" size={22} color="#180161" />
                    </View>
                </View>
                <View style={styles.boxes}>
                    <TouchableOpacity style={selectDate === 'Mon' ? styles.selectedDate : styles.box} onPress={() => setSelectDate('Mon')}>
                        <Text style={selectDate === 'Mon' ? styles.selectedDateHeading : styles.boxHeading}>Mon</Text>
                        <Text style={selectDate === 'Mon' ? styles.selectedDateDate : styles.boxDate}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={selectDate === 'Tue' ? styles.selectedDate : styles.box} onPress={() => setSelectDate('Tue')}>
                        <Text style={selectDate === 'Tue' ? styles.selectedDateHeading : styles.boxHeading}>Tue</Text>
                        <Text style={selectDate === 'Tue' ? styles.selectedDateDate : styles.boxDate}>13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={selectDate === 'Wed' ? styles.selectedDate : styles.box} onPress={() => setSelectDate('Wed')}>
                        <Text style={selectDate === 'Wed' ? styles.selectedDateHeading : styles.boxHeading}>Wed</Text>
                        <Text style={selectDate === 'Wed' ? styles.selectedDateDate : styles.boxDate}>14</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={selectDate === 'Thu' ? styles.selectedDate : styles.box} onPress={() => setSelectDate('Thu')}>
                        <Text style={selectDate === 'Thu' ? styles.selectedDateHeading : styles.boxHeading}>Thu</Text>
                        <Text style={selectDate === 'Thu' ? styles.selectedDateDate : styles.boxDate}>15</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={selectDate === 'Fri' ? styles.selectedDate : styles.box} onPress={() => setSelectDate('Fri')}>
                        <Text style={selectDate === 'Fri' ? styles.selectedDateHeading : styles.boxHeading}>Fri</Text>
                        <Text style={selectDate === 'Fri' ? styles.selectedDateDate : styles.boxDate}>16</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.symptomsContainer}>
                    <TouchableOpacity style={styles.symptomsBox} onPress={pressHandle}>
                        <Text style={styles.symptomsText}>Add Symptoms</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.symptomsBox} onPress={pressMedicationHandle}>
                        <Text style={styles.symptomsText}>Add Medication</Text>
                    </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: '#640D5F', height: 2, width: '80%', marginVertical: 20 }} />
                <View style={styles.knowledgeContainer}>
                    <Text style={styles.knowledgeHeading}>Knowledge Yourself</Text>
                    <View style={styles.knowledgeBoxes}>
                        <Image source={require('../assets/images/periods.jpg')} style={styles.logo} />
                        <View style={styles.readMoreContainer}>
                            <Text style={styles.knowledgeCaption}>The Circle of Strength: Menstrual, Follicular, Ovulation, Luteal</Text>
                            <TouchableOpacity style={styles.readMoreBtn} onPress={pressHandleInfo}>
                                <Text style={styles.readMoreBtnText}>Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </View>
        </ImageBackground >

    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    background: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
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
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#180161'
    },
    selectDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '87%',
        marginTop: "-15%"
    },
    Date: {
        flexDirection: 'row',
        gap: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxes: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 35
    },
    box: {
        // backgroundColor: 'yellow',
        height: 80,
        width: 70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#640D5F',
        borderWidth: 1
    },
    boxHeading: {
        fontSize: 17,
    },
    boxDate: {
        fontSize: 30,
        marginTop: 4
    },
    selectedDate: {
        backgroundColor: '#640D5F',
        height: 80,
        width: 70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#640D5F',
        borderWidth: 1
    },
    selectedDateHeading: {
        color: 'white',
        fontSize: 17,
    },
    selectedDateDate: {
        color: 'white',
        fontSize: 30,
        marginTop: 4
    },
    symptomsContainer: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20
    },
    symptomsBox: {
        backgroundColor: '#F5EFFF',
        width: '35%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#640D5F',
        borderWidth: 1,
        borderRadius: 10
    },
    symptomsText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#640D5F'
    },
    knowledgeContainer: {
        width: '87%'
    },
    knowledgeHeading: {
        fontSize: 19,
        marginRight: 187,
        color: '#180161',
        fontWeight: 'bold'
    },
    logo: {
        width: 180,
        height: 130,
        marginLeft: 10,
        borderRadius: 8,
        marginLeft: 15
    },
    knowledgeBoxes: {
        backgroundColor: '#FEFBD8',
        marginTop: 13,
        height: 180,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 12,
        borderColor: '#EECEB9',
        borderWidth: 2,
        borderRadius: 10
    },
    knowledgeCaption: {
        fontSize: 15,
        width: '42%',
        color: '#D20062',
    },
    readMoreContainer: {
        flexDirection: 'column',
        gap: 13
    },
    readMoreBtn: {
        backgroundColor: '#D20062',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        borderRadius: 8,
    },
    readMoreBtnText: {
        color: '#fff'
    },
    img: {
        height: 204,
        width: 280,
        borderRadius: 80,
        marginTop: 30
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})