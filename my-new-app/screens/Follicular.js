import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Follicular = ({ navigation }) => {
    function pressHandleMain() {
        navigation.navigate('Information');
    }

    return (
        <ImageBackground source={require('../assets/images/follicular.png')} style={styles.background} resizeMode="cover">
            <View style={styles.header}>
                            <View style={styles.icon}>
                                <Icon name="arrow-left" size={30} color="black" onPress={pressHandleMain} />
                            </View>
                        </View>
            <View style={styles.container}>
                <Text style={styles.heading}>Follicular</Text>
                <View style={styles.captionCombined}>
                    <Text style={styles.caption}>Inner Spring</Text>
                    <Icon name="leaf" size={18} color="#8D77AB" />
                </View>
                <Text style={styles.days}>Day 6-14</Text>
                <Divider style={{ backgroundColor: '#441752', height: 2, width: '80%', marginVertical: 10 }} />
                <View style={styles.energy}>
                    <Text>
                        <Text style={styles.energyHeading}>ENERGY: </Text>
                        <Text style={styles.energyBar}> energy begins to rise</Text>
                    </Text>
                </View>
                <View style={styles.food}>
                    <Text style={styles.foodHeading}>FOOD: </Text>
                    <Text style={styles.foodItems}>red meat, poultry, salmon, eggs, cheese, fruits/veggies, fermented foods, flax, pepitas</Text>
                    <Text style={styles.avoidFoodItems}>(reduce alcohol, greasy/processed foods)</Text>
                </View>
                <View style={styles.dos}>
                    <Text style={styles.dosHeading}>DO: </Text>
                    <Text style={styles.dosItems}>Any form of HIIT (strength training, cardio, hiking, etc), get creative, start new projects, learn a new skill</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Follicular;

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
        color: '#640D5F',
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
        color: '#8D77AB',
        fontWeight: 'bold',
        fontSize: 23
    },
    days: {
        color: '#441752',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    energy: {
        marginTop: 20,
    },
    energyHeading: {
        fontSize: 20,
        color: '#441752',
        fontWeight: 'bold'
    },
    energyBar: {
        fontSize: 17,
        color: '#3B1C32',
    },
    food: {
        marginTop: 25,
        width: '88%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodHeading: {
        fontSize: 20,
        color: '#441752',
        fontWeight: 'bold'
    },
    foodItems: {
        color: '#3B1C32',
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
        color: '#441752',
        fontWeight: 'bold'
    },
    dosItems: {
        color: '#3B1C32',
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