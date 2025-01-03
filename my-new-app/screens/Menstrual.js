import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Menstrual = () => {
    return (
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background} resizeMode="cover">
            <View style={styles.container}>
                <Text style={styles.heading}>Menstrual</Text>
                <View style={styles.captionCombined}>
                    <Text style={styles.caption}>Inner Winter</Text>
                    <Icon name="snowflake" size={18} color="#092635" />
                </View>
                <Text style={styles.days}>Day 1-5</Text>
                <Divider style={{ backgroundColor: '#508C9B', height: 2, width: '80%', marginVertical: 10 }} />
                <View style={styles.energy}>
                    <Text>
                        <Text style={styles.energyHeading}>ENERGY: </Text>
                        <Text style={styles.energyBar}> low energy</Text>
                    </Text>
                </View>
                <View style={styles.food}>
                    <Text style={styles.foodHeading}>FOOD: </Text>
                    <Text style={styles.foodItems}>soups, healthy stews, roasted veggis/food, stir-fries, red meat, fatty fish, shellfish, beets, mushrooms, greens</Text>
                    <Text style={styles.avoidFoodItems}>(reduce caffeine, alcohol, greasy/processed foods)</Text>
                </View>
                <View style={styles.dos}>
                    <Text style={styles.dosHeading}>DO: </Text>
                    <Text style={styles.dosItems}>sleep, rest, low-impact workouts, yoga, walk, avoid big projects or long to-do lists</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Menstrual;

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
    },
    heading: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#213555',
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
        color: '#092635',
        fontWeight: 'bold',
        fontSize: 23
    },
    days: {
        color: '#508C9B',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    energy: {
        marginTop: 20,
    },
    energyHeading: {
        fontSize: 20,
        color: '#134B70',
        fontWeight: 'bold'
    },
    energyBar: {
        fontSize: 17,
        color: '#134B70',
    },
    food: {
        marginTop: 25,
        width: '88%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodHeading: {
        fontSize: 20,
        color: '#134B70',
        fontWeight: 'bold'
    },
    foodItems: {
        color: '#134B70',
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
        color: '#134B70',
        fontWeight: 'bold'
    },
    dosItems: {
        color: '#134B70',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 4
    }
})