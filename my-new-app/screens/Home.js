import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import * as SplashScreen from 'expo-splash-screen';
import { Avatar } from 'react-native-paper';
import { Image } from "react-native";
import { Divider } from 'react-native-paper';

function Home({navigation}) {
    const [active, setActive] = useState('');
    const [selectDate, setSelectDate] = useState('');

    function pressHandle() {
        navigation.navigate('Symptoms')
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
            <View style={styles.container}>
                <View style={styles.selectDate}>
                    <Text style={styles.heading}>Select Date</Text>
                    <View style={styles.Date}>
                        <Text style={styles.heading}>January, 2025</Text>
                        <Icon name="arrow-down" size={22} color="#3B1C32" />
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
                    <TouchableOpacity  style={selectDate === 'Wed' ? styles.selectedDate : styles.box} onPress={() => setSelectDate('Wed')}>
                        <Text  style={selectDate === 'Wed' ? styles.selectedDateHeading : styles.boxHeading}>Wed</Text>
                        <Text style={selectDate === 'Wed' ? styles.selectedDateDate : styles.boxDate}>14</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={selectDate === 'Thu' ? styles.selectedDate : styles.box} onPress={() => setSelectDate('Thu')}>
                        <Text style={selectDate === 'Thu' ? styles.selectedDateHeading : styles.boxHeading}>Thu</Text>
                        <Text style={selectDate === 'Thu' ? styles.selectedDateDate : styles.boxDate}>15</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={selectDate === 'Fri' ? styles.selectedDate : styles.box} onPress={() => setSelectDate('Fri')}>
                        <Text style={selectDate === 'Fri' ? styles.selectedDateHeading : styles.boxHeading}>Fri</Text>
                        <Text  style={selectDate === 'Fri' ? styles.selectedDateDate : styles.boxDate}>16</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.symptomsContainer}>
                    <TouchableOpacity style = {styles.symptomsBox} onPress={pressHandle}>
                        <Text style = {styles.symptomsText}>Add Symptoms</Text>
                    </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: '#640D5F', height: 2, width: '80%', marginVertical: 20 }} />
            </View>
        </ImageBackground>

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
        color: '#3B1C32'
    },
    selectDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '87%',
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
    },
    symptomsBox: {
        backgroundColor:'#F5EFFF',
        width: '45%',
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
    }
})