import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Luteal = ({navigation}) => {
    function pressHandleMain() {
        navigation.navigate('Information');
    }

    return (
            <ImageBackground source={require('../assets/images/luteal.png')} style={styles.background} resizeMode="cover">
                <View style={styles.header}>
                                <View style={styles.icon}>
                                    <Icon name="arrow-left" size={30} color="black" onPress={pressHandleMain} />
                                </View>
                            </View>
                <View style={styles.container}>
                    <Text style={styles.heading}>Luteal</Text>
                    <View style={styles.captionCombined}>
                        <Text style={styles.caption}>Inner Fall</Text>
                        <Icon name="cloud" size={18} color="#6A9C89" />
                    </View>
                    <Text style={styles.days}>Day 20-28</Text>
                    <Divider style={{ backgroundColor: '#0D7C66', height: 2, width: '80%', marginVertical: 10 }} />
                    <View style={styles.energy}>
                        <Text>
                            <Text style={styles.energyHeading}>ENERGY: </Text>
                            <Text style={styles.energyBar}> decrease in energy</Text>
                        </Text>
                    </View>
                    <View style={styles.food}>
                        <Text style={styles.foodHeading}>FOOD: </Text>
                        <Text style={styles.foodItems}>sweet potato, squash, healthy fats, protein, sunflower seeds, sesame seeds, dark chocolate.</Text>
                        <Text style={styles.avoidFoodItems}>(reduce added sugar, caffeine, alcohol, greasy/processed foods)</Text>
                    </View>
                    <View style={styles.dos}>
                        <Text style={styles.dosHeading}>DO: </Text>
                        <Text style={styles.dosItems}>moderate-impact workouts (pilates, yoga sculpt, light cardio/walking), focus on simple tasks, journal/reflect</Text>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default Luteal;

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
        color: '#16423C',
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
        color: '#6A9C89',
        fontWeight: 'bold',
        fontSize: 23
    },
    days: {
        color: '#0D7C66',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    energy: {
        marginTop: 20,
    },
    energyHeading: {
        fontSize: 20,
        color: '#16423C',
        fontWeight: 'bold'
    },
    energyBar: {
        fontSize: 17,
        color: '#0D7C66',
    },
    food: {
        marginTop: 25,
        width: '88%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodHeading: {
        fontSize: 20,
        color: '#16423C',
        fontWeight: 'bold'
    },
    foodItems: {
        color: '#0D7C66',
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
        color: '#16423C',
        fontWeight: 'bold'
    },
    dosItems: {
        color: '#0D7C66',
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