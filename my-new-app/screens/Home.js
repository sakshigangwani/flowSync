import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import * as SplashScreen from 'expo-splash-screen';
import { Avatar } from 'react-native-paper';

// SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from hiding automatically

function Home() {
    const [active, setActive] = useState('');
    // const [fontsLoaded, setFontsLoaded] = useState(false);

    // const loadFonts = async () => {
    //     await Font.loadAsync({
    //         Pacifico_400Regular,
    //     });
    //     setFontsLoaded(true);
    //     SplashScreen.hideAsync(); // Hide the splash screen when fonts are loaded
    // };

    // if (!fontsLoaded) {
    //     loadFonts();
    //     return null;
    // }

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
            
        </ImageBackground>

    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
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
    }
})