import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Ovulation = ({ navigation }) => {
    function pressHandleMain() {
        navigation.navigate('Information');
    }

    return (
        <ImageBackground source={require('../assets/images/ovulation.png')} style={styles.background} resizeMode="cover">
            <View style={styles.header}>
                            <View style={styles.icon}>
                                <Icon name="arrow-left" size={30} color="black" onPress={pressHandleMain} />
                            </View>
                        </View>
            <View style={styles.container}>
                <Text style={styles.heading}>Ovulation</Text>
                <View style={styles.captionCombined}>
                    <Text style={styles.caption}>Inner Summer</Text>
                    <Icon name="sun" size={18} color="#F26B0F" />
                </View>
                <Text style={styles.days}>Day 15-20</Text>
                <Divider style={{ backgroundColor: '#FFB200', height: 2, width: '80%', marginVertical: 10 }} />
                <View style={styles.energy}>

                    <Text style={styles.energyHeading}>ENERGY: </Text>
                    <Text style={styles.energyBar}> highest energy / focus level (your most powerful self!)</Text>

                </View>
                <View style={styles.food}>
                    <Text style={styles.foodHeading}>FOOD: </Text>
                    <Text style={styles.foodItems}>fibrous foods (fruits / veggies), cruciferous veggies, fish, nuts, avocado</Text>
                </View>
                <View style={styles.dos}>
                    <Text style={styles.dosHeading}>DO: </Text>
                    <Text style={styles.dosItems}>Any form of HIIT, movements / dance that nurture your feminine energy, finalize a big project, host meetings, outreach, collaborate</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Ovulation;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50
    },
    heading: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#FFB200',
        fontFamily: 'Pacifico_400Regular',
        width: '100%',
        textAlign: 'center',
    },
    captionCombined: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7
    },
    caption: {
        color: '#F26B0F',
        fontWeight: 'bold',
        fontSize: 23
    },
    days: {
        color: '#FFB200',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    energy: {
        marginTop: 20,
        width: '60%'
    },
    energyHeading: {
        fontSize: 20,
        color: '#F26B0F',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    energyBar: {
        fontSize: 17,
        color: '#E4003A',
        textAlign: 'center',
        marginTop: 4,
    },
    food: {
        marginTop: 25,
        width: '88%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodHeading: {
        fontSize: 20,
        color: '#F26B0F',
        fontWeight: 'bold'
    },
    foodItems: {
        color: '#E4003A',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 4
    },
    avoidFoodItems: {
        color: '#D91656',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 8
    },
    dos: {
        marginTop: 25,
        width: '88%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dosHeading: {
        fontSize: 20,
        color: '#F26B0F',
        fontWeight: 'bold'
    },
    dosItems: {
        color: '#E4003A',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 4
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
})