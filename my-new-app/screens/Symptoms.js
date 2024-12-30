import { Text } from "react-native";
import { ImageBackground, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Chip } from 'react-native-paper';


const Symptoms = () => {
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
            <View style={styles.menstrualCard}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Light</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Medium</Chip>
                <Chip icon="information" onPress={() => console.log('Pressed')}>High</Chip>
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
    }
})